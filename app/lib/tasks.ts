'use server'

import { headers } from 'next/headers'
import { redirect } from 'next/navigation'

const tasks: { title: string; description: string; }[] = []

export async function getTasks() {
  return tasks
}

export async function createTask(form: FormData) {
  tasks.push({
    title: String(form.get('title')),
    description: String(form.get('description')),
  })
  redirect((await headers()).get('referer') ?? '/')
}