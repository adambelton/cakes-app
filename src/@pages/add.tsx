import { PreviewSize } from '@components/types';
import { useCats } from '@hooks';
import { Absolute, Image, Relative, Row } from '@ui';
import React from 'react';
import { useHistory } from 'react-router-dom';

interface IFileToUpload {
	preview: string;
	data: File;
}

export const Add = () => {
	const { createNewCat } = useCats();
	const history = useHistory();
	const [fileToUpload, setFileToUpload] = React.useState<null | IFileToUpload>(null);
	const [uploadInProcess, setUploadInProcess] = React.useState(false);

	const saveNewFavouriteCat = async () => {
		const data = new FormData();
		data.append('file', fileToUpload.data);
		setUploadInProcess(true);
		await createNewCat(data);
		history.push('/favourites');
	};

	return (
		<Relative>
			<Image url={fileToUpload && fileToUpload.preview} size={PreviewSize.LARGE} />
			<Absolute bottom={0}>
				<Row>
					<input
						type="file"
						onChange={(event) =>
							setFileToUpload({
								preview: URL.createObjectURL(event.currentTarget.files[0]),
								data: event.currentTarget.files[0],
							})
						}
					/>
					<button
						disabled={!fileToUpload || uploadInProcess}
						onClick={() => fileToUpload && saveNewFavouriteCat()}
					>
						{uploadInProcess ? 'Uploading' : 'Submit'}
					</button>
				</Row>
			</Absolute>
		</Relative>
	);
};
