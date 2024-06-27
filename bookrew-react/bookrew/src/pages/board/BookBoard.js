import React, { useState, useEffect } from 'react';
import { SERVER_URL } from '../../constants';
import { Link, useNavigate } from 'react-router-dom';
import * as S from './Board.Style';

function BookBoard() {
  const navigate = useNavigate();
  const [boards, setBoards] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(SERVER_URL + "/api/bookrew/bookboard"); // api 요청 보내기
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
    navigate(`/bookrew/bookboard/${id}`);
  };

  // 사용자 로그인 상태를 체크하는 함수
  useEffect(() => {
    // 여기서 사용자 로그인 여부를 체크할 수 있는 로직을 추가해야 함
    // 예를 들어, 로컬 스토리지나 쿠키 등에서 토큰을 확인하여 사용자가 로그인 상태인지 판단할 수 있음
    // 간단한 예시로 isLoggedIn을 사용하여 구현
    setIsLoggedIn(!!localStorage.getItem('token')); // 예시: 토큰이 있으면 로그인 상태로 간주
  }, []);

  // 글쓰기 버튼 클릭 시 이벤트 핸들러
  const handleWriteButtonClick = () => {
    if (!isLoggedIn) {
      // 로그인 페이지로 리다이렉트
      navigate('/login');
    } else {
      // 글쓰기 페이지로 이동
      navigate('/bookrew/bookboard/create');
    }
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
          <S.TextTitle>📖 책 게시판 📖</S.TextTitle>
        </S.TitleWrapper>
        <S.BoardWrapper>


          <S.BoardBox> {/* BoardBox */}
            <S.ButtonWrapper>
              <Link to="/bookrew/bookboard/create">
                <S.Button onClick={handleWriteButtonClick}>
                  📝글쓰기
                </S.Button>
              </Link>
            </S.ButtonWrapper>
            <S.Table>
              <S.Thead>
                <tr>
                  <S.ThNum>No.</S.ThNum>
                  <S.ThTitle>제목</S.ThTitle>
                  <S.ThUserId>작성자</S.ThUserId>
                </tr>
              </S.Thead>
              <S.Tbody>
                {boards.map((board) => (
                  <tr key={board.id} data-id={board.id} onClick={handleRowClick}>
                    <S.TdNum>{board.id}</S.TdNum>
                    <S.TdTitle>{board.title}</S.TdTitle>
                    <S.ThUserId>{board.userId}</S.ThUserId>
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

export default BookBoard;
