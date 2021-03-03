import {FORM_ERROR} from 'final-form';
import {graphql, useStaticQuery} from 'gatsby';
import {FC} from 'react';
import {Form as FinalForm} from 'react-final-form';

import {FormField, StringInput} from '../components';
import {submitForm} from '../utils';

interface FormValues {
    name: string;
    email: string;
    message: string;
}

export const RegisterForm: FC = () => {
    const {site} = useStaticQuery<GatsbyTypes.FormQuery>(graphql`
        query Form {
            site {
                siteMetadata {
                    form {
                        action
                        fields {
                            email
                            message
                            name
                        }
                    }
                }
            }
        }
    `);

    const onSubmit = (values: FormValues) => {
        const action = site!.siteMetadata!.form!.action!;
        const fields = site!.siteMetadata!.form!.fields!;
        submitForm(action, {
            [fields.name!]: values.name,
            [fields.email!]: values.email,
            [fields.message!]: values.message,
        }).catch(() => ({[FORM_ERROR]: 'cannot register'}));
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
