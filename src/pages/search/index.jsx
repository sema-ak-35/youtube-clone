import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import api from "../../utils/api.js";
import Spinner from "../../components/loader/spinner.jsx";
import Card from "../../components/card/index.jsx";



useSearchParams

const Search=()=>{
    const [loading,setLoading]=useState(true);
    const [moreLoading,MoreLoading]=useState(false);
    const [error,setError]=useState(null);
    const [data,setData]=useState([]);
    const [token,setToken]=useState(null);
    
    

 const [searchParams]=useSearchParams();

 const query=searchParams.get("search_query")



 useEffect(()=>{
     setLoading(true)
     
      const params={
    query,
    type:"video"
 }


    api.get("/search",{params})
  
    .then((res)=>{
         
     setData(res.data.data);
    setToken(res.data.continuation)})

    .catch((err)=>
        setError(err.message))
    .finally(()=>setLoading(false))
   
 }, [query]);

  const handleMore=()=>{
    setMoreLoading(true);

       const params={
    query,
    type:"video",
    token
 };

 api.get("/search",{params})
 .then((res)=>{
    setData([...data, ...res.data.data])
    setToken(res.data.continuation)
 })

 .catch(()=>alert ("Devamı yüklenemiyor..."))
 .finally(()=>setLoading(false))
  }

 const videos=data.filter((item)=>item.type==="video")

    return(
        <div className="page">

        <div className="max-w-[1200px] mx-auto">
            {loading ? <Spinner designs="mt-[250px]"/>
            : error ? ( <Error  message= {error}/>) :(
        <div>
            <h2 className="text-xl text-gray-300 mb-6">
                <span className="font-bold me-2">{query} </span>
                için arama sonuçları
            </h2>

           <div className="space-y-5 @container">
            {videos?.map((video,key)=> (<Card key={key} video={video} isRow/>))}
           </div>

           {moreLoading && <Spinner designs="py-[50px]"/>}
            

           {token && !loading && 
           <div className="flex justify-center py-8">
            <button onClick={handleMore} className="bg-[#272727] hover:bg-[#3f3f3f] py-3 px-6 rounded-full transition text-sm">Daha Fazla</button>
           </div>}

            </div>
            )}
        </div>
        
        </div>
    )
}
export default Search;