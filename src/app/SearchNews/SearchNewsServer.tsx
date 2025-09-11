import axios from "axios";


export default async function SearchNewsServer() {
  
    const text = ''
    const language = 'en'
    const date = new Date()
    const params = new URLSearchParams({
        'text': text,
        'text-match-indexes': '',
        'title': '',
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
    const url = `https://api.worldnewsapi.com/search-news?${params}`
   
   



    const searchNewsRes = await axios
        .get(url)
        .then((res) => res.data)
        .catch((err) => console.log(err))
    
    
  console.log(searchNewsRes)

    return (
        <></>
    )
}