import React from "react";

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    state = {
        email: "",
        password: ""
    };

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ email: "", password: "" });
    }
    
    render() {
        return (
            <div className="sign-in">
                <h2 className="title">Sign In</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="email" 
                        name="email" 
                        value={this.state.email}
                        required
                        onChange={this.handleChange}
                        label="email"
                    />
                    <FormInput 
                        type="password"
                        name="password"
                        value={this.state.password}
                        required
                        onChange={this.handleChange}
                        label="password"
                    />
                    <CustomButton type="submit">Sign In</CustomButton>
                </form>
                <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
            </div>
        );
    }
}

export default SignIn;