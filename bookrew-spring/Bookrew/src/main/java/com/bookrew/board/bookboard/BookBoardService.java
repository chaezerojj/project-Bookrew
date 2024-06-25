package com.bookrew.board.bookboard;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BookBoardService {
	
	@Autowired
	BookBoardRepository bookBoardRepo;
	
	// 전체 데이터 가져오기
	public List<BookBoard> getAllBookBoards() {
		return bookBoardRepo.findAll();
	}
	
	// 사용자에게 입력받은 데이터를 db에 저장하기
	public BookBoard createBookBoard(BookBoard bookBoard) {
		return bookBoardRepo.save(bookBoard);
	}
	
	// 받은 id값으로 게시물 삭제
	public void deleteBookBoard(Integer id) {
		bookBoardRepo.deleteById(id);
	}
	
	// id값을 이용하여 1개의 글 가져오기
	public Optional<BookBoard> getBookBoardById(Integer id) {
		return bookBoardRepo.findById(id);
	}
	
	
	
}
