import {faFacebookF} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon as FAIcon} from '@fortawesome/react-fontawesome';
import {graphql, useStaticQuery} from 'gatsby';
import {FC} from 'react';

import {Centering, HrefButton, ResponsiveContainer} from '../components';

export const Contact: FC = () => {
    const {contact} = useStaticQuery<GatsbyTypes.ContactQuery>(graphql`
        query Contact {
            contact: site {
                siteMetadata {
                    fbEvent
                    email
                }
            }
        }
    `);

    const email = contact.siteMetadata!.email!;
    const event = contact.siteMetadata!.fbEvent!;

    return (
        <ResponsiveContainer narrow>
            <Centering>
                <h1>Kontakt</h1>
                <p>Chceš se na něco zeptat? Napiš nám!</p>
                <p><HrefButton href={`mailto:${email}`} outline><FAIcon icon={faEnvelope} /> {email}</HrefButton></p>
                <p>Jsme aktivní i na Facebooku:</p>

                <p><HrefButton href={`https://www.facebook.com/events/${event}`} outline><FAIcon
                    icon={faFacebookF} /> Sdílej!</HrefButton></p>
            </Centering>
        </ResponsiveContainer>
    );
};
