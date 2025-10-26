import { auth } from "./api/auth/[...nextauth]/auth";

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
        <Navigation user={session?.user?.name ?? ''}/>
       {children}
      </body>) : (<body>
        <LoginServer/>
      </body>)}
    </html>
  );
}
