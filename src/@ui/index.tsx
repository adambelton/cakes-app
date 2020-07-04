import React from 'react';
import styled, { CSSProperties } from 'styled-components';

export const Relative = styled.div`
	position: relative;
`;

export const Absolute = styled.div<{
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

export const Column = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Image = styled.div<{ url: string }>`
	height: 300px;
	width: 300px;
	border-radius: 50%;
	background: ${(props) => `url(${props.url})`};
	background-position: center center;
	background-size: cover;
	margin-bottom: 50px;
`;

export const Canvas = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
`;
