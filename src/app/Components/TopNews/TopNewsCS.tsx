'use client'

import { News } from "../interfaces"
import EachTopNews from "./EachTopNews"
export default function TopNewsCS({ allNewsObjects }: {allNewsObjects: News[]}) {

    return (<ul>
        {
            allNewsObjects.map((element) => <EachTopNews eachNews={element} key={element.id} />)
            }
        </ul>)
}