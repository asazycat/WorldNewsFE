
import { signIn } from "../api/auth/[...nextauth]/auth";

export default function Page() 
{
  const credentialsAction = async (formData: FormData) => {
         'use server'
         await signIn("credentials", formData)
     }
     
     return (
       <form action={credentialsAction}>
      <label htmlFor="credentials-email">
        Email
        <input type="email" id="credentials-email" name="email" />
      </label>
      <label htmlFor="credentials-password">
        Password
        <input type="password" id="credentials-password" name="password" />
      </label>
      <input type="submit" value="Sign In" />
    </form>);
}