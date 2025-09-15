
import { axiosInstanceWithAPIKey } from "../axiosInstances"
import TopNewsClient from "./TopNewsClient"

export default async function TopNewsServer() {

    const url = '/top-news?source-country=us&language=en'

    const topNews = await axiosInstanceWithAPIKey.get(url).then((res) => res.data[`top_news`] ).catch((err) => console.log(err))


    return (
        <>
            <TopNewsClient news={topNews}/>
        </>)
}