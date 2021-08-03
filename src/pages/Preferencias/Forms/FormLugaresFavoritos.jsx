import React from 'react';
import styled from 'styled-components';
import {
  Typography,
  Grid,
  Slider,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';

const FormFavoritos = styled.form`
  background-color: #fff;
  margin: 3rem 0px;
`;

const FormLugaresFavoritos = ({ favoritos, handleFavoritos }) => {
  const marks = [
    { value: 0, label: '0' },
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
    { value: 6, label: '6' },
    { value: 7, label: '7' },
    { value: 8, label: '8' },
    { value: 9, label: '9' },
    { value: 10, label: '10' },
  ];

  const lugares = [
    'Playa',
    'Montaña',
    'Ciudad',
    'Lagos',
    'Ruinas',
    'Pueblo Mágico',
  ];

  return (
    <FormFavoritos>
      <Grid container>
        <Grid item xs={12} style={{ margin: '2rem 0px' }}>
          <Grid item xs={12}>
            <Typography gutterBottom>
              Del 1 al 10 ¿Qué tanto te gusta viajar?
            </Typography>
          </Grid>

          <Slider
            style={{ margin: '2rem 0px' }}
            defaultValue={favoritos.frecuencia}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={1}
            marks={marks}
            min={0}
            max={10}
            color="secondary"
            onChange={handleFavoritos}
          />
        </Grid>

        <FormGroup spacing={2} row>
          <Grid item xs={12} style={{ marginBottom: '1rem' }}>
            <Typography gutterBottom>Dinos que lugares prefieres</Typography>
          </Grid>

          {lugares.map((lugar, index) => (
            <FormControlLabel
              key={lugar.toLocaleLowerCase().replace(/\s/g, '')}
              control={
                <Checkbox
                  checked={favoritos.lugares.includes(`${index}`)}
                  onChange={handleFavoritos}
                  name={lugar.toLocaleLowerCase().replace(/\s/g, '')}
                  value={index}
                />
              }
              label={lugar}
            />
          ))}
        </FormGroup>
      </Grid>
    </FormFavoritos>
  );
};

export default FormLugaresFavoritos;
