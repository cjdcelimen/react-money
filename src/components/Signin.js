import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
    min-height: 692px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: #F3F3FB;
`

const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400px) {
        height: 80%;
    }
`

const Icon = styled(Link)`
    margin-left: 3rem;
    margin-top: 25px;
    text-decoration: none;
    color: #16163E;
    font-weight: bold;
    font-size: 1.5rem;

    @media screen and (max-width: 480px) {
        margin-left: 16px;
        margin-top: 8px;
    }
`

const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px) {
        padding: 10px;
    }
`

const Form = styled.form`
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

    @media screen and (max-width: 400px) {
        padding: 32px 32px;
    }
`

const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: #16163E;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    font-weight: bold;
`

const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #16163E;
    font-weight: bold;
`

const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
    color: #16163E;
`

const FormButton = styled.button`
    background: #5E8DCA;
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: #F3F3FB;
    font-size: 20px;
    cursor: pointer;
`

const Text = styled.span`
    text-align: center;
    margin-top: 24px;
    color: #16163E;
    font-size: 14px;
`

const Signin = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to='/'>money</Icon>
                    <FormContent>
                        <Form action='#'>
                            <FormH1>Sign in to your account</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required />
                            <FormButton type='submit'>Continue</FormButton>
                            <Text>Forgot password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default Signin
