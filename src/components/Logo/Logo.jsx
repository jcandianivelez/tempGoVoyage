import React from 'react';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';
import DeadStock from '../../assets/fonts/dead-stock/Dead-Stock.ttf';

const GoVoyageLogo = styled.h1`
  @font-face {
    font-family: 'Dead Stock';
    src: url('${DeadStock}');
  }

  font-family: 'Dead Stock';
  font-size: 3em;
  font-weight: normal;
  color: #fff;
  margin: 25px 0px 0px 25px;
`;

const GoWord = styled.span`
  color: #fff;
`;

const SlashWord = styled.span`
  font-family: 'Roboto';
`;

const VoyageWord = styled.span`
  color: #ff3a64;
`;

const Logo = () => {
  return (
    <GoVoyageLogo>
      <GoWord> Go </GoWord>
      <SlashWord> / </SlashWord>
      <VoyageWord> Voyage </VoyageWord>
    </GoVoyageLogo>
  );
};

export default Logo;
