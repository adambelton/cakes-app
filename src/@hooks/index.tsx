import axios from 'axios';

const CATS_API_KEY = '362b065b-d815-4882-85e9-445b642e3b33';
const CATS_BASE_URL = 'https://api.thecatapi.com/v1';

const request = axios.create({
	baseURL: CATS_BASE_URL,
	headers: {
		'x-api-key': CATS_API_KEY,
	},
});

export interface IRandomCat {
	id: string;
	url: string;
}

export interface IFavouriteCat {
	id: string;
	image: {
		id: string;
		url: string;
	};
}

export const useCats = () => {
	const getRandomCat = async (callback: (cat: IRandomCat) => void) => {
		try {
			const result = await request.get<IRandomCat[]>('/images/search');
			callback(result.data[0]);
		} catch (error) {
			console.log({ error });
		}
	};

	const setFavourite = (imageId: string) =>
		new Promise((resolve, reject) => {
			try {
				request.post('/favourites', {
					image_id: imageId,
				});
				resolve();
			} catch (error) {
				console.log({ error });
				reject();
			}
		});

	const getFavourites = async (callback: (favourites: IFavouriteCat[]) => void) => {
		try {
			const result = await request.get('/favourites');
			callback(result.data);
		} catch (error) {
			console.log({ error });
		}
	};

	const getFavourite = async (favouriteId: string, callback: (favouriteId: IFavouriteCat) => void) => {
		try {
			const result = await request.get(`/favourites/${favouriteId}`);
			callback(result.data);
		} catch (error) {
			console.log({ error });
		}
	};

	const removeFavourite = (favouriteId: string) => {
		try {
			request.delete(`/favourites/${favouriteId}`);
		} catch (error) {
			console.log({ error });
		}
	};

	const createNewCat = (data: FormData) =>
		new Promise(async (resolve, reject) => {
			try {
				const response = await request.post<IRandomCat>('/images/upload', data);
				await setFavourite(response.data.id);
				resolve();
			} catch (error) {
				console.log({ error });
				reject();
			}
		});

	return {
		getRandomCat,
		setFavourite,
		getFavourites,
		removeFavourite,
		createNewCat,
		getFavourite,
	};
};
