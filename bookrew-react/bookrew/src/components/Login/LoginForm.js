import React, { useState } from 'react';
import axios from 'axios';
import { SERVER_URL } from '../../constants';
import { useNavigate } from 'react-router-dom';
import * as S from './LoginForm.Style';

// ! 로그인 폼

function LoginForm() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 사용자로부터 받아야 하는 값들
    const credentials = {
      userId,
      password
    };

    try {
      const response = await axios.post(`${SERVER_URL}/api/login`, credentials);
      console.log("로그인 성공: ", response.data);
      // 로그인 성공 후 메인 페이지로 이동함
      navigate('/main');
    } catch (error) {
      // 로그인 실패 시 콘솔 에러
      console.error("Error logging in: ", error)
    }
  };

  return (
    <S.Form>
      <S.Wrapper onSubmit={handleSubmit}>

        <S.Text>로그인</S.Text>
        <S.UserIdWrapper>
          <S.UserId>아이디</S.UserId>
          <S.Input type='text' value={userId} name='id'
          onChange={(e) => setUserId(e.target.value)} />
        </S.UserIdWrapper>

        <S.PasswordWrapper>
          <S.Password>비밀번호</S.Password>
          <S.Input type='password' value={password} name='password'
          onChange={(e) => setPassword(e.target.value)} />
        </S.PasswordWrapper>

        <S.ButtonWrapper>
          <S.Button type='submit'>로그인</S.Button>
        </S.ButtonWrapper>

      </S.Wrapper>
    </S.Form>
  )
}

export default LoginForm;