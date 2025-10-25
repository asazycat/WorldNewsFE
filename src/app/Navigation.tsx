'use client'

import LogoutServer from "./Login/LogoutServer"

export default function Navigation({user}:{user:string}) {
    console.log(user)
    return (
        <nav className="flex flex-row">
            <ul className="">
                <li><a href="/SearchNews">Search News</a></li>
                <li><a href="/RetrieveNews">Retreive News</a></li>
                <li>Top News</li>
            </ul>
            <div className="">
                <h1>{user}</h1>
                <LogoutServer/>
            </div>
        </nav>
    )
}