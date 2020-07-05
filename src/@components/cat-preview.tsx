import { Absolute, Clickable, Image, Relative } from '@ui';
import React from 'react';
import { FiThumbsDown, FiThumbsUp } from 'react-icons/fi';

import { PreviewSize } from './types';

interface ICatPreview {
    url: string;
    size: PreviewSize;
    onThumbsUpClick?: () => void;
    onThumbsDownClick?: () => void;
    onImageClick?: () => void;
}

export const CatPreview: React.FC<ICatPreview> = ({ onImageClick, onThumbsDownClick, onThumbsUpClick, url, size }) => {
    return (
        <Relative>
            {!!onImageClick ? (
                <Clickable>
                    <Image isClickable={!!onImageClick} url={url} size={size} onClick={onImageClick} />
                </Clickable>
            ) : (
                <Image isClickable={!!onImageClick} url={url} size={size} onClick={onImageClick} />
            )}
            {onThumbsUpClick && (
                <Absolute onClick={onThumbsUpClick} bottom={0} left={0}>
                    <Clickable>
                        <FiThumbsUp color={'rgb(8, 185, 8)'} size={50} />
                    </Clickable>
                </Absolute>
            )}
            {onThumbsDownClick && (
                <Absolute onClick={onThumbsDownClick} bottom={0} right={0}>
                    <Clickable>
                        <FiThumbsDown color={'rgb(242, 12, 12)'} size={50} />
                    </Clickable>
                </Absolute>
            )}
        </Relative>
    );
};
