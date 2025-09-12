
'use client'
import { useState } from "react"
import SearchNewsAction from "../actions"
import { TextField } from "@mui/material"
import { NewsArticle } from "../../../interfaces"
export default function SearchNewsClient({news}: {news:[]}) {
   
   
    const [searchNews, setsearchNews] = useState<NewsArticle[]>(news)
  
    return (
        <>
            <ul>{searchNews.map((eachNews: NewsArticle) => <li key={eachNews.id}>{eachNews.title}</li>)}</ul>
            <TextField id="outlined-basic" label="Outlined" variant="outlined"  onClick={async (e: React.MouseEvent<HTMLInputElement>) => { const updatedNews = await SearchNewsAction('en' ,e.currentTarget.value); setsearchNews(updatedNews) }}/>

          
        </>
    )
}