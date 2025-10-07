import { redirect } from 'next/navigation';
import { auth } from '../app/api/auth/[...nextauth]/auth'
export default async function Home() {
  const session = await auth();

  if (session) {
    return (
      <h1>Welcome {session.user?.name}</h1>
    );
  } else {
    redirect('/Login')
  }
}
