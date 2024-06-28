import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { SERVER_URL } from '../../constants';
import Loading from '../Loading/Loading';
import * as S from './BoardDetail.Style';

function FreeBoardDetail() {
  const { id } = useParams();
  const [board, setBoard] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBoard = async () => {
      try {
        const response = await fetch(SERVER_URL + `/api/bookrew/freeboard/${id}`);
        if (!response.ok) {
          throw new Error(`Http error!! Status: ${response.status}`);
        }
        const data = await response.json();
        setBoard(data);
        setTitle(data.title);
        setContent(data.content);
      } catch (error) {
        console.error("Error fetching data, ", error);
      }
    };
    fetchBoard();
  }, [id]);

  // 게시물 수정
  const handleEditClick = () => {
    setIsEditing(true);
  };

  // 게시물 저장
  const handleSaveClick = async () => {
    try {
      const response = await fetch(SERVER_URL + `/api/bookrew/freeboard/${id}`, {
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

  // 게시물 삭제
  const handleDeleteClick = async () => {
    if (window.confirm("게시물을 삭제하시겠습니까?")) {
      try {
        const response = await fetch(SERVER_URL + `/api/bookrew/freeboard/${id}`, {
          method: 'DELETE',
        });
        if (!response.ok) {
          throw new Error(`Http error!! Status: ${response.status}`);
        }
        alert("게시물이 삭제되었습니다.");
        navigate('/bookrew/freeboard');
      } catch (error) {
        console.error("Error deleting data, ", error);
        alert("게시물 삭제 중 오류가 발생했습니다.");
      }
    }
  };

  if (!board) {
    return <><Loading /></>;
  }

  return (
    <S.Board>
      <S.Wrapper>
        <S.ButtonWrapper>
          <Link to={'/bookrew/freeboard'}>
            <S.Button>
              ⬅ 게시판으로 돌아가기
            </S.Button>
          </Link>
        </S.ButtonWrapper>

        <S.BoardNameWrapper>
          <S.BoardName>
            💬 자유 게시판 💬
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

        <S.ButtonWrapper>
          {isEditing ? (
            <S.Button onClick={handleSaveClick}>저장</S.Button>
          ) : (
            <S.Button onClick={handleEditClick}>수정</S.Button>
          )}
          <S.Button onClick={handleDeleteClick}>삭제</S.Button>
        </S.ButtonWrapper>
      </S.Wrapper>
    </S.Board>
  );
}

export default FreeBoardDetail;
