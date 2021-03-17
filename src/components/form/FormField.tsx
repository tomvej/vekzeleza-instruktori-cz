import {FieldValidator} from 'final-form';
import {ComponentType, ReactElement} from 'react';
import {useField} from 'react-final-form';

import {composeValidations} from '../../utils';

import style from './FormField.module.scss';
import {InputProps} from './types';

interface Props<V, T extends HTMLElement, P> {
    name: string;
    label?: string;
    component: ComponentType<InputProps<V, T> & P>;
    validate?: FieldValidator<V>[];
    props: P;
}

export const FormField = <V, T extends HTMLElement, P>({name, label, component: Component, validate = [], props}: Props<V, T, P>): ReactElement => {
    const {input, meta: {touched = false, error, submitSucceeded = false}} = useField(name, {validate: composeValidations(validate)});
    const showError = touched && (error !== undefined);

    return (
        <div className={style.main}>
            {label && <label htmlFor={name} className={style.label}>{label}</label>}
            <Component {...input} disabled={submitSucceeded} invalid={showError} {...props} />
            {showError && <div className={style.error}>{error}</div>}
        </div>
    );
};
