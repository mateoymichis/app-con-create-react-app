import React, {useEffect, useState} from 'react';
import getGifs from '../services/getGifs';
import Gif from "./Gif";

export default function ListOfGifs ({keyword}) {
    const [gifs, setGifs] = useState([]);
    useEffect(function () {
        getGifs({keyword})
        .then(gifs => setGifs(gifs))
    }, [keyword]);
    
    return gifs.map(({id, title, url}) => 
        < Gif
            key={id}
            title={title} 
            url={url} 
            id={id} 
        />
    )
      
}