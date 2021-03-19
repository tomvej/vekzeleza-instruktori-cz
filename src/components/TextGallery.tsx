import classNames from 'classnames';
import {FluidObject} from 'gatsby-image';
import {FC} from 'react';

import {Image} from './Image';
import style from './TextGallery.module.scss';

interface Props {
    image: FluidObject;
    alternate?: boolean;
}

export const TextGallery: FC<Props> = ({children, image, alternate = false}) => (
    <div className={classNames(style.main, {[style.alternate]: alternate})}>
        <div className={style.text}>
            {children}
        </div>
        <div className={style.image}>
            <Image src={image} />
        </div>
    </div>
);
