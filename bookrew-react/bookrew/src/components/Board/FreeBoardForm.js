// 예시: BookBoardForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { SERVER_URL } from '../../constants';
import { useNavigate } from 'react-router-dom';

function FreeBoardForm() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newBoard = {
      title,
      content
    };

    try {
      const response = await axios.post(`${SERVER_URL}/api/bookrew/freeboard`, newBoard);
      console.log("Response from server:", response.data);
      setTitle('');
      setContent('');
      navigate('/bookrew/freeboard'); // 성공적으로 등록 후 다시 돌아감
    } catch (error) {
      console.error("Error creating Board: ", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            제목:
            <input
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            내용:
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </label>
        </div>
        <button type='submit'>작성</button>
      </form>
    </div>
  );
}

export default FreeBoardForm;
