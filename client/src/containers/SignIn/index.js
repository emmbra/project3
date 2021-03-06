import React, { Component } from 'react';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { Form, Segment, Button } from 'semantic-ui-react';
import { email, required } from 'redux-form-validators';
import axios from 'axios';
import { AUTH_USER } from '../../actions/types';
class SignIn extends Component {
  // When the user submits the form, send the formValues to /api/auth/signin
  onSubmit = async (formValues, dispatch) => {
    try {
      const { data } = await axios.post('/api/auth/signin', formValues);
      console.log(data);
      localStorage.setItem('token', data.token);
      dispatch({ type: AUTH_USER, payload: data.token });
      this.props.history.push('/dashboard');
    } catch (e) {
      throw new SubmissionError({
        email: 'Wrong email',
        password: 'Wrong password',
        _error: 'Signin failed!'
      });
    }
  }
  // set the token coming from data into localStorage under the key 'token'
  // Dispatch the action to the reducer to set the token as the state for authentication
  // Redirect the user to the '/counter' route
  renderEmail = ({ input, meta }) => {
    return (
      <Form.Input
        {...input}
        fluid
        error={meta.touched && meta.error}
        icon='user'
        iconPosition='left'
        autoComplete='off'
        placeholder='Email Address'
      />
    )
  }
  renderPassword = ({ input, meta }) => {
    return (
      <Form.Input
        {...input}
        type='password'
        fluid
        error={meta.touched && meta.error}
        icon='lock'
        iconPosition='left'
        autoComplete='off'
        placeholder='Password'
      />
    )
  }
  render() {
    const { handleSubmit, invalid, submitting, submitFailed } = this.props;
    return (
      <Segment stacked style={{ maxWidth: 500, marginLeft: 'auto', marginRight: 'auto', marginTop: 50, opacity: '0.9' }} >
        <Form size='large' onSubmit={handleSubmit(this.onSubmit)}>
          {/* <Segment stacked> */}
          <Field
            name='email'
            component={this.renderEmail}
            validate={
              [
                required({ msg: 'Email is required' }),
                email({ msg: 'You must provide a valid email address' })
              ]
            }
          />
          <Field
            name='Password'
            component={this.renderPassword}
            validate={
              [
                required({ msg: 'You must provide a password' })
              ]
            }
          />
          <Button
            content='Sign In'
            fluid
            size='large'
            type='submit'
            disabled={invalid || submitting || submitFailed}
          />
        </Form>
      </Segment>
    )
  }
}
export default reduxForm({ form: 'SignIn ' })(SignIn);