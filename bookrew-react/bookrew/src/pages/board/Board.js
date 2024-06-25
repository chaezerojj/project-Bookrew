import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { SERVER_URL } from '../../constants';
import BoardForm from '../../components/Board/BoardForm';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import * as S from './Board.Style';

function Board() {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(SERVER_URL + "/api/bookrew/board"); // api 요청 보내기
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


  const columns = [
    { field: "id", headerName: "No.", width: 100},
    { field: "title", headerName: "제목", width: 250},
  ];

  return (
    <>
      <div>
        <h1>게시판</h1>
        <S.Button>
          <Link to="/bookrew/board/create">글쓰기</Link>
        </S.Button>
        <DataGrid
          title="게시판"
          columns={columns}
          rows={boards}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5},
            },
          }}
          pageSizeOptions={[5, 10]} 
          />
      </div>
    </>
  );
}

export default Board;
