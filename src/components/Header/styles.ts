import styled from 'styled-components';

export const Container = styled.header`
  
  background: var(--gray);
  margin: 0rem 2rem 0rem 2rem ;
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 0rem 1rem 0rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  button {
   font-size: 1rem;
   background: var(--gray);
   border: 0;
   padding: 0 2rem;
   border-radius: 0.25rem;
   height: 3rem;

   transition: filter 0.2s;

   &:hover {
    filter: brightness(0.9);
   }
  }
`;

