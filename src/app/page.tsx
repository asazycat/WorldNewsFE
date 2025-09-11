


import axios from "axios";
import { apiKey } from "../../public/apiKey";

export default async function Home() {

   axios.defaults.headers.common['x-api-key'] = `${apiKey}`
  
return (

  <>
    
    </>
  );
}
