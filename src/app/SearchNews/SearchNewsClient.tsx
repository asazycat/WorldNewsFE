
'use client'
import { useState } from "react"
import { NewsArticle } from "../../../interfaces"
import SearchNewsClientForm from "./SearchNewsClientForm"
import EachSearchNewsClient from "./EachSearchNewsClient"
export default function SearchNewsClient({children}: {children: React.ReactNode}) {
   
    const [searchNews, setsearchNews] = useState<NewsArticle[]>([])
    const [text, setText] = useState('')
    const [textMatchIndexes, setTextMatchIndexes] = useState('title,content')
    const [country, setCountry] = useState('us')
    const [language, setLanguage] = useState('en')
    const [category, setCategory] = useState('')
 
    if (searchNews.length !== 0) {
        return (
            <>
                
                
                <div>
                    <SearchNewsClientForm text={text} textMatchIndexes={textMatchIndexes} country={country} language={language} category={category} setText={setText} setTextMatchIndexes={setTextMatchIndexes} setCountry={setCountry} setCategory={setCategory} setLanguage={setLanguage} setsearchNews={setsearchNews}/>
                </div>
                <ul className="w-9/10 m-auto border justify-around p-4 mt-5 grid grid-cols-5">{searchNews.map((eachNews: NewsArticle) => <EachSearchNewsClient key={eachNews.id} eachNews={eachNews}/>)}</ul>
            </>
        )
    } else {
        return (
            <>
                
                <div>
                    <SearchNewsClientForm text={text} textMatchIndexes={textMatchIndexes} country={country} language={language} category={category} setText={setText} setTextMatchIndexes={setTextMatchIndexes} setCountry={setCountry} setCategory={setCategory} setLanguage={setLanguage} setsearchNews={setsearchNews}/>
                </div>
                {children}
            </>
        )
    }
    
    
}


