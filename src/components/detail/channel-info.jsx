import millify from "millify";
import { AiFillDislike, AiFillLike } from "react-icons/ai";

const ChannelInfo=({video})=>{
    return(
        <div className="flex justify-between max-sm:flex-col sm:items-center">

          {/* sol */}
          <div className="flex items-center gap-3">
            <div className="flex gap-2 sm:gap-4 items-center">
                <img src={video?.channelThumbnail[0].url} alt={video.channelTitle}  className="size-10 sm:size-12 rounded-full" />

                <div>
                    <h4 className="font-bold">{video.chanelTitle}</h4>
                    <p className="text-gray-400">{video.subscriberCountText}</p>
                </div>
            </div>
          </div>

          {/* sağ */}

          <div className="flex items-center bg-[#272727] cursor-pointer max-sm:mt-3 max-sm:w-fit rounded-full">
            <div className="flex py-1 px-3 sm:py-2 sm:px-4 items-center gap-2 font-bold border-r border-gray-500">
                <AiFillLike/>
                <span className="text-base font-medium">{millify(video.likeCount)}</span>
            </div>
             <div className="py-1 px-3  sm:px-4">
                <AiFillDislike/>
                
            </div>
          </div>
    
        </div>
    )
}

export default ChannelInfo;