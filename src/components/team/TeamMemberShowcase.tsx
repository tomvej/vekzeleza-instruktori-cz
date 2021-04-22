import classNames from 'classnames';
import {FluidObject} from 'gatsby-image';
import {FC} from 'react';

import {Portrait} from './Portrait';
import style from './TeamMemberShowcase.module.scss';

interface Props {
    name: string;
    image: FluidObject;
    active?: boolean;
    onClick: () => void; // FIXME use hover to activate?
}

export const TeamMemberShowcase: FC<Props> = ({name, image, active = false, onClick}) => (
    <button onClick={onClick} className={classNames(style.main, {[style.active]: active})}>
        <Portrait src={image} title={name} />
    </button>
);
