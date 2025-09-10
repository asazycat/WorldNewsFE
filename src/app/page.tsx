


import axios from "axios";
import { apiKey } from "../../public/apiKey";
import SearchNews from "./Components/SearchNews/SearchNews";

export default async function Home() {

   axios.defaults.headers.common['x-api-key'] = `${apiKey}`
  
return (

    <>
    <SearchNews/>
    </>
  );
}
