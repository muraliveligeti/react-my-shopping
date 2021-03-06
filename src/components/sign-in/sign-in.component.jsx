import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component'
import './sign-in.styles.scss';


class SignIn extends React.Component{

    constructor(){
        super();

        this.state = {
            email: '',
            password: ''
        }

    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({email:'', password:''})
    }


    handleChange = (event) => {
        const {value, name} = event.target;
        this.setState({[name]: value});
    }

    render(){

        return(

            <div className='sign-in'>
            <h2> I already have an account</h2>
            <form onSubmit={this.handleSubmit}>
                <FormInput name='email' label='email' type='email' value={this.state.email} handleChange={this.handleChange}></FormInput>

                <FormInput name='password' label='password' type='password' value={this.state.password} handleChange={this.handleChange}></FormInput>
   
                <CustomButton type='submit'>Sign Up</CustomButton>

            </form>
            </div>

        )


    }


}

export default SignIn;