'use server'

import { updateUser } from '@/lib/mongo/users'

export async function updateName(name: string, email: string) {
  // TODO: name and email are sent from the client and should be validated!
  await updateUser(email, { name })
}
