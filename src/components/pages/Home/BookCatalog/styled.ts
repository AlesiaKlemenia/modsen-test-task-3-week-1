import styled from 'styled-components';

export const Catalog = styled.div`
  width: 97%;
  margin: 1.5rem;

  display: grid;
  align-items: center;
  justify-content: space-around;
  grid-template-columns: repeat(auto-fill, minmax(301px, 350px));
  grid-auto-rows: minmax(430px, 500px);
  grid-gap: 3rem;
`;

export const EmptyCatalog = styled.div`
  width: 0;
  height: 0;
  visibility: none;
`;
