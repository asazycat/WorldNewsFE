
'use server'

import  prisma from "../../prisma"
import { signIn, signOut } from "../app/api/auth/[...nextauth]/auth";
import { axiosInstanceWithAPIKey } from "./axiosInstances";
import { redirect } from "next/navigation"

export async function SearchNewsAction(
    text: string,
    textMatchIndexes: string,
    sourceCountry: string,
    language: string = 'en',
    // min_sentiment: number,
    // max_sentiment: number,
    // earliestPublishDate: string,
    // latestPublishDate: string,
    // newsSources: string,
    // authors: string,
    categories: string,
    // entities: string,
    // locationFilter: string,
    // sort: string,
    // sortDirection: 'ASC'|'DESC',
    // offset: number,
    // number: number 
    ) {

    // const date = new Date()
    const params = new URLSearchParams({
        'text': `${text}`,
        'text-match-indexes': `${textMatchIndexes}`,
        'source-country': `${sourceCountry}`,
        'language': `${language}`,
        // 'min-sentiment':`${min_sentiment}`,
        // 'max-sentiment':`${max_sentiment}`,
        // 'earliest-publish-date':`${earliestPublishDate}`,
        // 'latest-publish-date':`${latestPublishDate}`,
        // 'news-sources': `${newsSources}`,
        // 'authors': `${authors}`,
        'categories': `${categories}`,
        // 'entities': `${entities}`,
        // 'location-filter': `${locationFilter}`,
        // 'sort': '',
        // 'sort-direction': `${sortDirection}`,
        // 'offset': `${offset}`,
        // 'number':`${number}`
        })
    const url = `/search-news?${params}`
   
   
//   date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2,'0')}-${date.getDay().toString().padStart(2,'0')


    return await axiosInstanceWithAPIKey
        .get(url)
        .then((res) => res.data.news)
        .catch((err) => console.log(err))
    
}



export async function credentialsAction(formData: FormData) {
    'use server'
     console.log(formData)
    try {
        await signIn("credentials", formData)
    }
    catch (err) {
        throw err
    } finally {
        redirect('/')
    }
}

export async function endCredentialsAction() {
      try {
        await signOut()
    }
    catch (err) {
        throw err
    } 
}
     

export async function retrieveNewsIds(email: string) {
    return await prisma.user.findUnique({ where: { email: `${email}` }, select: { newsArticle: true } }).then((res) => res).catch((err) => { throw err })
}

export async function retrieveNewsArray(ids: string) {
    console.log(ids)
    const url = `/retrieve-news?ids=${ids}`
   return await axiosInstanceWithAPIKey
        .get(url)
        .then((res) => res.data.news)
        .catch((err) => console.log(err))
}