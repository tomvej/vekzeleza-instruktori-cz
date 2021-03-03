import {ComponentType, ReactElement} from 'react';
import {useField} from 'react-final-form';

import {InputProps} from './types';

interface Props<V, T extends HTMLElement> {
    name: string;
    label?: string;
    component: ComponentType<InputProps<V, T>>;
}

export const FormField = <V, T extends HTMLElement>({name, label, component: Component}: Props<V, T>): ReactElement => {
    const {input, meta: {touched = false, error, submitSucceeded = false}} = useField(name);
    const showError = touched && (error !== undefined);

    return (
        <div>
            {label && <label htmlFor={name}>{label}</label>}
            <Component {...input} disabled={submitSucceeded} invalid={showError} />
            {showError && <div>{error}</div>}
        </div>
    );
};
