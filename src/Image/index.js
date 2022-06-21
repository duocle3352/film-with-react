import { useState, forwardRef } from 'react';
import classNames from 'classnames/bind';
import images from '~/access/image';
import style from './Image.module.scss';

const Image = forwardRef(
    (
        {
            alt,
            src,
            className,
            fallBack: customFallBack = images.noImage,
            ...props
        },
        ref,
    ) => {
        const [fallBack, setFallBack] = useState('');
        const handleError = () => {
            setFallBack(customFallBack);
        };

        return (
            <img
                className={classNames(style.wrapper, className)}
                src={fallBack || src}
                alt={alt}
                ref={ref}
                {...props}
                onError={handleError}
            />
        );
    },
);

export default Image;
