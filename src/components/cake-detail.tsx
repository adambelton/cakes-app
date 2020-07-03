import React, { CSSProperties } from 'react';
import styled from 'styled-components';

const Column = styled.div`
	flex-direction: column;
`;

const Image = styled.div<{ url: string }>`
	height: 400px;
	width: 400px;
	background: ${(props) => `url(${props.url})`};
	background-position: center center;
	background-size: cover;
`;

const Title = styled.h1``;

interface ICakeDetail {
	name: string;
	comment?: string;
	imageUrl: string;
	yumFactor?: number;
}

export const CakeDetail = ({ imageUrl, name }: ICakeDetail) => {
	return (
		<Column>
			<Image url={imageUrl} />
			<Title>{name}</Title>
		</Column>
	);
};
