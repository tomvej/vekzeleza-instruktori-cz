import {FC} from 'react';
import {Form as FinalForm} from 'react-final-form';

import {FormField, StringInput} from '../components';

export const RegisterForm: FC = () => {
    const onSubmit = (values: any) => {
        console.log(values);
    };
    return (
        <FinalForm onSubmit={onSubmit}>
            {({handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <FormField name="name" component={StringInput} label="Jméno a příjmení" />
                    <FormField name="email" component={StringInput} label="E-mail" />
                    <FormField name="message" component={StringInput} />
                    <button type="submit">Přihlásit se</button>
                </form>
            )}
        </FinalForm>
    );
};
