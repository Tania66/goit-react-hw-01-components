import styled from "@emotion/styled";


export const Section = styled.ul`
border: 2px solid #000;
  background: radial-gradient(
    189.32% 190.93% at 59.76% -23.42%,
    #4f2ee8 18.03%,
    #fff 100%
  );
  margin-top: 30px;
  margin-bottom: 30px;
  border-radius: 16px;
  padding: 20px;

`;


export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  list-style: none;
`;

export const Item = styled.li`
 display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  border-radius: 18px;
  border: 2px solid #fff;
  background: #202024;
  padding: 12px;
`;


export const Title = styled.h2`
  text-align: center;
  -webkit-text-stroke: 1px #ffffff;
  font-size: 30px;
`;


export const Label = styled.span`
 color: #fff;
`;


export const Percentage = styled.span`
  text-align: center;
  color: #fff;
`;