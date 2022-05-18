import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const {data:images, loading } = useFetchGifs( category );

  return (
      <>
        <div className='card-grid'>
            <h3 className='animate__animated animate__rollIn animate__animated'>{ category }</h3>

            { loading && <p className='animate__animated animate__zoomIn animate__animated'>...Loading...</p> }

            {
                images.map( img => (
                    <GifGridItem 
                        key={ img.id }
                        { ...img } 
                    />
                ))
            }                
        
        </div>
        </>
    )
}
