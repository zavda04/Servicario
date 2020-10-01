import React from 'react';
import withAuthorization from '../components/hoc/withAuthorization';

 const Secret = (props) => {
    return (
        <div>
            I am a secret Page, only auth user can see me!
        </div>
    )
}

export default withAuthorization(Secret);