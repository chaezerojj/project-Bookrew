package com.bookrew.board.bookboard;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/bookrew/bookboard")
public class BookBoardController {
	
	@Autowired
	private BookBoardService bookBoardService;
	
	@GetMapping
	public ResponseEntity<List<BookBoard>> getAllBookBoards() {
		List<BookBoard> bookBoards = bookBoardService.getAllBookBoards();
		return ResponseEntity.ok(bookBoards);
	}
	
	// 입력받은 글 저장
	@PostMapping
	public ResponseEntity<BookBoard> createBookBoard(@RequestBody BookBoard bookBoard) {
		BookBoard newBookBoard = bookBoardService.createBookBoard(bookBoard);
		return ResponseEntity.status(HttpStatus.CREATED).body(newBookBoard);
	}
	
	// id값으로 글 삭제
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> deleteBookBoard(@PathVariable Integer id) {
		bookBoardService.deleteBookBoard(id);
		return ResponseEntity.noContent().build();
	}
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<BookBoard> getBookBoardById(@PathVariable Integer id) {
		Optional<BookBoard> bookBoard = bookBoardService.getBookBoardById(id);
		return bookBoard.map(ResponseEntity::ok)
				.orElse(ResponseEntity.notFound().build());
	}
	
	// 글 수정
	@PutMapping(value = "/{id}")
	public ResponseEntity<BookBoard> updateBookBoard(@PathVariable Integer id, @RequestBody BookBoard updatedBookBoard) {
		Optional<BookBoard> optionalBookBoard = bookBoardService.getBookBoardById(id);
		if (optionalBookBoard.isPresent()) {
			BookBoard bookBoard = optionalBookBoard.get();
			bookBoard.setTitle(updatedBookBoard.getTitle());
			// 필요한 필드 업데이트
			BookBoard savedBoard = bookBoardService.createBookBoard(bookBoard);
			return ResponseEntity.ok(savedBoard);
		} else {
			return ResponseEntity.notFound().build();
		}
	}
	
}
