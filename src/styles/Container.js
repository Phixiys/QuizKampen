import styled from 'styled-components';
import { device } from './Breakpoints';

const Container = styled.div`
  margin: 0 auto;
  max-width: 1100px;

  @media ${device.mobileS} {
    padding: 0 6px;
  }

  @media ${device.tablet} {
    max-width: 1200px;
    padding: 0 12px;
  }

  @media ${device.laptopL} {
    max-width: 1440px;
    padding: 0 12px;
  }

  @media ${device.desktop} {
    padding: 0 24px;
  }

  &--small {
    max-width: 760px;
    margin: 0 auto;
  }
`;

export default Container;