import { Button, Grid, Paper, Typography } from '@material-ui/core';

import styled from 'styled-components';

export const WrapperStyled = styled(Grid)`
  background-color: #fff;
  width: 100vw;
  height: 100vh;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-weight: lighter !important;
`;

export const SideImageStyled = styled(Grid)`
  background-image: url('https://source.unsplash.com/random');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #fff;
  box-shadow: inset 1px 85px 76px 0px;
  height: 100vh;

  @media (max-width: 736px) {
    display: none;
  }
`;

export const LoginFormContainerStyled = styled(Grid)`
  padding: 5rem 3rem;
  box-sizing: border-box;
  font-size: 1.5rem;
  font-weight: lighter;

  @media (max-width: 736px) {
    width: 100vw !important;
    height: 100vh !important;
  }
`;

export const TitleForm = styled.h1`
  font-size: 2rem;
  font-family: 'Graphik';
  line-height: 1.334;
  margin-bottom: 1.5rem;
`;

export const LoginFormStyled = styled.form`
  width: 100%;
  font-family: 'Graphik';
`;

export const InputStyled = styled.input`
  width: 100%;
  padding: 0.5rem 0.5rem 0.5rem 2rem;
  margin: 1rem 0;
  outline: none;
  border: 0px;
  border-bottom: ${(props) =>
    props.value ? '2px solid #ff3a64' : '1px solid #dcdcdc'};

  font-size: 1.2rem;
  font-weight: 100;

  &:focus {
    border-bottom: 2px solid #ff3a64;
    transition: all ease 0.2s;
  }

  &:focus + svg {
    color: #ff3a64;
    transition: all ease 0.2s;
  }

  & + svg {
    position: absolute;
    color: ${(props) => (props.value ? '#ff3a64' : '#757575')};
    left: 0;
  }
`;

export const FormControlStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
`;

export const LinkStyled = styled.a`
  margin: 1rem 0;
  text-decoration: none;
  color: #ff3a64;
  font-size: 1rem;
  margin-left: ${(props) => (props.textCenter ? '0' : 'auto')};

  &:hover {
    color: #9a0036;
    cursor: pointer;
  }
`;

export const ButtonStyled = styled.button`
  padding: 0.5rem 1rem;
  border: 0;
  border-radius: 1.5rem;
  background-color: #ff3a64;
  color: #fff;
  width: 100%;
  margin: 1rem 0px;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  &:hover {
    background-color: #9a0036;
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
      0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
    text-decoration: none;
  }

  &:active {
    box-shadow: 0px 5px 5px -3px rgb(0 0 0 / 20%),
      0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%);
  }
`;

export const IconSocial = styled.span`
  margin: 1rem 1rem;
  font-size: 1.8rem;

  &:hover {
    color: #ff3a64;
    cursor: pointer;
  }
`;
