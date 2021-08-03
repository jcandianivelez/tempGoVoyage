import React from 'react';
import styled from 'styled-components';
import { Grid, Typography } from '@material-ui/core';

const HotelContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 3rem 0;
`;

const HotelItem = styled.div`
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

const Title = styled(Typography)`
  margin: 2rem 0;
`;

const FormHotelesResorts = ({ hotelesresorts, handleHotelesResorts }) => {
  const hoteles = [
    'Capella Hotels & Resorts',
    'Rocco Forte Hotels',
    'Mandarin Oriental',
    'Auberge Resorts Collection',
  ];

  const getHoteles = () =>
    hoteles.map((hotel, index) => (
      <HotelItem
        item
        xs={12}
        sm={6}
        key={index}
        onClick={() => handleHotelesResorts(index)}
      >
        <div>{hotel}</div>
      </HotelItem>
    ));

  return (
    <div>
      <Title>¿Dónde consigues mayor inspiración para tus viajes?</Title>
      <HotelContainer container spacing={2}>
        {getHoteles()}
      </HotelContainer>
    </div>
  );
};

export default FormHotelesResorts;
