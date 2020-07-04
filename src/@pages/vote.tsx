import { CatPreview } from '@components/cat-preview';
import { ICatsResponse, useCats } from '@hooks';
import React from 'react';

export const Vote = () => {
	const { getRandomCat } = useCats();
	const [randomCat, setRandomCat] = React.useState<null | ICatsResponse>(null);

	React.useEffect(() => {
		getRandomCat(setRandomCat);
	}, []);

	if (!randomCat) {
		return <div>Loading random cat...</div>;
	}

	return (
		<CatPreview
			url={randomCat.url}
			onThumbsUpClick={() => getRandomCat(setRandomCat)}
			onThumbsDownClick={() => getRandomCat(setRandomCat)}
		/>
	);
};
