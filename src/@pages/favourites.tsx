import { CatPreview } from '@components/cat-preview';
import { PreviewSize } from '@components/types';
import { IFavouriteCat, useCats } from '@hooks';
import { Column, Grid } from '@ui';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';

export const Favourites = () => {
    const { getFavourites, removeFavourite } = useCats();
    const history = useHistory();
    const [favouriteCats, setFavouriteCats] = React.useState<null | IFavouriteCat[]>(null);

    React.useEffect(() => {
        getFavourites(setFavouriteCats);
    }, []);

    if (!favouriteCats) {
        return <div>Loading favourite cats...</div>;
    }

    if (!favouriteCats.length) {
        return (
            <Column>
                <div>{`What, you don't like cats? Are you a monster??`}</div>
                <Link to="/">Vote for more cats</Link>
            </Column>
        );
    }

    return (
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
                        onImageClick={() => {
                            history.push(`/favourites/${favourite.id}`);
                        }}
                    />
                );
            })}
        </Grid>
    );
};
