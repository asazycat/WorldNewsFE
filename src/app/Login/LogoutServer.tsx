'use client'
import { endCredentialsAction } from "../actions";
export default function LogoutServer() {
    return (
        <button onClick={async () => await endCredentialsAction()}>Sign Out</button>
    )
}