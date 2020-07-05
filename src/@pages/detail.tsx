import { CatPreview } from '@components/cat-preview';
import { PreviewSize } from '@components/types';
import { IFavouriteCat, useCats } from '@hooks';
import { Column, Row, TextArea } from '@ui';
import React from 'react';
import { useParams } from 'react-router-dom';

enum FavouriteRating {
    ONE = '1',
    TWO = '2',
    THREE = '3',
    FIVE = '5',
    EIGHT = '8',
    THIRTEEN = '13',
}

interface IFavouriteData {
    about: string;
    rating?: FavouriteRating;
}

const STORED_FAVOURITE_DATA_KEY = 'storedFavouriteData';

const getFavouriteDataFromLocalStorage = (favouriteId?: number) => {
    const storedFavouriteDataString = localStorage.getItem(STORED_FAVOURITE_DATA_KEY);
    const storedFavouriteDataParsed = storedFavouriteDataString && JSON.parse(storedFavouriteDataString);

    if (favouriteId) {
        return storedFavouriteDataParsed && storedFavouriteDataParsed[favouriteId];
    }

    return storedFavouriteDataParsed;
};

const mergeFavouriteDataIntoLocalStorage = (favouriteId: string, favouriteData: IFavouriteData) => {
    const storedFavouriteDataAll = getFavouriteDataFromLocalStorage() || {};

    localStorage.setItem(
        STORED_FAVOURITE_DATA_KEY,
        JSON.stringify({
            ...storedFavouriteDataAll,
            [favouriteId]: favouriteData,
        })
    );
};

export const Detail: React.FC = () => {
    const { getFavourite } = useCats();
    const { favouriteId } = useParams();
    const [favouriteData, setFavouriteData] = React.useState<null | IFavouriteData>(null);
    const [favouriteCat, setfavouriteCat] = React.useState<null | IFavouriteCat>(null);

    React.useEffect(() => {
        const storedFavouriteData = getFavouriteDataFromLocalStorage(favouriteId);

        if (storedFavouriteData) {
            setFavouriteData(storedFavouriteData);
        } else {
            setFavouriteData({ about: '' });
        }

        getFavourite(favouriteId, setfavouriteCat);
    }, []);

    React.useEffect(() => {
        return () => {
            mergeFavouriteDataIntoLocalStorage(favouriteId, favouriteData);
        };
    }, [favouriteData]);

    const handleUpdateFavouriteData = (data: Partial<IFavouriteData>) => {
        setFavouriteData({
            ...favouriteData,
            ...data,
        });
    };

    if (!favouriteCat) {
        return <div>Loading favourite cat...</div>;
    }

    return (
        <Column>
            <CatPreview url={favouriteCat.image.url} size={PreviewSize.SMALL} />
            <h2>About this cat:</h2>
            <TextArea
                value={favouriteData.about}
                onChange={(event) => handleUpdateFavouriteData({ about: event.currentTarget.value })}
            />
            <h2>Rating</h2>
            <Row>
                <label>
                    <input
                        type="radio"
                        id={FavouriteRating.ONE}
                        name="rating"
                        checked={favouriteData.rating === FavouriteRating.ONE}
                        onChange={() => handleUpdateFavouriteData({ rating: FavouriteRating.ONE })}
                    />
                    {FavouriteRating.ONE}
                </label>

                <label>
                    <input
                        type="radio"
                        id={FavouriteRating.TWO}
                        name="rating"
                        checked={favouriteData.rating === FavouriteRating.TWO}
                        onChange={() => handleUpdateFavouriteData({ rating: FavouriteRating.TWO })}
                    />
                    {FavouriteRating.TWO}
                </label>

                <label>
                    <input
                        type="radio"
                        id={FavouriteRating.THREE}
                        name="rating"
                        checked={favouriteData.rating === FavouriteRating.THREE}
                        onChange={() => handleUpdateFavouriteData({ rating: FavouriteRating.THREE })}
                    />
                    {FavouriteRating.THREE}
                </label>

                <label>
                    <input
                        type="radio"
                        id={FavouriteRating.FIVE}
                        name="rating"
                        checked={favouriteData.rating === FavouriteRating.FIVE}
                        onChange={() => handleUpdateFavouriteData({ rating: FavouriteRating.FIVE })}
                    />
                    {FavouriteRating.FIVE}
                </label>

                <label>
                    <input
                        type="radio"
                        id={FavouriteRating.EIGHT}
                        name="rating"
                        checked={favouriteData.rating === FavouriteRating.EIGHT}
                        onChange={() => handleUpdateFavouriteData({ rating: FavouriteRating.EIGHT })}
                    />
                    {FavouriteRating.EIGHT}
                </label>

                <label>
                    <input
                        type="radio"
                        id={FavouriteRating.THIRTEEN}
                        name="rating"
                        checked={favouriteData.rating === FavouriteRating.THIRTEEN}
                        onChange={() => handleUpdateFavouriteData({ rating: FavouriteRating.THIRTEEN })}
                    />
                    {FavouriteRating.THIRTEEN}
                </label>
            </Row>
        </Column>
    );
};
