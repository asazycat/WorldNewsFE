
import { axiosInstanceWithAPIKey } from "../axiosInstances"
import { NewsArticle } from "../../../interfaces"
import EachSearchNewsClient from "./EachSearchNewsClient"
export default async function SearchNewsServer() {
    const date = new Date()
    const params = new URLSearchParams({
        'text': '',
        'text-match-indexes': '',
        'source-country': '',
        'language': 'en',
        'min-sentiment':'-1',
        'max-sentiment':'1',
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
        .then((res) => res.data.news)
        .catch((err) => console.log(err)) ?? []
    
    
    return (
        <ul className="w-9/10 m-auto border justify-around p-4 mt-5 grid grid-cols-5">{searchNewsRes.map((eachNews: NewsArticle) =>  <EachSearchNewsClient key={eachNews.id} eachNews={eachNews}/>)}</ul>
    )
}