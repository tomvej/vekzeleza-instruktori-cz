import classnames from 'classnames';
import {FC} from 'react';

import style from './ResponsiveContainer.module.scss';

interface Props {
    narrow?: boolean;
    center?: boolean;
}

export const ResponsiveContainer: FC<Props> = ({
    children,
    narrow = false,
    center = false,
}) => (
    <div className={classnames(style.main, {[style.narrow]: narrow, [style.center]: center})}>{children}</div>
);
