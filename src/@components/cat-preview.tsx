import { Absolute, Column, Image, Relative } from '@ui';
import React from 'react';
import { FiThumbsDown, FiThumbsUp } from 'react-icons/fi';

enum HoverIcon {
	THUMBS_UP,
	THUMBS_DOWN,
}

interface ICatPreview {
	url: string;
	onThumbsUpClick: () => void;
	onThumbsDownClick: () => void;
}

export const CatPreview = ({ onThumbsDownClick, onThumbsUpClick, url }: ICatPreview) => {
	const [hoverIcon, setHoverIcon] = React.useState<null | HoverIcon>(null);
	return (
		<Column>
			<Relative>
				<Image url={url} />
				<Absolute
					onMouseEnter={() => setHoverIcon(HoverIcon.THUMBS_UP)}
					onMouseLeave={() => setHoverIcon(null)}
					onClick={onThumbsUpClick}
					bottom={0}
					left={0}
				>
					<FiThumbsUp color={`rgba(8, 185, 8, ${hoverIcon === HoverIcon.THUMBS_UP ? 0.6 : 1})`} size={50} />
				</Absolute>
				<Absolute
					onMouseEnter={() => setHoverIcon(HoverIcon.THUMBS_DOWN)}
					onMouseLeave={() => setHoverIcon(null)}
					onClick={onThumbsDownClick}
					bottom={0}
					right={0}
				>
					<FiThumbsDown
						color={`rgba(242, 12, 12, ${hoverIcon === HoverIcon.THUMBS_DOWN ? 0.6 : 1})`}
						size={50}
					/>
				</Absolute>
			</Relative>
		</Column>
	);
};
