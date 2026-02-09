'use client'
import { NewsArticle } from "../../../interfaces"
import { Card, CardHeader, CardContent, CardMedia, Avatar, CardActionArea } from "@mui/material"
import Typography from '@mui/material/Typography';

export default function EachSearchNewsClient({ eachNews }: { eachNews: NewsArticle }) {
    const {title, image, authors, language, category, source_country} = eachNews
    const new_authors = authors ?? ['@nside']
    return (
        <Card sx={{backgroundColor:"red", color: "white", width:"100%", border:"2px solid green"}}>
            <CardActionArea>
            <CardHeader title={title} avatar={<Avatar>{new_authors[0][0] ?? ''}</Avatar>}/>
             <CardMedia  component={'img'} height={200} image={image ?? ''}/>
           
            </CardActionArea>
        </Card>
    )
}