'use client'

import { Box } from "@mui/material"
export default function BoxComponent({children}: {children: React.ReactNode}) {
    return (
         <Box sx={{display:{sm: "flex", md:"grid"}, gridTemplateColumns: "auto auto ", width: "80%", margin:"auto", border: "2px solid black", gap:"2em", padding: "2em"}}>
            {children}
         </Box>
    )
}