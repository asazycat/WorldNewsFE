

import { Button, TextField, Box, FormGroup } from "@mui/material";
import { credentialsAction } from "../actions";
import Demo from "./Demo";

export default async function LoginServer() {   
       return (
        <Box sx={{display:"flex", flexDirection: "column", margin: "auto", height: "100vh", justifyContent: "center", textAlign:"center"}} >
            <form action={credentialsAction}>
              <FormGroup sx={{width:'50%', margin:"auto", padding:"2em", borderRadius:"20px", backgroundColor:"red"}}>
                <TextField required name="email" label="Email" type="email" placeholder="email" aria-required sx={{marginTop:"2em", backgroundColor: 'white', borderRadius:"10px"}}/>
                <TextField name="password" label="Password" type="password" placeholder="password" autoComplete="current-password"  required sx={{marginTop:"2em", backgroundColor: 'white', borderRadius:"10px"}}/>
                <FormGroup sx={{display:"flex", flexDirection: "row"}}>
                  <Button type="submit" variant="contained" sx={{width:'25%', margin:"auto", marginTop:"2em", backgroundColor:"white", color:"red"}}>Login</Button>
                  <Demo/>
                </FormGroup>
              </FormGroup>
            </form>
        </Box>
         );
 }