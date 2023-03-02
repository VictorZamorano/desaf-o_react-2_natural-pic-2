import Galeria from "../components/Galeria";

import { usePhotosContext } from "../context/UseContext";

export default function Favoritos() {
	const { favorites, setFavorites } = usePhotosContext();

	const handleFav = (e) => {
		const selectedFavId = e.currentTarget.id;

		const favPhotos = favorites.map((photo) => {
			if (Number(photo.id) === Number(selectedFavId)) {
				photo.liked = photo.liked ? false : true;
				return photo;
			} else {
				return photo;
			}
		});
		setFavorites(favPhotos);

		let newFavoritesPhotos = favPhotos.map((photo) => {
			if (photo.liked) {
				return photo;
			} else {
				return null;
			}
		});

		newFavoritesPhotos = newFavoritesPhotos.filter((photo) => {
			return photo != null;
		});

		setFavorites(newFavoritesPhotos);
	};

	return (
		<div>
			<h1>Fotos favoritas</h1>
			<h3>
				Si deseas eliminar una foto que ya no te guste de tu lista de favoritos,
				solo haz clic en ella
			</h3>
			<div className="p-3 galeria grid-columns-4">
				<Galeria mapPhotos={favorites} handleClick={handleFav} display="none" />
			</div>
		</div>
	);
}
