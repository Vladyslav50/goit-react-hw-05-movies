import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  width: 1280px;
  padding-right: 24px;
  padding-left: 24px;
  margin: 0 auto;
  list-style: none;

  .movie-item {
    width: calc((100% - 80px) / 5);
    border-radius: 4px;
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);

    > a {
      text-decoration: none;
    }
  }
  .movie-item:hover {
    scale: 1.03;
  }

  .movie-img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 4px 4px 0 0;
  }

  .title {
    padding: 0 5px;
    font-weight: 500;
    color: #010101;
  }
`;
