import {validate as validateEmail} from 'email-validator';
import {FieldValidator, FORM_ERROR} from 'final-form';
import {graphql, useStaticQuery} from 'gatsby';
import {FC} from 'react';
import {Form as FinalForm} from 'react-final-form';

import {Alert, Form, FormField, FormRow, StringInput, SubmitButton, TextArea} from '../components';
import {submitForm} from '../utils';

const required: FieldValidator<any> = (value) => ((value !== null && value !== undefined && value !== '') ? undefined : 'Toto pole je povinné.');

const validEmail: FieldValidator<string> = (value) => validateEmail(value) ? undefined : 'Toto není e-mailová adresa.';

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
            {({handleSubmit, submitSucceeded, submitting}) => {
                const disabled = submitting || submitSucceeded;
                return (
                    <Form onSubmit={handleSubmit}>
                        <FormRow>
                            <FormField
                                name="name"
                                component={StringInput}
                                label="Jméno a příjmení"
                                validate={[required]}
                                props={{placeholder: 'Tvoje jméno', disabled}}
                            />
                            <FormField
                                name="email"
                                component={StringInput}
                                label="E-mail"
                                validate={[required, validEmail]}
                                props={{placeholder: 'Tvůj e-mail', disabled}}
                            />
                        </FormRow>
                        <FormField
                            name="message"
                            component={TextArea}
                            props={{placeholder: 'Chceš nám něco vzkázat?', disabled}}
                        />
                        {submitSucceeded || <SubmitButton disabled={disabled}>Přihlásit se</SubmitButton>}
                        {submitSucceeded && <Alert>Díky za přihlášku. Co nevidět se ti ozveme.</Alert>}
                    </Form>
                );
            }}
        </FinalForm>
    );
};
