import React from "react";
import { useLocation } from "react-router-dom";
import {
 
  LinkedinIcon,
  
  
} from "react-share";

import { LinkedinShareButton } from "react-share";
import { CgShare } from "react-icons/cg";
import { useState } from "react";
export default function ShareButtons() {
  const location = useLocation();
  console.log(location);
  const [openButton, setOpenButton] = useState(false);
  return (
    <div>
      <div className=" fixed right-4 md:right-4 top-20 md:top-1/3 z-50 px-3 py-3 flex flex-col space-y-3 bg-zinc-700/50 rounded-lg">
        <CgShare
          onClick={() => setOpenButton(!openButton)}
          className="w-[25px] h-[25px] text-teal-500 cursor-pointer"
        />
        {openButton ? (
          <div className="flex flex-col ">
          

            

            <LinkedinShareButton
              url={`https://blog.sabbirontheweb.com${location.pathname}`}
              className="mt-2"
            >
              <LinkedinIcon size={30} round={true} />
            </LinkedinShareButton>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
