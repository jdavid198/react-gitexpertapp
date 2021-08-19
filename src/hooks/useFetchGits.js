import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGits = (category) => {
    const [state, setstate] = useState({
        data:[],
        loading:true
    })
    useEffect(()=>{
        getGifs(category).then(gifs=>
            setTimeout(() => {
                setstate({
                    data:gifs,
                    loading:false
                })
            }, 2000)
        );
    },[category])
    return state;
}

