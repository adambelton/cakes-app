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

export const Clickable = styled.div`
    &:hover {
        opacity: 0.6;
        cursor: pointer;
    }
`;

export const Column = styled.div<{ alignItems?: CSSProperties['alignItems'] }>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: ${(props) => props.alignItems || 'center'};
`;

export const Grid = styled.div`
    max-width: 800px;
    margin: 20px 0px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 20px;
`;

export const Image = styled.div<{
    isClickable?: boolean;
    url?: string;
    size: CSSProperties['height'] | CSSProperties['width'];
}>`
    height: ${(props) => props.size};
    width: ${(props) => props.size};
    border-radius: 50%;
    background: ${(props) => `#CDCDCD url(${props.url})`};
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
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TextArea = styled.textarea`
    height: 200px;
    width: 300px;
`;

export const Row = styled.div`
    display: flex;
`;
