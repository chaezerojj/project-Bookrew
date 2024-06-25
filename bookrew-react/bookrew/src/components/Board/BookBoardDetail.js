// BoardDetail
// 게시물 상세 페이지 (게시물 내용(content))
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { SERVER_URL } from '../../constants';
import Loading from '../Loading/Loading';

function BookBoardDetail() {
  const { id } = useParams();
  const [board, setBoard] = useState(null);

  useEffect(() => {
    const fetchBoard = async () => {
      try {
        const response = await fetch(SERVER_URL + `/api/bookrew/bookboard/${id}`);
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
    <>
      <div>
        <h2>{board.title}</h2>
        <p>{board.content}</p>
      </div>
    </>
  )
}

export default BookBoardDetail;