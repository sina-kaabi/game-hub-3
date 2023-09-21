import useData from "./useData";
import PlatformSelector from "../components/PlatformSelector";

interface Platform {
    id: number;
    name: string;
    slug: string;
    
   
  }

  const usePlatforms = () => useData<Platform>('/platforms/lists/parents')


export default usePlatforms;




