import Galeria from "../components/Galeria";

import { usePhotosContext } from "../context/UseContext";

export default function Home() {
	const { photos, setPhotos, setFavorites } = usePhotosContext();

	const handleClick = (e) => {
		const selectedId = e.currentTarget.id;

		const newPhotos = photos.map((photo) => {
			try {
				if (Number(photo.id) === Number(selectedId)) {
					photo.liked = photo.liked ? false : true;
					return photo;
				} else {
					return photo;
				}
			} catch (error) {
				console.error(error);
			}
		});
		setPhotos(newPhotos);

		let newFavoritesPhotos = newPhotos.filter(Boolean).map((photo) => {
			try {
				if (photo.liked) {
					return photo;
				} else {
					return null;
				}
			} catch (error) {
				console.error(error);
			}
		});

		newFavoritesPhotos = newFavoritesPhotos.filter(Boolean);
		setFavorites(newFavoritesPhotos);
	};

	return (
		<div id="Home">
			<h1>Natural Pic</h1>

			<Galeria mapPhotos={photos} handleClick={handleClick} />
		</div>
	);
}
