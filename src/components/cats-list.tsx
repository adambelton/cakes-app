import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { CatPreview } from './cat-preview';

const CATS_API_KEY = '362b065b-d815-4882-85e9-445b642e3b33';
const CATS_BASE_URL = 'https://api.thecatapi.com/v1';

const request = axios.create({
	baseURL: CATS_BASE_URL,
	headers: {
		'x-api-key': CATS_API_KEY,
	},
});

const Column = styled.div`
	flex-direction: column;
`;

interface ICatsResponse {
	id: number;
	url: string;
}

export const CatsList = () => {
	const [randomCat, setRandomCat] = React.useState<null | ICatsResponse>(null);

	React.useEffect(() => {
		const fetchCat = async () => {
			try {
				const result = await request.get<ICatsResponse[]>('/images/search');
				console.log({ result });
				setRandomCat(result.data[0]);
			} catch (error) {
				console.log({ error });
			}
		};

		fetchCat();
	}, []);

	if (!randomCat) {
		return <div>Loading random cat...</div>;
	}

	return <CatPreview key={randomCat.id} url={randomCat.url} />;
};
