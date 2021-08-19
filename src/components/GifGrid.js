import React from 'react'
import { useFetchGits } from '../hooks/useFetchGits'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([])
    // useEffect(()=>{
    //     getGifs(category).then(setImages);
    // },[category])

    const {data:images,loading}=useFetchGits(category);

    return (
        <>
            <h1 className="animate__animated animate__bounce animate__delay-2s">{category}</h1>
            {
                loading && 'Cargando..'
            }
            <div className="card-grid">
                {
                    images.map((img)=> 
                        <GifGridItem key={img.id} {...img}/>
                    )
                }
            </div>
        </>
    )
}
