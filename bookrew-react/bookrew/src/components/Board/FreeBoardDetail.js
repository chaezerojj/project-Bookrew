// BoardDetail
// 게시물 상세 페이지 (게시물 내용(content))
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { SERVER_URL } from '../../constants';
import Loading from '../Loading/Loading';
import * as S from './BoardDetail.Style';

function FreeBoardDetail() {
  const { id } = useParams();
  const [board, setBoard] = useState(null);

  useEffect(() => {
    const fetchBoard = async () => {
      try {
        const response = await fetch(SERVER_URL + `/api/bookrew/freeboard/${id}`);
        if (!response.ok) {
          throw new Error(`Http error!! Status: ${response.status}`)
        }
        const data = await response.json();
        setBoard(data);
      } catch (error) {
        console.error("Error fetching data, ", error)
      }
    };
    fetchBoard();
  }, [id]);

  if (!board) {
    return <><Loading /></>;
  }

  return (
    <S.Board>
      <S.Wrapper>

        <S.ButtonWrapper>
          <Link to={'/bookrew/bookboard'}>
            <S.Button>
              게시판으로 돌아가기
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
                <S.TitleData>{board.title}</S.TitleData>
              </S.Top>
            </S.TitleWrapper>
            
            <S.ContentWrapper>
              <S.ContentText>{board.content}</S.ContentText>
            </S.ContentWrapper>
          </S.DetailWrapper>
        </S.BoardDetail>

      </S.Wrapper>
    </S.Board>
  )
}

export default FreeBoardDetail;