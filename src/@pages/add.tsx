import { PreviewSize } from '@components/types';
import { useCats } from '@hooks';
import { Absolute, Image, Relative, Row } from '@ui';
import React from 'react';
import { useHistory } from 'react-router-dom';

interface IFileToUpload {
    preview: string;
    data: File;
}

export const Add: React.FC = () => {
    const { createNewCat } = useCats();
    const history = useHistory();
    const [fileToUpload, setFileToUpload] = React.useState<null | IFileToUpload>(null);
    const [uploadInProcess, setUploadInProcess] = React.useState(false);

    const handleSaveNewFavouriteCat = async () => {
        if (fileToUpload) {
            const data = new FormData();
            data.append('file', fileToUpload.data);
            setUploadInProcess(true);
            await createNewCat(data);
            history.push('/favourites');
        }
    };

    const handleSetFileToUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = event.currentTarget;

        if (files) {
            setFileToUpload({
                preview: URL.createObjectURL(files[0]),
                data: files[0],
            });
        }
    };

    return (
        <Relative>
            <Image url={fileToUpload ? fileToUpload.preview : undefined} size={PreviewSize.LARGE} />
            <Absolute bottom={0}>
                <Row>
                    <input type="file" onChange={handleSetFileToUpload} />
                    <button
                        disabled={!fileToUpload || uploadInProcess}
                        onClick={() => fileToUpload && handleSaveNewFavouriteCat()}
                    >
                        {uploadInProcess ? 'Uploading' : 'Submit'}
                    </button>
                </Row>
            </Absolute>
        </Relative>
    );
};
