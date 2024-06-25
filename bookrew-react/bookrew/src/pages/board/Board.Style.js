import { styled } from 'styled-components';

export const Board = styled.div`
  width: 100%;
  padding: 30px;
  margin: 20px;
`;

export const BoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 30px;
  min-width: 500px;
  max-width: 1000px;
`;

export const Tab = styled.div`
  margin: 0 auto;
  padding: 0;
  width: 100%;
`;

export const TabWrapper = styled.div`
  width: 220px;
  margin: 0 auto;
  `;
  
  export const FreeBoardTab = styled.button`
  box-shadow: 0 0 2px rgb(200, 200, 200);
  border-radius: 25px;
  font-family: 'Pretendard-SemiBold';
  font-size: 17px;
  padding: 8px 10px;
  margin: 10px auto;
  & a {
    cursor: pointer;
    padding: 0 2px;
    text-decoration: none;
    &:hover {
      font-family: 'Pretendard-Bold';
      }
    }
`;
      
export const BookBoardTab = styled.button`
  box-shadow: 0 0 1px rgb(200, 200, 200);
  border-radius: 25px;
  font-family: 'Pretendard-SemiBold';
  font-size: 17px;
  padding: 8px 10px;
  margin: 10px;
  margin-bottom: 18px;
    & a {
    cursor: pointer;
    padding: 0 2px;
    text-decoration: none;
    &:hover {
      font-family: 'Pretendard-Bold';
    }
`;

export const TitleWrapper = styled.div`
  margin: 25px auto;
  padding: 10px;
`;

export const TextTitle = styled.h1`
  margin: 5px auto;
  padding: 5px;
  text-align: center;
`;

export const BoardBox = styled.div`
  width: 100%;
  margin: 0 auto;
  font-family: 'Pretendard-SemiBold';
`;

export const Table = styled.table`
  display: flex;
  flex-direction: column;
  width: 850px;
  text-align: center;
  margin: 10px auto;
  margin-bottom: 30px;
  border-top: 1px solid rgb(200, 200, 200);
  border-bottom: 1px solid rgb(200, 200, 200);
`;

export const Thead = styled.thead`
  border-bottom: 1px solid rgb(200, 200, 200);
`;

export const ThNum = styled.th`
  text-align: center;
  padding: 15px;
  width: 100px;
`;
export const ThTitle = styled.th`
  text-align: center;
  padding: 15px;
  width: 600px;
`;
export const ThDate = styled.th`
  text-align: center;
  padding: 15px;
  width: 100px;
`;

export const Tbody = styled.tbody`
  &:hover {
    cursor: pointer;
  }
`;

export const TdNum = styled.td`
  text-align: center;
  padding: 15px;
  width: 100px;
`;

export const TdTitle = styled.td`
  text-align: center;
  padding: 15px;
  width: 600px;
`;

export const TdDate = styled.td`
  width: 100px;
  padding: 15px;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
  
export const Button = styled.button`
  font-size: 18px;
  font-family: 'Pretendard-SemiBold';
  padding: 10px 15px;
  margin: 6px;
  margin-right: 70px;
  border-radius: 30px;
  background-color: rgb(255, 235, 130, 0.5)
`;