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
  background-color: rgb(255, 252, 245);
  height: 5rem;
  z-index: 1000;
  `;
  
  export const Wrapper = styled.div`
  border-bottom: 0.5px solid rgb(10, 10, 10, 0.1);
  display: flex;
  align-item:: center;
  width: 1440px;
  margin: 10px auto;
  padding: 0px 40px;
`;

export const Logo = styled.h1`
  font-family: 'Pretendard-Bold';
  font-weight: 800;
  font-size: 40px;
  padding: 5px;
  & a {
    display: flex;
    text-align: center;
    color: black;
    text-decoration: none;
  }
`;

export const LogoImg = styled.img`
  width: 250px;
`;

export const Nav = styled.div`
  font-family: 'Pretendard-SemiBold';
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10rem;
  padding: 20px;
  margin-left: 250px;
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
  font-size: 20px;
`;

export const Board = styled.div`
  font-size: 20px;
`;