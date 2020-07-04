import { CatPreview, PreviewSize } from '@components/cat-preview';
import { IRandomCat, useCats } from '@hooks';
import React from 'react';

export const Vote = () => {
	const { getRandomCat, setFavourite } = useCats();
	const [randomCat, setRandomCat] = React.useState<null | IRandomCat>(null);

	React.useEffect(() => {
		getRandomCat(setRandomCat);
	}, []);

	return !randomCat ? (
		<div>Loading random cat...</div>
	) : (
		<CatPreview
			url={randomCat.url}
			size={PreviewSize.LARGE}
			onThumbsUpClick={() => {
				setRandomCat(null);
				getRandomCat(setRandomCat);
				setFavourite(randomCat.id);
			}}
			onThumbsDownClick={() => {
				setRandomCat(null);
				getRandomCat(setRandomCat);
			}}
		/>
	);
};
