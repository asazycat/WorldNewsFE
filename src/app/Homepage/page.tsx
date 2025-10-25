


import { redirect } from 'next/navigation';
import { auth } from "../api/auth/[...nextauth]/auth";

import HomepageClient from './HomepageClient';


export default async function page() {
     const session = await auth()
    
     if(session) {
        return (
        
                <HomepageClient/>
        )
     } else {
        redirect('/Login')
     }
    
}