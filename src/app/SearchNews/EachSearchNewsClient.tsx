import { NewsArticle } from "../../../interfaces"
// import Image from 'next/image'
export default function EachSearchNewsClient({ eachNews }: { eachNews: NewsArticle }) {
    return (
        <li>
            {eachNews.title}
            <img src={`${eachNews.image}`} alt={`${eachNews.title}`} height={250} width={250} />
        </li>
    )
}