import React, { useState } from 'react';
import axios from 'axios';
import { SERVER_URL } from '../../constants';
import { useNavigate } from 'react-router-dom';
import * as S from './LoginForm.Style';

function LoginForm() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const credentials = { userId, password };

    try {
      const response = await axios.post(`${SERVER_URL}/api/auth/login`, credentials);
      console.log("로그인 성공: ", response.data);
      alert("로그인되었습니다!");
      navigate('/main');
    } catch (error) {
      console.error("로그인 에러: ", error);
      if (error.response && error.response.data) {
        alert(`로그인에 실패했습니다: ${error.response.data}`);
      } else {
        alert("로그인에 실패했습니다. 다시 시도해주세요.");
      }
    }
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Wrapper>
        <S.Text>로그인</S.Text>
        <S.UserIdWrapper>
          <S.UserId>아이디</S.UserId>
          <S.Input type='text' value={userId} name='id'
          onChange={(e) => setUserId(e.target.value)} required />
        </S.UserIdWrapper>
        <S.PasswordWrapper>
          <S.Password>비밀번호</S.Password>
          <S.Input type='password' value={password} name='password'
          onChange={(e) => setPassword(e.target.value)} required />
        </S.PasswordWrapper>
        <S.ButtonWrapper>
          <S.Button type='submit'>로그인</S.Button>
        </S.ButtonWrapper>
      </S.Wrapper>
    </S.Form>
  )
}

export default LoginForm;
