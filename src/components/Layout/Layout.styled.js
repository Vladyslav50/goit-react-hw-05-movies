import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  padding: 20px 0 20px 0;
  -webkit-box-shadow: 0px -5px 7px -2px rgba(11, 49, 47, 1) inset;
  -moz-box-shadow: 0px -5px 7px -2px rgba(11, 49, 47, 1) inset;
  box-shadow: 0px -5px 7px -2px rgba(11, 49, 47, 1) inset;

  a {
    padding: 5px 0 1px;
    text-decoration: none;
    color: black;
    font-weight: 700;
    font-size: 20px;

    &.active {
      color: black;
      border-bottom: 4px solid #20b2aa;
    }

    &:first-child {
      margin-left: 130px;
      margin-right: 20px;
    }

    &:hover {
      color: #20b2aa;
    }
  }
`;
