import React from 'react';

import './sign-in-up.styles.scss';
import Signin from '../../components/sign-in/sign-in.component';
import SignUp from "../../components/sign-up/sign-up.component";

const SignInUp = () => (
    <div className='sign-in-and-sign-up'>
        <Signin/>
        <SignUp/>
    </div>
);

export default SignInUp;