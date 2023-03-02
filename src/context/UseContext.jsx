import { createContext, useContext, useEffect, useState } from "react";

export const PhotosContext = createContext();
export const usePhotosContext = () => useContext(PhotosContext);

export default function PhotosContextProvider({ children }) {
	const endpoint = "/fotos.json";

	const [photos, setPhotos] = useState([]);
	const [favorites, setFavorites] = useState([]);

	const apiConsumer = async () => {
		try {
			const res = await fetch(endpoint);
			const data = await res.json();
			setPhotos(data.photos);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		apiConsumer();
	}, []);

	return (
		<PhotosContext.Provider
			value={{ photos, setPhotos, apiConsumer, favorites, setFavorites }}
		>
			{children}
		</PhotosContext.Provider>
	);
}
