import styled from "styled-components";

export const Container = styled.div`
 margin: 20px 0;
  border-radius: 16px;
  border: 2px solid #4f2ee8;
  background: #ffff;
  padding: 20px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Item = styled.li`
 position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  background-color: #f6f6f6;
  width: 50%;
  height: 50%;
  border-radius: 20px;
  padding: 10px;
  border: 3px solid #f3ff2f;
  box-shadow: 0px 4px 46px 0px rgba(0, 0, 0, 0.05);
`;

export const Online = styled.span`
  position: absolute;
  top: 31px;
  left: 61px;
  border-radius: 50px;
  width: 10px;
  height: 10px;
  background-color: green;
`;


export const Ofline = styled.span`
   position: absolute;
  top: 31px;
  left: 61px;
  border-radius: 50px;
  width: 10px;
  height: 10px;
  background-color: red;
`;

export const Avatar = styled.img`

`;