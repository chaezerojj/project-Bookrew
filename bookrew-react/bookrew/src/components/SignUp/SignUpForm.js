import React, { useState } from 'react';
import axios from 'axios';
import { SERVER_URL } from '../../constants';
import { useNavigate } from 'react-router-dom';
import * as S from './SignUpForm.Style'

// ! 회원가입 폼

function SignUpForm() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      userId,
      password,
      name,
      email
    };

    try {
      // 회원가입 요청 보내기
      const response = await axios.post(`${SERVER_URL}/api/auth/signup`, newUser);
      console.log("회원가입 성공: ", response.data);
      navigate('/login', { replace: true });
    } catch (error) {
      console.error("회원가입 에러: ", error);

      if (error.response && error.response.data) {
        alert("이미 존재하는 사용자입니다.");
        console.log("이미 존재하는 사용자입니다.");
        resetForm();
      } else {
        alert("회원가입에 실패했습니다. 다시 시도해주세요.");
      }
    }
  };

  const resetForm = () => {
    setUserId('');
    setPassword('');
    setName('');
    setEmail('');
  };

  return (
    <S.Form>
      <S.Wrapper>

        <S.Text>🎉 회원가입 🎉</S.Text>
        <S.UserIdWrapper>
          <S.UserId>아이디</S.UserId>
            <S.Input type='text' value={userId} name='userId'
            onChange={(e) => setUserId(e.target.value)} required />
        </S.UserIdWrapper>

        <S.PasswordWrapper>
          <S.Password>비밀번호</S.Password>
            <S.Input type='password' value={password} name='password'
            onChange={(e) => setPassword(e.target.value)} required />
        </S.PasswordWrapper>
        
        <S.NameWrapper>
          <S.Name>이름</S.Name>
            <S.Input type='text' value={name} name='name'
            onChange={(e) => setName(e.target.value)} required />
        </S.NameWrapper>

        <S.EmailWrapper>
          <S.Email>이메일</S.Email>
            <S.Input type='email' value={email} name='email'
            onChange={(e) => setEmail(e.target.value)} required />
        </S.EmailWrapper>
        
        <S.ButtonWrapper>
          <S.Button type='submit' onClick={handleSubmit}>회원가입</S.Button>
        </S.ButtonWrapper>

      </S.Wrapper>
    </S.Form>
  );
}

export default SignUpForm;
