import { Absolute, Image, Relative } from '@ui';
import React from 'react';
import { FiThumbsDown, FiThumbsUp } from 'react-icons/fi';

import { PreviewSize } from './types';

enum HoverIcon {
    THUMBS_UP,
    THUMBS_DOWN,
}

interface ICatPreview {
    url: string;
    size: PreviewSize;
    onThumbsUpClick?: () => void;
    onThumbsDownClick?: () => void;
    onImageClick?: () => void;
}

export const CatPreview = ({ onImageClick, onThumbsDownClick, onThumbsUpClick, url, size }: ICatPreview) => {
    const [hoverIcon, setHoverIcon] = React.useState<null | HoverIcon>(null);

    return (
        <Relative>
            <Image isClickable={!!onImageClick} url={url} size={size} onClick={onImageClick} />
            {onThumbsUpClick && (
                <Absolute
                    onMouseEnter={() => setHoverIcon(HoverIcon.THUMBS_UP)}
                    onMouseLeave={() => setHoverIcon(null)}
                    onClick={onThumbsUpClick}
                    bottom={0}
                    left={0}
                >
                    <FiThumbsUp color={`rgba(8, 185, 8, ${hoverIcon === HoverIcon.THUMBS_UP ? 0.6 : 1})`} size={50} />
                </Absolute>
            )}
            {onThumbsDownClick && (
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
            )}
        </Relative>
    );
};
