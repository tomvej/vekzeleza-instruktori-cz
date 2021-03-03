import queryString from 'querystring';

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
