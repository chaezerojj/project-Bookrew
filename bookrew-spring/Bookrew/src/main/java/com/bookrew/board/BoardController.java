package com.bookrew.board;

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
@RequestMapping("/api/bookrew/board")
public class BoardController {
	
	@Autowired
	private BoardService boardService;
	
	@GetMapping
	public ResponseEntity<List<Board>> getAllBoards() {
		List<Board> boards = boardService.getAllBoards();
		return ResponseEntity.ok(boards);
	}
	
	// 입력받은 글을 db에 저장
	@PostMapping(value = "/create")
	public ResponseEntity<Board> createBoard(@RequestBody Board board) {
		Board newBoard = boardService.createBoard(board);
		return ResponseEntity.status(HttpStatus.CREATED).body(newBoard);
	}
	
	// id값으로 글 삭제하기
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> deleteBoard(@PathVariable Integer id) {
		boardService.deleteBoard(id);
		return ResponseEntity.noContent().build();
	}
	
	// id값으로 하나의 글 보기
	@GetMapping(value = "/{id}")
	public ResponseEntity<Board> getBoardById(@PathVariable Integer id) {
		Optional<Board> board = boardService.getBoardById(id);
		return board.map(ResponseEntity::ok)
					.orElse(ResponseEntity.notFound().build());
	}
	
	// 글 수정하기
	@PutMapping("/{id}")
	public ResponseEntity<Board> updateBoard(@PathVariable Integer id, @RequestBody Board updatedBoard) {
		Optional<Board> optionalBoard = boardService.getBoardById(id);
		if (optionalBoard.isPresent()) {
			Board board = optionalBoard.get();
			board.setTitle(updatedBoard.getTitle());
			// 필요한 필드 업데이트
			Board savedBoard = boardService.createBoard(board);
			return ResponseEntity.ok(savedBoard);
		} else {
			return ResponseEntity.notFound().build();
		}
	}
	
	
	
	
	
	
	
	
}
