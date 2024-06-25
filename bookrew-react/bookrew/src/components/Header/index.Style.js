// header style
import { styled } from 'styled-components';

export const Header = styled.header`
width: 100%;
position: sticky;
top: 0;
margin: 0;
padding: 0;
text-align: justify;
color: black;
background-color: rgb(255, 255, 255, 0.9);
border-bottom: 0.5px solid rgb(10, 10, 10, 0.1);
height: 6rem;
z-index: 1000;
`;

export const Wrapper = styled.div`
display: flex;
align-item:: center;
max-width: 1440px;
min-width: 700px;
margin: 0 auto;
padding: 0px 40px;
`;

export const Logo = styled.h1`
  font-family: 'Pretendard-Bold';
  font-weight: 800;
  display: flex;
  width: 20%;
  justify-content: flex-start;
  font-size: 40px;
  margin-left: 25px;
  
  & a {
    color: black;
    text-decoration: none;
  }
`;

export const Nav = styled.div`
  font-family: 'Pretendard-SemiBold';
  display: flex;
  align-items: center;
  margin: 0 auto;
  margin-left: 10px;
  justify-content: center;
  gap: 10rem;

  & a {
    cursor: pointer;
    border-radius: 2rem;
    padding: 0 1rem;
    color: rgb(70, 70, 70);
    text-decoration: none;
    font-weight: 500;
    &:hover {
      font-family: 'Pretendard-Bold';
      color: rgb(0, 0, 0);
      }
      }
      `;

export const Booklist = styled.div`
  font-size: 22px;
      
`;

export const Board = styled.div`
  font-size: 22px;
      
`;