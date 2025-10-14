import { redirect } from 'next/navigation';
import { auth } from '../app/api/auth/[...nextauth]/auth'
export default async function Home() {
  const session = await auth();

  if (session) {
    return (<>
      <h1>Welcome {session.user?.name}</h1>
      <a href='/SearchNews'>Search News</a>
      <a href='/RetrieveNews'>Retrieve News</a>
      </>

    );
  } else {
    redirect('/Login')
  }
}
