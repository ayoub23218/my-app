'use server'

import { db } from '@/db';
import { blogTable } from '@/db/schema';
import { eq, asc } from 'drizzle-orm';
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'


export async function getBlogs() {
  return await db.select().from(blogTable).orderBy(asc(blogTable.id));
}

export async function createBlog(form: FormData) {
  await db.insert(blogTable).values({
    title: String(form.get('title')),
    content: String(form.get('content'))
  })
  redirect((await headers()).get('referer') ?? '/')
}
export async function deleteBlog(id: string) {
  await db.delete(blogTable).where(eq(blogTable.id, id))
  redirect((await headers()).get('referer') ?? '/')
}
export async function editBlog(form: FormData) {
  await db
    .update(blogTable)
    .set({
      title: String(form.get('title')),
      content: String(form.get('content')),
      done: form.get('done') === 'on',
    })
    .where(eq(blogTable.id, String(form.get('id'))))
  redirect((await headers()).get('referer') ?? '/')
}

