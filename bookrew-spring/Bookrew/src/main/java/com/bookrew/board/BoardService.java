package com.bookrew.board;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BoardService {
	
	@Autowired
	BoardRepository boardRepository;
	
	// 전체 데이터 가져오기
	public List<Board> getAllBoards() {
		return boardRepository.findAll();
	}
	
	// 사용자에게 입력받은 데이터를 DB에 저장 (put)
	public Board createBoard(Board board) {
		return boardRepository.save(board);
	}
	
	// 받은 id값으로 삭제(delete)
	public void deleteBoard(Integer id) {
		boardRepository.deleteById(id);
	}
	
	//id값을 이용하여 1개의 글 가져오기
	public Optional<Board> getBoardById(Integer id){
		return boardRepository.findById(id);
	}
	
}
