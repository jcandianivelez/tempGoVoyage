import React from 'react';
import styled from 'styled-components';
import { Grid, Typography } from '@material-ui/core';

import { SiInstagram } from 'react-icons/si';
import { FaFacebookF } from 'react-icons/fa';
import { ImGoogle } from 'react-icons/im';

const HotelContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 3rem 0;
`;

const Title = styled(Typography)`
  margin: 2rem 0;
`;

const HotelItem = styled.div`
  font-size: 1.5rem;
  padding: 0.5rem;
  border: 1px solid #9e9e9e;
  border-radius: 1rem;
  box-sizing: border-box;
  flex: 25%;
  margin: 0 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  background-color: ${(props) => (props.selected ? '#FF3A64' : '#FFF')};
  color: ${(props) => (props.selected ? '#FFF' : '#000')};
`;

const FormInspiracion = () => {
  return (
    <div>
      <Title>¿Dónde consigues mayor inspiración para tus viajes?</Title>

      <HotelContainer container spacing={2}>
        <HotelItem item xs={12} sm={6}>
          <SiInstagram />
        </HotelItem>

        <HotelItem item xs={12} sm={6}>
          <FaFacebookF />
        </HotelItem>

        <HotelItem item xs={12} sm={6}>
          <ImGoogle />
        </HotelItem>
      </HotelContainer>
    </div>
  );
};

export default FormInspiracion;
