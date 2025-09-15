import { NewsArticle } from "../../../interfaces";

export default function TopNewsClient({news}: {news: NewsArticle[]}) {
    return (
        <>
            <h1>Top News</h1>
        <ul>
        {news.map((eachTopNews: NewsArticle) => <li key={eachTopNews.id}>{eachTopNews.title}</li>)}
        </ul>
        </>
    )
}