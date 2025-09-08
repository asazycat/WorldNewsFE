import axios from "axios"
import TopNewsCS from "./TopNewsCS"
import { News } from "../interfaces"
const apiKey = '7208b633ea074df5a61fa51544d5ceed'
export default async function TopNews() {
    const date = new Date();
    console.log(date.getUTCDate())
    const allNewsObjects : News[] = [] 
    let arrayOfArrays = []
    const topNews = await axios.get('https://api.worldnewsapi.com/top-news?source-country=us&language=en&max-news-per-cluster=2', {
        headers: {
            'x-api-key': apiKey
        }
    }).then((res) => res.data).catch((err) => err.message)

    if (topNews?.length !== 0) { arrayOfArrays = topNews.top_news.map((eachTopNews: { news: News[] }) => eachTopNews.news) }
    
    arrayOfArrays.forEach((array: News[]) => {
        for (const eachArray of array) {
            allNewsObjects.push(eachArray)
        }
    })
    return (
        <TopNewsCS allNewsObjects={allNewsObjects } />
    )
}