import { CatPreview } from '@components/cat-preview';
import { PreviewSize } from '@components/types';
import { IImageCat, useCats } from '@hooks';
import React from 'react';

export const Vote: React.FC = () => {
    const { getRandomCat, setFavourite } = useCats();
    const [randomCat, setRandomCat] = React.useState<null | IImageCat>(null);

    React.useEffect(() => {
        getRandomCat(setRandomCat);
    }, []);

    if (!randomCat) {
        return <div>Loading random cat...</div>;
    }

    return (
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
