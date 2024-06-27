import React, { useState } from 'react';
import axios from 'axios';
import { SERVER_URL } from '../../constants';
import { useNavigate } from 'react-router-dom';
import * as S from './BoardForm.Style';
import MenuItem from '@mui/material/MenuItem';

function BoardForm({ defaultBoardType }) {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [boardType, setBoardType] = useState(defaultBoardType);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newBoard = {
      title,
      content
    };

    try {
      const response = await axios.post(`${SERVER_URL}/api/bookrew/${boardType}`, newBoard);
      console.log("Response from server:", response.data);
      setTitle('');
      setContent('');
      navigate(`/bookrew/${boardType}`); // 성공적으로 등록 후 다시 돌아감
    } catch (error) {
      console.error("Error creating Board: ", error);
    }
  };


  return (
    <S.BoardForm>
      <S.Form onSubmit={handleSubmit}>

        <S.BoardTypeWrapper>
          <S.BoardTypeText>
            게시판 종류
          </S.BoardTypeText>
          <S.BoardFormControl>
            <S.BoardSelect
              value={boardType}
              onChange={(e) => setBoardType(e.target.value)}
            >
              <MenuItem value="freeboard">
                자유게시판
              </MenuItem>
              <MenuItem value="bookboard">
                책 게시판
              </MenuItem>
            </S.BoardSelect>
          </S.BoardFormControl>
        </S.BoardTypeWrapper>

        <S.TitleWrapper>
          <S.TitleText>
            제목
          </S.TitleText>
          <S.InputTitle
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </S.TitleWrapper>

        <S.ContentWrapper>
          <S.ContentText>
            본문
          </S.ContentText>
          <S.Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </S.ContentWrapper>

        <S.ButtonWrapper>
          <S.ButtonCancel type='button' onClick={() => navigate(`/bookrew/${defaultBoardType}`)}>취소</S.ButtonCancel>
          <S.ButtonSubmit type='submit'>등록</S.ButtonSubmit>
        </S.ButtonWrapper>

      </S.Form>
    </S.BoardForm>
  );
}

export default BoardForm;
