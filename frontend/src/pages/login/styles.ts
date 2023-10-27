import styled from 'styled-components';
import restaurant from './assets/restaurant.jpg'
import { Container } from '@mui/material';

export const LoginContainer = styled.div`
  background-image: url(${restaurant});
  width: 100vw;
  height: 100vh;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginBoxContainer = styled(Container)`
  background-color: rgba(255, 255, 255, 0.8);
  padding: 10px;
  border-radius: 10px;
`
