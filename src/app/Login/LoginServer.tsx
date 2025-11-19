import { credentialsAction } from "../actions";
export default async function LoginServer() {
  function initials () {
    // document.getElementById('credentials-email')?.value = 'ali@gmail.com';
    // document.getElementById('credentials-password')?.value = 'ali'
  }
       return (
            <form action={credentialsAction}>
           <label htmlFor="credentials-email">
             Email
             <input type="email" id="credentials-email" name="email" autoComplete="username" defaultValue="ali@gmail.com" required/>
           </label>
           <label htmlFor="credentials-password">
             Password
             <input type="password" id="credentials-password" name="password" autoComplete="current-password" defaultValue="ali" required/>
           </label>
           <input type="submit" value="Sign In" />
         </form>);
 }