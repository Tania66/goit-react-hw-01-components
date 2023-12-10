import styled from "@emotion/styled";


export const Container = styled.div`
 padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  background: radial-gradient(
    189.32% 190.93% at 59.76% -23.42%,
    #4f2ee8 18.03%,
    #fff 100%
  );
  border: 2px solid #000;
  box-shadow: 0px 10px 10px 0px rgba(245, 245, 247, 0.1);
`;



export const Description = styled.div`
display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 18px;
  border: 2px solid #f6f6f6;
  background: #202024;
  padding-bottom: 15px;
  padding-top: 15px;
  margin-bottom: 20px;
`;


export const Avatar = styled.img`
  display: block;
  height: auto;
  width: 320px;
  margin-bottom: 15px;
`;


export const Info = styled.p`
 color: #fff;
`;


export const List = styled.ul`
 display: flex;
  justify-content: space-between;
  list-style: none;
  align-items: center;
  gap: 20px;
  margin: 0 auto;
  border-radius: 18px;
  border: 2px solid #f6f6f6;
  background: #202024;
  padding: 15px;

`;


export const Label = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
  color: #fff;
`;


export const Quantity = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;