import { styled } from 'styled-components';
import mainImage from '../../assets/images/main.jpg'; // 이미지 파일 경로

export const Main = styled.div`
  width: 100%;
  margin: 40px;
  margin-top: 100px;
`;

export const Wrapper = styled.div`
  & a {
  display: flex;
  flex-directioin: column;
  text-align: center;
  }
  margin: 0 auto;
  padding: 30px;
  padding-top: 0px;
  width: 1100px;
  text-align: center;
`;

export const ImageWrapper = styled.div`
  margin: 0 auto;
  padding: 0;
`;


export const Img = styled.div`
  background-image: url(${mainImage});
  background-size: cover;
  background-position: center;
  width: 1000px;
  height: 600px;
  `;
  
export const TextWrapper = styled.div`
  text-align: center;
  margin: 0 auto;
  padding: 10px;
`;

export const MainTextTop = styled.h1`
  padding-top: 20px;
  padding-bottom: 0;
  padding-right: 20px;
  font-size: 70px;
  font-family: 'Pretendard-Bold';
  text-align: right;
  color: white;
`;

export const MainText = styled.h1`
  padding-bottom: 0;
  padding-right: 30px;
  font-size: 90px;
  color: white;
  font-style: italic;
  font-family: 'Pretendard-Bold';
  text-align: right;
`;