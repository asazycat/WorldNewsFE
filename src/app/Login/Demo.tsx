'use client'

import { Button } from "@mui/material"
import { credentialsAction } from "../actions"

export default function Demo() {
        const demoFormData = new FormData(); 
          demoFormData.append("email", 'ali@gmail.com'); 
          demoFormData.append("password", 'ali'); 

          return (
    <>
        <Button type="button" onClick={() => { credentialsAction(demoFormData)}} variant="contained" color="info" sx={{width:'25%', margin:"auto", marginTop:"2em", backgroundColor:"white", color:"red"}}>Demo</Button>
    </>
          )
}