'use server'

import { db } from '@/db';
import { blogTable } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'


export async function getTasks() {
  return await db.select().from(blogTable)
}

export async function createTask(form: FormData) {
  await db.insert(blogTable).values({
    title: String(form.get('title')),
    content: String(form.get('content'))
  })
  redirect((await headers()).get('referer') ?? '/')
}
export async function deleteTask(formData: FormData) {
  const id = formData.get('id');
  
  if (id) {

    await db.delete(blogTable).where(eq(blogTable.id, String(id)));
  }
  
  redirect((await headers()).get('referer') ?? '/')
}