import { styled } from 'styled-components';

export const Board = styled.div`
  width: 100%;
  padding: 40px;
  margin: 40px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 30px;
  padding-top: 0px;
  width: 850px;
`;

export const ButtonWrapper = styled.div`
  width: 850px;
  margin: 10px auto;
  padding: 10px;
`;

export const Button = styled.button`
  font-size: 14px;
  padding: 8px 10px;
  margin: 10px auto;
  margin-left: 20px;
  text-align: left;
  border: 1px solid rgb(200, 200, 200);
  border-radius: 10px;
  &:hover {
    background-color: rgb(100, 100, 100, 0.1);
    font-family: 'Pretendard-SemiBold';
  }
`;

export const BoardNameWrapper = styled.div`
  margin: 25px auto;
  padding: 10px;
  width: 850px;
`;

export const BoardName = styled.h1`
  margin: 5px auto;
  padding: 5px;
  text-align: center;
`;

export const BoardDetail = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 30px;
  padding-top: 0px;
  width: 850px;
`;

export const DetailWrapper = styled.div`
  width: 850px;
  margin: 0 auto;
  font-family: 'Pretendard-SemiBold';
  background-color: rgb(255, 255, 255, 0.7);
`;

export const TitleWrapper = styled.div`
  margin: 5px auto;
  padding: 15px;
  padding-top: 0px;
  color: rgb(50, 50, 50);
`;

export const Top = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
  border-bottom: 1px solid rgb(200, 200, 200);
`;

export const IdText = styled.h3`
  width: 100px;
  text-align: center;
  border-right: 1px solid rgb(200, 200, 200);
`;

export const IdData = styled.h3`
  width: 100px;
  text-align: center;
`;

export const TitleText = styled.h3`
  width: 100px;
  text-align: center;
  border-right: 1px solid rgb(200, 200, 200);
`;

export const TitleData = styled.h3`
  width: 500px;
  margin-left: 20px;
  text-align: left;
  font-size: 17px;
  font-family: 'Pretendard-Regular';
`;

export const InputTitle = styled.input`
  width: 500px;
  margin-left: 20px;
  text-align: left;
  font-size: 17px;
  font-family: 'Pretendard-Regular';
  border: 1px solid rgb(200, 200, 200);
  border-radius: 10px;
  padding: 5px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 20px;
`;

export const ContentText = styled.div`
  height: 300px;
  padding: 20px;
  border: 1px solid rgb(200, 200, 200);
  border-radius: 10px;
  font-size: 17px;
  font-family: 'Pretendard-Regular';
`;

export const Textarea = styled.textarea`
  height: 300px;
  padding: 20px;
  border: 1px solid rgb(200, 200, 200);
  border-radius: 10px;
  font-size: 17px;
  font-family: 'Pretendard-Regular';
`;
