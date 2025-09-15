import { NewsArticle } from "../../../interfaces"
export default function EachSearchNewsClient({ eachNews }: { eachNews: NewsArticle }) {
    return (
        <li>
            {eachNews.title}
        </li>
    )
}