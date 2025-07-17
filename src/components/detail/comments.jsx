import { useEffect, useState } from "react";
import Spinner from "../loader/spinner";
import api from "../../utils/api";

const Comments = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState(null);
  const [error,setError]=useState(null)
   
//  console.log(comments)
  useEffect(() => {
    api.get("/comments", { params:{ id } })
      .then((res)=>console.log(res.data))
      .catch((err)=>setError(err.message))
      .finally(()=>setLoading(false))
     
      
  }, []);

  if (loading) return <Spinner designs="my-20" />;



  return (
       <div className="my-6">
    {error ?(
      <p>Üzgünğz yorum yok</p>
    ): !comments ?(
      <p>paragraf yükleniyo</p>
    ):comments.length === 0 ? (
      <p>Henğz yorum yok</p>
    ):(
      comments.map((comment)=><div>yorum</div>)
    )}
        
  
         
      
       
         
        </div>
      
  );
};



export default Comments;