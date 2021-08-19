import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([
            'One Punch',
        ]);
    
    return (
        <>
            <h2 className="animate__animated animate__backInLeft">GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
                {
                    categories.map((category,i)=> 
                        <GifGrid key={i} category={category} />
                    )
                }
        </>
    )
}
