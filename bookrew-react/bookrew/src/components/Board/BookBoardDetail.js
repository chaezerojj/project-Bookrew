import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { SERVER_URL } from '../../constants';
import Loading from '../Loading/Loading';
import * as S from './BoardDetail.Style';

function BookBoardDetail() {
  const { id } = useParams();
  const [board, setBoard] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchBoard = async () => {
      try {
        const response = await fetch(SERVER_URL + `/api/bookrew/bookboard/${id}`);
        if (!response.ok) {
          throw new Error(`Http error!! Status: ${response.status}`)
        }
        const data = await response.json();
        setBoard(data);
        setTitle(data.title);
        setContent(data.content);
      } catch (error) {
        console.error("Error fetching data, ", error)
      }
    };
    fetchBoard();
  }, [id]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async () => {
    try {
      const response = await fetch(SERVER_URL + `/api/bookrew/bookboard/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, content }),
      });
      if (!response.ok) {
        throw new Error(`Http error!! Status: ${response.status}`);
      }
      const updatedBoard = await response.json();
      setBoard(updatedBoard);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating data, ", error);
    }
  };

  if (!board) {
    return <><Loading /></>;
  }

  return (
    <S.Board>
      <S.Wrapper>
        <S.ButtonWrapper>
          <Link to={'/bookrew/bookboard'}>
            <S.Button>
              ⬅ 게시판으로 돌아가기
            </S.Button>
          </Link>
        </S.ButtonWrapper>

        <S.BoardNameWrapper>
          <S.BoardName>
            📖 책 게시판 📖
          </S.BoardName>
        </S.BoardNameWrapper>

        <S.BoardDetail>
          <S.DetailWrapper>
            <S.TitleWrapper>
              <S.Top>
                <S.IdText>
                  번호
                </S.IdText>
                <S.IdData>
                  {board.id}
                </S.IdData>
                <S.TitleText>
                  제목
                </S.TitleText>
                {isEditing ? (
                  <S.InputTitle
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                ) : (
                  <S.TitleData>{board.title}</S.TitleData>
                )}
              </S.Top>
            </S.TitleWrapper>

            <S.ContentWrapper>
              {isEditing ? (
                <S.Textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              ) : (
                <S.ContentText>{board.content}</S.ContentText>
              )}
            </S.ContentWrapper>
          </S.DetailWrapper>
        </S.BoardDetail>

        {isEditing ? (
          <S.ButtonWrapper>
            <S.Button onClick={handleSaveClick}>저장</S.Button>
          </S.ButtonWrapper>
        ) : (
          <S.ButtonWrapper>
            <S.Button onClick={handleEditClick}>수정</S.Button>
          </S.ButtonWrapper>
        )}
      </S.Wrapper>
    </S.Board>
  );
}

export default BookBoardDetail;
