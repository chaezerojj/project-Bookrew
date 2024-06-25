// 게시판 게시물 작성 폼
import React, { useState } from 'react';
import { SERVER_URL } from '../../constants';
import { useNavigate } from 'react-router-dom';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

function BoardForm({ onBoardCreated }) {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [openDialog, setOpenDialog] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newBoard = {
      title,
      content
    };

    try {
      const response = await fetch(SERVER_URL + "/api/bookrew/board", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBoard),
      });
      if (!response.ok) {
        throw new Error('Error!!')
      }
      const data = await response.json();
      if (onBoardCreated) {
        onBoardCreated(data)
      }
      setTitle('');
      setContent('');
      setOpenDialog(true);
    } catch (error) {
      console.error("Error creating Board: ", error)
    }
  };

  const handleCloseDialog = () => {
    setOpenDialog(false); // Dialog 닫기
    navigate('/bookrew/board'); // 게시판 페이지로 다시 이동
  }

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
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>게시물 등록 완료</DialogTitle>
        <DialogContent>
          <p>작성된 게시물이 성공적으로 등록되었습니다!</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} variant='contained' color='primary'>
            확인
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default BoardForm;