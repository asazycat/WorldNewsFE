import { auth } from "./api/auth/[...nextauth]/auth";
import '../../styles/globals.css'
import LoginServer from "../app/Login/LoginServer";
import Navigation from "./Navigation";


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth()
  return (
    <html lang="en">
      {session ? (<body>
        <Navigation name={session?.user?.name ?? ''} image={session?.user?.image ?? ''}/>
       {children}
      </body>) : (<body>
        <LoginServer/>
      </body>)}
    </html>
  );
}
