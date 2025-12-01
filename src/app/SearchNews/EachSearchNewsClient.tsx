'use client'
import { NewsArticle } from "../../../interfaces"
import { Card, CardHeader, CardContent } from "@mui/material"
import Typography from '@mui/material/Typography';

export default function EachSearchNewsClient({ eachNews }: { eachNews: NewsArticle }) {
    const {title, image, authors, language, category, source_country} = eachNews
    console.log(title)
    return (
        <Card sx={{backgroundColor:"red", color: "white", width:"100%", border:"2px solid green"}}>
            <CardHeader title={title}>
               
            </CardHeader>
            
        </Card>
    )
}