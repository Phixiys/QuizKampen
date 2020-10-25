import styled from 'styled-components';

const Spinner = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  border: 4px solid #240229;
  overflow: hidden;
  border-radius: 50%;
  box-shadow: -5px -5px 5px rgba(255, 255, 255, 0.1),
    10px 10px 10px rgba(138, 138, 138, 0.4),
    inset -5px -5px 5px rgba(255, 255, 255, 0.2),
    inset 10px 10px 10px rgba(120, 120, 120, 0.4);

    &:before {
      content: "";
      position: absolute;
      top: 25px;
      left: 25px;
      right: 25px;
      bottom: 25px;
      z-index: 10;
      background: #282828;
      border-radius: 50%;
      border: 2px solid #240229;
      box-shadow: inset -2px -2px 5px rgba(255, 255, 255, 0.2),
        inset 3px 3px 5px rgba(138, 138, 138, 0.5);
    }

    span {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-image: linear-gradient(
        -225deg,
        #7F0092 0%,
        #0046A3 50%,
        #0078FF 100%
      );

      filter: blur(20px);
      z-index: -1;
      animation: animate 0.5s linear infinite;
    }

  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Spinner;