import { useState } from "react";
export const useLike = ()=>{
    const [like, setLike]= useState(false);


    const handleLike = ()=>{
        // alert("Like button clicked");
        // prev adalah singkatan dari previous. Artinya: nilai sebelumnya
        setLike(prev => !prev);
    };
    return {like, handleLike};
};
