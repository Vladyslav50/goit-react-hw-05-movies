import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  gap: 50px;
  justify-content: center;
  margin: 0 0 20px;
  padding: 10px 0;
  width: 100%;
  background-color: rgb(175, 174, 174);

  .button {
    padding: 5px 11px;
    display: inline-block;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    outline: none;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .button:hover {
    background-color: #20b2aa;
    color: #fff;
  }

  .input {
    display: inline-block;
    width: 400px;
    font: inherit;
    font-size: 18px;
    padding: 5px 11px;
    border-radius: 5px;
    border: none;
    outline: none;
  }

  .input::placeholder {
    font: inherit;
    font-size: 17px;
  }
`;
