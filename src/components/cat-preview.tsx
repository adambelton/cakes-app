import React from 'react';
import styled, { CSSProperties } from 'styled-components';
import { FiThumbsUp, FiThumbsDown } from 'react-icons/fi';

const Relative = styled.div`
	position: relative;
`;

const Absolute = styled.div<{
	top?: CSSProperties['top'];
	right?: CSSProperties['right'];
	bottom?: CSSProperties['bottom'];
	left?: CSSProperties['left'];
}>`
	position: absolute;
	top: ${(props) => props.top};
	right: ${(props) => props.right};
	bottom: ${(props) => props.bottom};
	left: ${(props) => props.left};
`;

const Column = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Image = styled.div<{ url: string }>`
	height: 300px;
	width: 300px;
	border-radius: 50%;
	background: ${(props) => `url(${props.url})`};
	background-position: center center;
	background-size: cover;
`;

enum HoverIcon {
	THUMBS_UP,
	THUMBS_DOWN,
}

interface ICatPreview {
	url: string;
}

export const CatPreview = ({ url }: ICatPreview) => {
	const [hoverIcon, setHoverIcon] = React.useState<null | HoverIcon>(null);
	return (
		<Column>
			<Relative>
				<Image url={url} />
				<Absolute
					onMouseEnter={() => setHoverIcon(HoverIcon.THUMBS_UP)}
					onMouseLeave={() => setHoverIcon(null)}
					bottom="-25px"
					left={0}
				>
					<FiThumbsUp color={`rgba(8, 185, 8, ${hoverIcon === HoverIcon.THUMBS_UP ? 0.6 : 1})`} size={50} />
				</Absolute>
				<Absolute
					onMouseEnter={() => setHoverIcon(HoverIcon.THUMBS_DOWN)}
					onMouseLeave={() => setHoverIcon(null)}
					bottom="-25px"
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
