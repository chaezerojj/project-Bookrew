import { styled } from 'styled-components';

export const Board = styled.div`
  width: 100%;
  padding: 40px;
  margin: 40px;
  `;

export const Tab = styled.div`
  margin: 0 auto;
  padding: 0;
  width: 850px;
`;
  
export const TabWrapper = styled.div`
  width: 220px;
  display: flex;
  flex-direction: row;
  margin: 10px auto;
  padding: 10px;
`;
  
export const FreeBoardTab = styled.button`
  box-shadow: 0 0 2px rgb(200, 200, 200);
  border-radius: 25px;
  font-family: 'Pretendard-SemiBold';
  font-size: 18px;
  padding: 8px 10px;
  margin: 10px auto;
  &:hover {
    font-family: 'Pretendard-Bold';
    background-color: rgb(255, 235, 130, 0.5);
    }
  & a {
    cursor: pointer;
    padding: 0 2px;
    text-decoration: none;
    }
`;
      
export const BookBoardTab = styled.button`
  box-shadow: 0 0 2px rgb(200, 200, 200);
  border-radius: 25px;
  font-family: 'Pretendard-SemiBold';
  font-size: 18px;
  padding: 8px 10px;
  margin: 10px auto;
  &:hover {
    font-family: 'Pretendard-Bold';
    background-color: rgb(255, 235, 130, 0.5);
    }
  & a {
    cursor: pointer;
    padding: 0 2px;
    text-decoration: none;
    }
`;

export const TitleWrapper = styled.div`
  margin: 25px auto;
  padding: 10px;
  width: 850px;
`;

export const TextTitle = styled.h1`
  margin: 5px auto;
  padding: 5px;
  text-align: center;
`;

export const BoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 30px;
  padding-top: 0px;
  width: 850px;
`;

export const BoardBox = styled.div`
  width: 850px;
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
export const ThUserId = styled.th`
  text-align: center;
  padding: 15px;
  width: 100px;
`;

export const Tbody = styled.tbody`
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
  &:hover {
    cursor: pointer;
    background-color: rgb(200, 200, 200, 0.1);
  }
`;

export const TdDate = styled.td`
  width: 100px;
  padding: 15px;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 10px auto;
  padding: 10px;
`;
  
export const Button = styled.button`
  font-size: 18px;
  font-family: 'Pretendard-SemiBold';
  padding: 10px 15px;
  margin: 6px;
  margin-right: 10px;
  border-radius: 10px;
  background-color: rgb(255, 235, 130, 0.5);
  border: 0.5px solid rgb(100, 100, 100, 0.2);
`;