import React from 'react'

export const GifGridItem = ({title,url}) => {
    return (
        <div className="card animate__animated animate__bounce animate__delay-2s">
           <img alt={title} src={url} />
           <p>{title}</p>
        </div>
    )
}
