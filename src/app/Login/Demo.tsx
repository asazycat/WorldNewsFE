'use client'

import { Button } from "@mui/material"
import { credentialsAction } from "../actions"

export default function Demo() {
        const demoFormData = new FormData(); 
          demoFormData.append("email", 'demo@gmail.co.uk'); 
          demoFormData.append("password", 'demo'); 

          return (
    <>
        <Button type="button" onClick={() => { credentialsAction(demoFormData)}} variant="contained" color="info" sx={{width:'25%', margin:"auto", marginTop:"2em", backgroundColor:"white", color:"red"}}>Demo</Button>
    </>
          )
}