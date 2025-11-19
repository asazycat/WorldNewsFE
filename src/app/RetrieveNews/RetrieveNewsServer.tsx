import { NewsArticle } from "../../../interfaces";
import { retrieveNewsArray, retrieveNewsIds } from "../actions";
import { auth } from "../api/auth/[...nextauth]/auth";

export  async function RetrieveNewsServer() {
    const session = await auth()
    let str = ''
    const arrofIds = await retrieveNewsIds(session?.user?.email || '').then((res) => res)

    arrofIds?.newsArticle.forEach((element: any, index: number, array: string | any[]) => {
        return index === array.length - 1 ? str += `${element}` : str += `${element},`
    });
    console.log(str)
    const retrieveNews = await retrieveNewsArray(str).then((res) => res)
    console.log(retrieveNews)
    return (
        <>
        {
            retrieveNews.map((eachNews: NewsArticle) => <li key={eachNews.id}>{eachNews.title}</li>)
        }
        </>
    )
}