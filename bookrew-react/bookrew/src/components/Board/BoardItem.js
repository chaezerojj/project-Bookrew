// BoardItem.js
// 게시물 클릭 시 상세페이지(BoardDetail.js)로 넘어감
import React from 'react';
import { Link } from 'react-router-dom';

export default function BoardItem({ board }) {
  return (
    <>
      <ul>
        <li>
          <Link to={`/board/${board.id}`}>
            <h3>{board.title}</h3>
          </Link>
        </li>
        <li>{board.content}</li>
      </ul>
    </>
  )
}
