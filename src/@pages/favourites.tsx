import { CatPreview, PreviewSize } from '@components/cat-preview';
import { IFavouriteCat, useCats } from '@hooks';
import { Column, Grid } from '@ui';
import React from 'react';
import { Link } from 'react-router-dom';

export const Favourites = () => {
	const { getFavourites, removeFavourite } = useCats();
	const [favouriteCats, setFavouriteCats] = React.useState<null | IFavouriteCat[]>(null);

	React.useEffect(() => {
		getFavourites(setFavouriteCats);
	}, []);

	return !favouriteCats ? (
		<div>Loading favourite cats...</div>
	) : !favouriteCats.length ? (
		<Column>
			<div>{`Why don't you like cats you monster?`}</div>
			<Link to="/">Vote for more cats</Link>
		</Column>
	) : (
		<Grid>
			{favouriteCats.map((favourite) => {
				return (
					<CatPreview
						key={favourite.id}
						url={favourite.image.url}
						size={PreviewSize.SMALL}
						onThumbsDownClick={() => {
							removeFavourite(favourite.id);
							setFavouriteCats(favouriteCats.filter((cat) => cat.id !== favourite.id));
						}}
					/>
				);
			})}
		</Grid>
	);
};
