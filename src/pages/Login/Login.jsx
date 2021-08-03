import React, { useState } from 'react';
import Logo from '../../components/Logo/Logo';
import {
  WrapperStyled,
  SideImageStyled,
  LoginFormContainerStyled,
  TitleForm,
  LoginFormStyled,
  InputStyled,
  FormControlStyled,
  LinkStyled,
  ButtonStyled,
  IconSocial,
} from './Login.styles';

import { AiOutlineLock, AiOutlineMail } from 'react-icons/ai';
import { SiInstagram } from 'react-icons/si';
import { FaFacebookF } from 'react-icons/fa';
import { ImGoogle } from 'react-icons/im';

import { Paper } from '@material-ui/core';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginInput = (e) => {
    const newValue = e.target.value;

    const updateField = {
      email: (value) => setEmail(value),
      password: (value) => setPassword(value),
    };

    updateField[e.target.name](newValue);
  };

  return (
    <WrapperStyled container component="main">
      <SideImageStyled item xs={false} sm={4} md={7}>
        <Logo />
      </SideImageStyled>

      <LoginFormContainerStyled
        item
        container
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        direction="column"
        justifyContent="center"
        alignItems="center"
        square
      >
        <TitleForm>Login</TitleForm>

        <LoginFormStyled>
          <FormControlStyled>
            <InputStyled
              type="text"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleLoginInput}
            />
            <AiOutlineMail />
          </FormControlStyled>

          <FormControlStyled>
            <InputStyled
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={handleLoginInput}
            />
            <AiOutlineLock />
          </FormControlStyled>

          <FormControlStyled>
            <LinkStyled>Forgot your password?</LinkStyled>
          </FormControlStyled>

          <FormControlStyled>
            <ButtonStyled type="button">Get Inspired</ButtonStyled>
          </FormControlStyled>

          <FormControlStyled>
            <span style={{ fontSize: '1rem', marginRight: '0.5rem' }}>
              Don't have an account yet?
            </span>
            <LinkStyled textCenter> Sign Up </LinkStyled>
          </FormControlStyled>

          <FormControlStyled>
            <IconSocial>
              <FaFacebookF />
            </IconSocial>

            <IconSocial>
              <SiInstagram />
            </IconSocial>

            <IconSocial>
              <ImGoogle />
            </IconSocial>
          </FormControlStyled>
        </LoginFormStyled>
      </LoginFormContainerStyled>
    </WrapperStyled>
  );
};

export default Login;
