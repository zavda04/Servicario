import React from 'react';
import withAuthorization from '../components/hoc/withAuthorization';

export const Faq = () => {
    return (
        <div>
            Faq Page
        </div>
    )
}

export default withAuthorization(Faq);
