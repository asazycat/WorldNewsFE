
import { axiosInstanceWithAPIKey } from "../axiosInstances"
import { NewsArticle } from "../../../interfaces"

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
   
   
  console.log(url)


    const searchNewsRes = await axiosInstanceWithAPIKey
        .get(url)
        .then((res) => res.data.news)
        .catch((err) => console.log(err))
    
    
    return (
        <ul>{searchNewsRes.map((eachNews: NewsArticle) => <li key={eachNews.id}>{eachNews.title}</li>)}</ul>
    )
}