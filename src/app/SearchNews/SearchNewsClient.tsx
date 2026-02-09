
'use client'
import { useState } from "react"
import { NewsArticle } from "../../../interfaces"
import SearchNewsClientForm from "./SearchNewsClientForm"
import EachSearchNewsClient from "./EachSearchNewsClient"
import BoxComponent from "./BoxComponent"
export default function SearchNewsClient({children}: {children: React.ReactNode}) {
   
    const [searchNews, setsearchNews] = useState<NewsArticle[]>([])
    const [text, setText] = useState('')
    const [textMatchIndexes, setTextMatchIndexes] = useState('title,content')
    const [country, setCountry] = useState('us')
    const [language, setLanguage] = useState('en')
    const [category, setCategory] = useState('All')
 
    if (searchNews.length !== 0) {
        return (
            <>
                
                
                
                <SearchNewsClientForm text={text} textMatchIndexes={textMatchIndexes} country={country} language={language} category={category} setText={setText} setTextMatchIndexes={setTextMatchIndexes} setCountry={setCountry} setCategory={setCategory} setLanguage={setLanguage} setsearchNews={setsearchNews}/>
                
               <BoxComponent>{searchNews.map((eachNews: NewsArticle) => <EachSearchNewsClient key={eachNews.id} eachNews={eachNews}/>)}</BoxComponent>
            </>
        )
    } else {
        return (
            <>
                
                
                <SearchNewsClientForm text={text} textMatchIndexes={textMatchIndexes} country={country} language={language} category={category} setText={setText} setTextMatchIndexes={setTextMatchIndexes} setCountry={setCountry} setCategory={setCategory} setLanguage={setLanguage} setsearchNews={setsearchNews}/>
                
                {children}
            </>
        )
    }
    
    
}


