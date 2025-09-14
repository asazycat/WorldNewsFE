
'use client'
import { useState } from "react"
import { SearchNewsAction } from "../actions"
import { TextField, Checkbox, MenuItem, Select, Button } from "@mui/material"
import { NewsArticle } from "../../../interfaces"
import { categories, countries, languages } from "../../../public/data"
import SearchNewsClientForm from "./SearchNewsClientForm"
export default function SearchNewsClient({children}: {children: React.ReactNode}) {
   
    const [searchNews, setsearchNews] = useState<NewsArticle[]>([])
    const [text, setText] = useState('')
    const [textMatchIndexes, setTextMatchIndexes] = useState('title,content')
    const [country, setCountry] = useState('us')
    const [language, setLanguage] = useState('en')
    const [category, setCategory] = useState('')
    console.log(searchNews)
    if (searchNews.length !== 0) {
        return (
            <>
                <ul>{searchNews.map((eachNews: NewsArticle) => <li key={eachNews.id}>{eachNews.title}</li>)}</ul>
                <div>
                    <SearchNewsClientForm text={text} textMatchIndexes={textMatchIndexes} country={country} language={language} category={category} setText={setText} setTextMatchIndexes={setTextMatchIndexes} setCountry={setCountry} setCategory={setCategory} setLanguage={setLanguage} setsearchNews={setsearchNews}/>
                </div>
            </>
        )
    } else {
        return (
            <>
                {children}
                <div>
                    <SearchNewsClientForm text={text} textMatchIndexes={textMatchIndexes} country={country} language={language} category={category} setText={setText} setTextMatchIndexes={setTextMatchIndexes} setCountry={setCountry} setCategory={setCategory} setLanguage={setLanguage} setsearchNews={setsearchNews}/>
                </div>
            </>
        )
    }
    
    
}


