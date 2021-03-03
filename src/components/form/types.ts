import {FieldInputProps} from 'react-final-form';

export interface InputProps<V, E extends HTMLElement = HTMLElement> extends FieldInputProps<V, E> {
    disabled: boolean;
    invalid: boolean;
}
