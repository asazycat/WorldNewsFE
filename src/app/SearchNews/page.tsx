
import SearchNewsClient from "./SearchNewsClient";
import SearchNewsServer from "./SearchNewsServer";



export default async function Page() {
    
    return (
        <SearchNewsClient>
            <SearchNewsServer/>
        </SearchNewsClient>
    )
}