import styled from 'styled-components';

export const InfosForm = styled.form`
  background-color: white;

  width: 100%;
  height: 100%;
  max-width: 820px;

  @media (min-width: 768px) {
    width: 64vw;
  }

  display: flex;
  flex-direction: column;
  gap: 25px;

  padding: 24px;

  .buttons {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap-reverse;

    button {
      font-size: clamp(10px, 5vw, 15px);
    }
  }

  .input {
    width: 100%;

    input {
      height: 5vw;
      max-height: 32px;
      font-size: clamp(10px, 5vw, 15px);
    }
  }
`;
