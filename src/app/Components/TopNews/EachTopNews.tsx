import { News } from "../interfaces";
import Image from "next/image";
export default function EachTopNews({eachNews }: {eachNews: News}) {
    return (
        <>
            <li key={eachNews.id} className="">
                <h1>{eachNews.title}</h1>
                <img src={eachNews.image} alt={eachNews.name} className="size-50 "/>
            </li>
           
        </>
    )
}