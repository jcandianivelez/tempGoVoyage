import React from 'react';
import styled from 'styled-components';
import { Grid, TextField } from '@material-ui/core';

const AdressForm = styled.form`
  background-color: #fff;
  margin: 3rem 0px;
`;

const TextFieldStyled = styled(TextField)`
  box-sizing: border-box;
  padding: 1rem 0.5rem;

  & input {
    font-size: 1.2rem !important;
    font-weight: lighter !important;
  }
`;

const FormDatosPersonales = ({ personales, handlePersonales }) => {
  return (
    <AdressForm>
      <Grid container>
        <Grid item xs={12} md={6} lg={6}>
          <TextFieldStyled
            id="nombres"
            name="nombres"
            label="Nombre(s)"
            type="text"
            color="secondary"
            fullWidth
            value={personales.nombres}
            onChange={handlePersonales}
            required
          />
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
          <TextFieldStyled
            id="apellidos"
            name="apellidos"
            label="Apellido(s)"
            type="text"
            color="secondary"
            fullWidth
            value={personales.apellidos}
            onChange={handlePersonales}
            required
          />
        </Grid>

        <Grid item xs={12} sm={8} md={8} lg={8}>
          <TextFieldStyled
            id="direccion"
            name="direccion"
            label="Dirección"
            type="text"
            color="secondary"
            fullWidth
            value={personales.direccion}
            onChange={handlePersonales}
            required
          />
        </Grid>

        <Grid item xs={12} sm={4} md={4} lg={4}>
          <TextFieldStyled
            id="codigoPostal"
            name="codigoPostal"
            label="Código postal"
            type="text"
            color="secondary"
            fullWidth
            value={personales.codigoPostal}
            onChange={handlePersonales}
            required
          />
        </Grid>
      </Grid>
    </AdressForm>
  );
};

export default FormDatosPersonales;
