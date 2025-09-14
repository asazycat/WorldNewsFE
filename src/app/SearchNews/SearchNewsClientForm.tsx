'use client'

import { Button, Checkbox, MenuItem, Select, TextField } from "@mui/material";
import { countries, languages, categories } from "../../../public/data";
import { SearchNewsAction } from "../actions";
import { NewsArticle } from "../../../interfaces";
import { ChangeEvent, SetStateAction } from "react";


export default function SearchNewsClientForm(
    {
        text,
        textMatchIndexes,
        country,
        language,
        category,
        setText,
        setTextMatchIndexes,
        setCountry, setCategory,
        setLanguage, setsearchNews
    }: {
            text: string,
            textMatchIndexes: string,
            country: string,
            language: string,
            category: string,
            setText: React.Dispatch<SetStateAction<string>>,
            setTextMatchIndexes:React.Dispatch<SetStateAction<string>>,
            setCountry:React.Dispatch<SetStateAction<string>>,
            setCategory:React.Dispatch<SetStateAction<string>>,
            setLanguage:React.Dispatch<SetStateAction<string>>,
            setsearchNews: React.Dispatch<SetStateAction<NewsArticle[]>>
    }) {
    return (<>
                <div>
                      <TextField id="standard-basic" label="Standard" variant="standard" onChange={(e:ChangeEvent<HTMLInputElement>) => setText(e.target.value)}/>
                </div>
                <div>
                       <label> <Checkbox/> Title</label>
                       <label> <Checkbox /> Content</label>
                </div>
                    <div>
                    <Select label="country" value={country}>
                        {countries.map((eachCountryObj, i) => <MenuItem value={eachCountryObj["country-code"]} key={i} onClick={() => setCountry(eachCountryObj["country-code"])}>{eachCountryObj.country}</MenuItem>)}
                    </Select> 
                </div>
                  <div>
                    <Select label="language" value={language}>
                        {languages.map((eachLanguageObj, i) => <MenuItem value={eachLanguageObj["language-code"]} key={i} onClick={() => setLanguage(eachLanguageObj["language-code"])}>{eachLanguageObj.language}</MenuItem>)}
                    </Select> 
                </div>
                <div>
                    <Select label="categories" value={category}>
                        <MenuItem value={''}>{category}</MenuItem>
                        {categories.map((eachCategory,i) => <MenuItem value={eachCategory} key={i} onClick={() => setCategory(eachCategory)}>{eachCategory}</MenuItem>)}
                    </Select>
                </div>
               <Button variant="contained"  onClick={async () => {
                    await SearchNewsAction(text,textMatchIndexes,country,language,category).then((res) => { console.log(res);  setsearchNews(res)})
                }}  >Search News</Button>
    </>
    )
}