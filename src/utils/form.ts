import queryString from 'querystring';

import {FieldValidator} from 'final-form';

export const composeValidations = <T>(validations: FieldValidator<T>[]): FieldValidator<T> =>
    (value, allValues, meta) => validations
        .map((validate) => validate(value, allValues, meta))
        .find((result) => result !== undefined);

export const submitForm = (
    action: string,
    values: queryString.ParsedUrlQueryInput,
): Promise<Response> => fetch(action, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: queryString.stringify(values),
});
