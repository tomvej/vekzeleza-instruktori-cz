import classNames from 'classnames';

import style from './Button.module.scss';

export const className = (outline: boolean): string => classNames(style.main, {[style.outline]: outline});
