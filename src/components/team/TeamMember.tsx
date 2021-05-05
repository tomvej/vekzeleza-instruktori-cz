import classNames from 'classnames';
import {FluidObject} from 'gatsby-image';
import {FC} from 'react';

import {Image} from '../Image';

import style from './TeamMember.module.scss';

interface Props {
    name: string;
    image: FluidObject;
    active?: boolean;
}

export const TeamMember: FC<Props> = ({name, children, active = false, image}) => (
    <div className={classNames({[style.hidden]: !active})}>
        <h2 className={style.title}>{name}</h2>
        <div className={style.image}>
            <Image src={image} />
        </div>
        {children}
    </div>
);
