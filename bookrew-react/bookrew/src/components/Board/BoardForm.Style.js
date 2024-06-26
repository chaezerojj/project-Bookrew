import { styled } from 'styled-components';
import { FormControl, MenuItem, Select } from '@mui/material';

export const BoardForm = styled.div`
  width: 100%;
  padding: 30px;
  margin: 20px auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 50px auto;
  width: 1000px;
`;

export const BoardTypeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 17px;
  width: 950px;
`;

export const BoardTypeText = styled.h3`
  margin: 5px;
  padding: 5px;
  text-align: left;
  color: rgb(50, 50, 50);
`;

export const BoardFormControl = styled(FormControl)`
  width: 170px;
  border: 1px solid rgb(200, 200, 200);
  font-size: 17px;
  background-color: rgb(255, 252, 235);
  font-family: 'Pretendard-SemiBold';
`;
  
export const BoardSelect = styled(Select)`
  height: 50px;
  `;
  
export const Option = styled(MenuItem)`
  padding: 10px;
  width: 170px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 20px;
`;

export const TitleText = styled.h3`
  margin: 5px;
  padding: 5px;
  text-align: left;
  color: rgb(50, 50, 50);
`;
  
export const InputTitle = styled.input`
  width: 900px;
  height: 35px;
  border: 1px solid rgb(200, 200, 200);
  background-color: rgb(200, 200, 200, 0.1);
  padding: 3px 20px;
  border-radius: 10px;
  font-size: 17px;
  font-family: 'Pretendard-Regular';
  &:hover {
    border: 1.5px solid rgb(100, 100, 100);
  }
  &:focus {
    outline: none;
    border: 1.5px solid rgb(100, 100, 100);
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 20px;
`;

export const ContentText = styled.h3`
  margin: 5px;
  padding: 5px;
  text-align: left;
  color: rgb(50, 50, 50);
`;

export const Textarea = styled.textarea`
  min-width: 900px;
  max-width: 900px;
  min-height: 300px;
  max-height: 300px;
  padding: 20px;
  border: 1px solid rgb(200, 200, 200);
  border-radius: 10px;
  font-size: 17px;
  font-family: 'Pretendard-Regular';
  &:hover {
    border: 1.5px solid rgb(100, 100, 100);
  }
  &:focus {
    outline: none;
    border: 1.5px solid rgb(100, 100, 100);
  }
`;


export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  padding: 20px;
  text-align: left;
  width: 900px;
`;

export const ButtonCancel = styled.button`
  width: 70px;
  border: 0.5px solid rgb(100, 100, 100, 0.2);
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  font-family: 'Pretendard-SemiBold';
  font-size: 17px;
  &:hover {
    background-color: rgb(100, 100, 100, 0.1);
  }
`;
export const ButtonSubmit = styled.button`
  width: 70px;
  background-color: ;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  font-family: 'Pretendard-SemiBold';
  font-size: 17px;
  border: 0.5px solid rgb(100, 100, 100, 0.2);
  background-color: rgb(255, 235, 130, 0.5);
  &:hover {
    background-color: rgb(255, 235, 130);
  }
`;
