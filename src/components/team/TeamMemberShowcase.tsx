import classNames from 'classnames';
import {FluidObject} from 'gatsby-image';
import {FC} from 'react';

import {Portrait} from './Portrait';
import style from './TeamMemberShowcase.module.scss';

interface Props {
    name: string;
    image: FluidObject;
    active?: boolean;
    onActivate: () => void;
}

export const TeamMemberShowcase: FC<Props> = ({name, image, active = false, onActivate}) => (
    <div
        onMouseMove={onActivate}
        className={classNames(style.main, {[style.active]: active})}
    >
        <Portrait src={image} title={name} />
    </div>
);
