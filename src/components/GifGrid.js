import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

	const [images, setImages] = useState([]);

	useEffect( () => {
		getGifts();
	}, [])

	const getGifts = async() => {

		const url ='https://api.giphy.com/v1/gifs/search?q=Rick an Morty&limit=10&api_key=DPKkOxGCA4M7PChQDcsgBlyiKqPGA7Ak';
		const resp = await fetch( url );
		const { data } = await resp.json();

		const gifs = data.map( img => {
			return {
				id: img.id,
				title: img.title,
				url: img.images?.downsized_medium.url
			}
		})

		console.log(gifs);
		setImages( gifs );
	}

	return (
		<>	
			{
				images.map( img => (
					<GifGridItem 
						key={ img.id }
						{ ...img } 
					/>
				))
			}		
		</>
	  )
}
