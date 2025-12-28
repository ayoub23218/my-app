'use server'
import { eq } from 'drizzle-orm';
import { db } from '@/db'
import { usersTable } from '@/db/schema'
import { compare, hash } from 'bcryptjs'
import { headers, cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function register(form: FormData) {
  const login = String(form.get('login'))
  const password = String(form.get('password'))
  await db.insert(usersTable).values({
    login, // short for login: login
    password: await hash(password, 10),
  })
  const signature = await hash(secret + login, 10)
  const cookieStore = await cookies()
  cookieStore.set('session', `${login};${signature}`)

  redirect((await headers()).get('referer') ?? '/')
}

export async function login(form: FormData) {
  const login = String(form.get('login'))
  const password = String(form.get('password'))
  const users = await db.select().from(usersTable)
    .where(eq(usersTable.login, login))
  const loggedIn = users.length > 0
    ? await compare(password, users[0].password)
    : false
  if (loggedIn) {
    const secret = process.env.SECRET
    const signature = await hash(secret + login, 10)
    const cookieStore = await cookies()
    cookieStore.set('session', `${login};${signature}`)
  }
  redirect((await headers()).get('referer') ?? '/')
}

const secret = process.env.SECRET

export async function getCurrentUser() {
  // Get the session cookie
  const cookieStore = await cookies()
  const session = cookieStore.get('session')
  if (!session) return null

  // Check the signature
  const [login, signature] = session.value.split(';')
  if (!login || !signature) return null
  const correct = await compare(secret + login, signature)

  return correct ? login : null
}