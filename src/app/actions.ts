

'use server'

import { axiosInstanceWithAPIKey } from "./axiosInstances";


export default async function SearchNewsAction(language = 'en', text = '') {
    const date = new Date()
    const params = new URLSearchParams({
        'text': text,
        'text-match-indexes': '',
        'source-country': '',
        'language': language,
        'earliest-publish-date':`${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2,'0')}-${date.getDay().toString().padStart(2,'0')}`,
        'latest-publish-date':`${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2,'0')}-${date.getDay().toString().padStart(2,'0')}`,
        'news-sources': '',
        'authors': '',
        'categories': '',
        'entities': '',
        'location-filter': '',
        'sort': '',
        'sort-direction': '',
        'offset': '',
        'number':''
        })
    const url = `/search-news?${params}`
   
   
  


    const searchNewsRes = await axiosInstanceWithAPIKey
        .get(url)
        .then((res) => res.data)
        .catch((err) => console.log(err))
    
    

    return searchNewsRes
}