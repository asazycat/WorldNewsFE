import { NewsArticle } from "../../../interfaces";
import { retrieveNewsArray, retrieveNewsIds } from "../actions";
import { auth } from "../api/auth/[...nextauth]/auth";

export  async function RetrieveNewsServer() {
    const session = await auth()
    let str = ''
    const arrofIds = await retrieveNewsIds(session?.user?.email || '').then((res) => res)

    arrofIds?.newsArticle.forEach((element: string, index: number, array: string | string[]) => {
        return index === array.length - 1 ? str += `${element}` : str += `${element},`
    });
    const retrieveNews = await retrieveNewsArray(str).then((res) => res)
    return (
        <>
        {
            retrieveNews.map((eachNews: NewsArticle) => <li key={eachNews.id}>{eachNews.title}</li>)
        }
        </>
    )
}