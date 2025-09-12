
import SearchNewsClient from "./SearchNewsClient";
import { axiosInstanceWithAPIKey } from "../axiosInstances";


export default async function SearchNewsServer() {
    const date = new Date()
    const params = new URLSearchParams({
        'text': '',
        'text-match-indexes': '',
        'source-country': '',
        'language': 'en',
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


    return (
        <SearchNewsClient news={searchNewsRes.news} />
    )
}