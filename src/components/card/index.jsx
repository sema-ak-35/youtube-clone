
import millify from "millify";
import { useState } from "react";
import { Link } from "react-router-dom";

const Card=({video,isRow})=>{

    const [isHover,setIsHover]=useState(false);

const thumbnail= isHover &&  video.richThumbnail?.length
 ? video.richThumbnail.at(-1)
  :  video.thumbnail?.length 
  ?  video.thumbnail.at(-1)
  : null;

 
   

  if(isRow){
    return(
        <Link to={`/watch?v=${video.videoId}`}
        onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)} 
        className="flex gap-2 md:gap-4  p-2 hover:bg-zinc-900 cursor-pointer transition rounded-lg">
      {/* thumbnail */}
      <div className="relative flex-1 max-w-[500px] rounded-lg overflow-hidden h-fit">
        <img src={thumbnail.url} alt={video.title} className="w-full h-full" />
        
      {video.lengthText && (<span className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-2 py-0.5 rounded">{video.lengthText}</span>)}

      {video.isLive && (<span className="absolute bottom-1 right-1 bg-red-600 text-white text-xs px-2 py-0.5 rounded">CANLI</span>)}
      </div>

      {/* video  bilgileri */}
      <div className="flex-1 flex flex-col gap-2 md:gap-4 ">
        console.log(video)
        <h3 className="line-clamp-2 leading-tight  text-base  @lg:text-xl">{video.title}</h3>
       
                      {video.viewCount &&(
                        <div className="flex items-center gap-1  text-xs @md:text-sm text-[#aaaaaa] mb-2">

                        <span className="line-clamp-1">{millify(video.viewCount,{units:["B", "Mn", "Mr", "Tr"]})} {""} 
                          <span className="ps-0.5 @sm:hidden">görüntülenme</span>
                          </span>

                         {video.publishedTimeText  &&  !video.isLive &&(
                            <>
                            <span>•</span>
                             
                           <span className="line-clamp-1">{video.publishedTimeText}</span>
                            </>
                         )}

                      </div>)}
        
            <p className=" text-sm @md:text-base text-[#aaaaaa] hover:text-white">{video.channelTitle}</p>
            <p className="text-[#aaaaaa] line-clamp-1 text-xs @md:text-sm">{video.description}</p>
        
      </div>

        </Link>
    )
  }


    return (
        <Link to={`/watch?v=${video.videoId}`} onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)} className="cursor-pointer group">
        <div className="block">

            {/* thumbnail */}

            <div className="relative  rounded-xl overflow-hidden mb-3 w-full aspect-video">

            <img src={thumbnail.url}  className="w-full h-full object-cover group-hover:scale-105 transition" />

               {video.lengthText && (<span className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-2 py-0.5 rounded">{video.lengthText}</span>)}

            {video.isLive && (<span className="absolute bottom-1 right-1 bg-red-600 text-white text-xs px-2 py-0.5 rounded">CANLI</span>)}
            </div>

            {/* video bilgileri */}

            <div className="flex gap-3">

                {video.channelThumbnail ?.[0] ?.url && (

                    <div>
                           <img src={video.channelThumbnail[0].url}
                            className="w-9 h-9 rounded-full" />
                </div>
                 )}

                 <div className="flex-1">
                    <h3 className="line-clamp-2 mb-1 leading-tight">{video.title}</h3>

                   
                        <p className="text-sm text-[#aaaaaa] hover:text-white cursor-pointer transition">{video.channelTitle}</p>
                    
                      <div className="flex items-center gap-1  text-sm text-[#aaaaaa]">

                        <span className="line-clamp-1">{millify(video.viewCount,{units:["B", "Mn", "Mr", "Tr"]})} görüntülenme</span>

                         {video.publishedTimeText  &&  !video.isLive &&(
                            <>
                            <span>•</span>
                             
                           <span className="line-clamp-1">{video.publishedTimeText}</span>
                            </>
                         )}

                      </div>


                 </div>

                 
               
                
            </div>

        
        </div>
        </Link>
    )
}

export default Card;