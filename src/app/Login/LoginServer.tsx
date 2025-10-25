import { credentialsAction } from "../actions";
export default async function LoginServer() {
       return (
            <form action={credentialsAction}>
           <label htmlFor="credentials-email">
             Email
             <input type="email" id="credentials-email" name="email" defaultValue={'ali@gmail.com'}/>
           </label>
           <label htmlFor="credentials-password">
             Password
             <input type="password" id="credentials-password" name="password" defaultValue={'ali'}/>
           </label>
           <input type="submit" value="Sign In" />
         </form>);
 }