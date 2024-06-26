import React, { useState, useEffect } from 'react';
import { SERVER_URL } from '../../constants';
import BookBoardForm from '../../components/Board/BookBoardForm';
import { Link, useNavigate } from 'react-router-dom';
import * as S from './Board.Style';

function FreeBoard() {
  const navigate = useNavigate();
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(SERVER_URL + "/api/bookrew/freeboard"); // api 요청 보내기
        if (!response.ok) {
          throw new Error(`Http error!! status: ${response.status}`);
        }
        const data = await response.json();
        // console.log("data", data);
        setBoards(data);
      } catch (error) {
        console.error("error fetching data: ", error);
      }
    };
    fetchData();
  }, []); // 빈 배열 -> 컴포넌트가 마운트될 때 한 번만 실행되도록 함

  // 게시물 제목 클릭 시 상세페이지(제목+내용)
  const handleRowClick = (e) => {
    const id = e.currentTarget.getAttribute('data-id');
    navigate(`/bookrew/freeboard/${id}`);
  };

  return (
    <>
      <S.Board>

        <S.Tab>
          <S.TabWrapper>
            <S.FreeBoardTab>
              <Link to={'/bookrew/bookboard'}>
                책 게시판
              </Link>
            </S.FreeBoardTab>
            <S.BookBoardTab>
              <Link to={'/bookrew/freeboard'}>
                자유게시판
              </Link>
            </S.BookBoardTab>
          </S.TabWrapper>
        </S.Tab>

        <S.TitleWrapper>
          <S.TextTitle>💬 자유 게시판 💬</S.TextTitle>
        </S.TitleWrapper>

        <S.BoardWrapper>
          <S.BoardBox> {/* BoardBox */}
            <S.ButtonWrapper>
              <Link to="/bookrew/freeboard/create">
                <S.Button>
                  📝글쓰기
                </S.Button>
              </Link>
            </S.ButtonWrapper>
            <S.Table>
              <S.Thead>
                <tr>
                  <S.ThNum>No.</S.ThNum>
                  <S.ThTitle>제목</S.ThTitle>
                  <S.ThDate>작성일자</S.ThDate>
                </tr>
              </S.Thead>
              <S.Tbody>
                {boards.map((board) => (
                  <tr key={board.id} data-id={board.id} onClick={handleRowClick}>
                    <S.TdNum>{board.id}</S.TdNum>
                    <S.TdTitle>{board.title}</S.TdTitle>
                    <S.TdDate>{board.date}</S.TdDate>
                  </tr>
                ))}
              </S.Tbody>
            </S.Table>
          </S.BoardBox>
        </S.BoardWrapper>

      </S.Board>
    </>
  );
}

export default FreeBoard;
