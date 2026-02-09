'use client'

import { Box, Button, Checkbox, MenuItem, Select, TextField } from "@mui/material";
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
        console.log(setTextMatchIndexes)
    return (<Box sx={{display:"flex", width:"100%", my:"2em", textAlign:"center", border: "2px solid red", justifyContent:"center"}}>
                <Box>
                      <TextField id="standard-basic" label="Search" variant="standard" onChange={(e:ChangeEvent<HTMLInputElement>) => setText(e.target.value)}/>
                </Box>
                 <Box>
                       <p>Search By</p>
                       <label> <Checkbox defaultChecked /> Title</label>
                       <label> <Checkbox defaultChecked /> Content</label>
                </Box>
                <Box>
                    <p>Country</p>
                    <Select label="country" value={country}>
                        {countries.map((eachCountryObj, i) => <MenuItem value={eachCountryObj["country-code"]} key={i} onClick={() => setCountry(eachCountryObj["country-code"])}>{eachCountryObj.country}</MenuItem>)}
                    </Select> 
                </Box>
                <Box>
                    <p>Language</p>
                    <Select label="language" value={language}>
                        {languages.map((eachLanguageObj, i) => <MenuItem value={eachLanguageObj["language-code"]} key={i} onClick={() => setLanguage(eachLanguageObj["language-code"])}>{eachLanguageObj.language}</MenuItem>)}
                    </Select> 
                </Box>
                <Box>
                    <p>Category</p>
                    <Select label="categories" value={category}>
                        <MenuItem value={category}>{category}</MenuItem>
                        {categories.map((eachCategory,i) => <MenuItem value={eachCategory} key={i} onClick={() => setCategory(eachCategory)}>{eachCategory}</MenuItem>)}
                    </Select>
                </Box>
               <Button variant="contained"  onClick={async () => {
                    await SearchNewsAction(text,textMatchIndexes,country,language,category).then((res) => {setsearchNews(res ?? [])})
                }} sx={{backgroundColor:"white", color:"red"}} >Search News</Button>
            </Box>
    )
}