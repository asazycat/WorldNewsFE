

import SearchNewsClient from "./SearchNewsClient"
import SearchNewsServer from "./SearchNewsServer"



export default function SearchNews() {
    return (<>
        <SearchNewsClient>
            <SearchNewsServer/>
        </SearchNewsClient>
        
    </>)
}