import { redirect } from 'next/navigation';
import { auth } from '../app/api/auth/[...nextauth]/auth'

export default async function Home() {
  const session = await auth();
  session ? redirect('/Homepage') : redirect('/Login')
  }
