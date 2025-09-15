import { NewsArticle } from "../../../interfaces";

export default function TopNewsClient({eachTopNews}: {eachTopNews: NewsArticle}) {
    return (
        
           
        
   <li key={eachTopNews.id}>{eachTopNews.title}</li>
        
        
    )
}