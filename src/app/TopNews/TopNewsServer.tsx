
import { NewsArticle } from "../../../interfaces"
import { axiosInstanceWithAPIKey } from "../axiosInstances"
import TopNewsClient from "./TopNewsClient"

export default async function TopNewsServer() {

    const date = new Date()
    const url = `/top-news?source-country=us&language=en&date=${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2,'0')}-${date.getDay().toString().padStart(2,'0')}`
    
    const topNews = await axiosInstanceWithAPIKey.get(url).then((res) => res.data[`top_news`] ).catch((err) => console.log(err))

    console.log(topNews)
    return (
        <ul>
            {topNews[0]['news'].map((eachTopNews: NewsArticle) => <TopNewsClient key={eachTopNews.id} eachTopNews={eachTopNews} />)}
        </ul>)
}