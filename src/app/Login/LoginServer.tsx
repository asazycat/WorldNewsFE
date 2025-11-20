

import { Button, TextField } from "@mui/material";
import { credentialsAction } from "../actions";


export default async function LoginServer() {
 
       return (
          <form action={credentialsAction}>
            <TextField required name="email" label="Email" type="email" placeholder="email" aria-required defaultValue={'ali@gmail.com'}/>
            <TextField name="password" label="Password" type="password" placeholder="password" autoComplete="current-password" defaultValue={'ali'} required/>
            <Button type="submit" variant="contained" color="primary">Login</Button>
          </form>
         );
 }