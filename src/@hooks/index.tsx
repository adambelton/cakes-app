import axios from 'axios';
import React from 'react';

const CATS_API_KEY = '362b065b-d815-4882-85e9-445b642e3b33';
const CATS_BASE_URL = 'https://api.thecatapi.com/v1';

const request = axios.create({
	baseURL: CATS_BASE_URL,
	headers: {
		'x-api-key': CATS_API_KEY,
	},
});

export interface ICatsResponse {
	id: number;
	url: string;
}

export const useCats = () => {
	const getRandomCat = async (callback?: (cat: ICatsResponse) => void) => {
		try {
			const result = await request.get<ICatsResponse[]>('/images/search');
			console.log({ result });
			callback(result.data[0]);
		} catch (error) {
			console.log({ error });
		}
	};

	return {
		getRandomCat,
	};
};
