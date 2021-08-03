import React, { useState } from 'react';
import styled from 'styled-components';

import { Grid, Stepper, Step, StepLabel, Button } from '@material-ui/core';

import FormDatosPersonales from './Forms/FormDatosPersonales';
import FormLugaresFavoritos from './Forms/FormLugaresFavoritos';
import FormHotelesResorts from './Forms/FormHotelesResorts';
import FormInspiracion from './Forms/FormInspiracion';

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #000;
  overflow-y: auto;
  box-sizing: border-box;
`;

const MainContent = styled.div`
  width: 1200px;
  max-width: 1200px;
  height: calc(100vh - 80px);
  margin: 0px auto;
  top: 80px;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
`;

const ContainerStepperForms = styled.div`
  width: 800px;
  background-color: #fff;
  padding: 3rem;
  box-sizing: border-box;
  border-radius: 0.5rem;
`;

const StepperStyled = styled(Stepper)`
  padding: 0px;
  & svg.MuiStepIcon-active {
    color: #ff3a64 !important;
  }

  & svg.MuiStepIcon-completed {
    color: #ff3a64 !important;
  }
`;

const Preferencias = () => {
  const steps = [
    'Datos personales',
    'Lugares favoritos',
    'Hoteles & Resorts',
    'Inspiración',
  ];

  const [activeStep, setActiveStep] = useState(0);

  const [preferencias, setPreferencias] = useState({
    personales: {
      nombres: '',
      apellidos: '',
      direccion: '',
      codigoPostal: '',
    },
    favoritos: {
      frecuencia: 0,
      lugares: [],
    },
    hotelesresorts: [],
    inspiraciones: [],
  });

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handlePersonales = (e) => {
    const newValue = e.target.value;

    const newPreferencias = {
      ...preferencias,
      personales: {
        ...preferencias.personales,
        [e.target.name]: newValue,
      },
    };

    setPreferencias(newPreferencias);
  };

  const handleFavoritos = (e) => {
    const newValue = e.target.value;

    if (e.target.name === 'frecuencia') {
      const newPreferencias = {
        ...preferencias,
        favoritos: {
          ...preferencias.favoritos,
          [e.target.name]: newValue,
        },
      };

      setPreferencias(newPreferencias);
    } else {
      const newPreferencias = {
        ...preferencias,
        favoritos: {
          ...preferencias.favoritos,
          lugares: e.target.checked
            ? [...preferencias.favoritos.lugares, newValue]
            : preferencias.favoritos.lugares.filter(
                (lugar) => lugar !== newValue
              ),
        },
      };

      setPreferencias(newPreferencias);
    }
  };

  const handleHotelesResorts = (hotelIndex) => {
    const newPreferencias = {
      ...preferencias,
      hotelesresorts: preferencias.hotelesresorts.includes(index)
        ? preferencias.hotelesresorts.filter((hotel) => hotel !== hotelIndex)
        : [...preferencias.hotelesresorts, hotelIndex],
    };

    setPreferencias(newPreferencias);

    console.log(preferencias);
  };

  const getFormStepper = () => {
    switch (activeStep) {
      case 0:
        return (
          <FormDatosPersonales
            personales={preferencias.personales}
            handlePersonales={handlePersonales}
          />
        );
        break;

      case 1:
        return (
          <FormLugaresFavoritos
            favoritos={preferencias.favoritos}
            handleFavoritos={handleFavoritos}
          />
        );
        break;

      case 2:
        return (
          <FormHotelesResorts
            hotelesresorts={preferencias.hotelesresorts}
            handleHotelesResorts={handleHotelesResorts}
          />
        );
        break;

      case 3:
        return <FormInspiracion />;
        break;
    }
  };

  return (
    <MainContainer>
      <MainContent>
        <ContainerStepperForms>
          <Grid container>
            <Grid item xs={12}>
              <StepperStyled activeStep={activeStep}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel color="secondary">{label}</StepLabel>
                  </Step>
                ))}
              </StepperStyled>
            </Grid>
          </Grid>

          {getFormStepper()}

          <Grid item container xs={12} justifyContent="flex-end">
            {activeStep === 0 ? null : (
              <Button
                variant="contained"
                style={{ marginRight: '1rem' }}
                onClick={handleBack}
              >
                Atrás
              </Button>
            )}

            {activeStep < 3 ? (
              <Button
                variant="contained"
                color="secondary"
                onClick={handleNext}
              >
                Siguiente
              </Button>
            ) : null}

            {activeStep == 3 ? (
              <Button variant="contained" color="secondary">
                Finalizar
              </Button>
            ) : null}
          </Grid>
        </ContainerStepperForms>
      </MainContent>
    </MainContainer>
  );
};

export default Preferencias;
