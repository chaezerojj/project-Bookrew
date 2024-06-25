package com.bookrew.board.freeboard;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class FreeBoardService {
	
	@Autowired
	FreeBoardRepository freeBoardRepo;
	
	// 전체 데이터 가져오기
	public List<FreeBoard> getAllFreeBoards() {
		return freeBoardRepo.findAll();
	}
	
	// 사용자에게 입력받은 데이터를 db에 저장
	public FreeBoard createFreeBoard(FreeBoard freeBoard) {
		return freeBoardRepo.save(freeBoard);
	}
	
	// 받은 id값 삭제
	public void deleteFreeBoard(Integer id) {
		freeBoardRepo.deleteById(id);
	}
	
	// id값으로 1개의 글 가져오기
	public Optional<FreeBoard> getFreeBoardById(Integer id) {
		return freeBoardRepo.findById(id);
	}
	
	
}
