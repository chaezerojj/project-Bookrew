package com.bookrew.board.freeboard;

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
@RequestMapping("/api/bookrew/freeboard")
public class FreeBoardController{
	
	@Autowired
	private FreeBoardService freeBoardService;
	
	@GetMapping
	public ResponseEntity<List<FreeBoard>> getAllFreeBoards() {
		List<FreeBoard> freeBoards = freeBoardService.getAllFreeBoards();
		return ResponseEntity.ok(freeBoards);
	}
	
	@PostMapping
	public ResponseEntity<FreeBoard> createFreeBoard(@RequestBody FreeBoard freeBoard) {
		FreeBoard newFreeBoard = freeBoardService.createFreeBoard(freeBoard);
		return ResponseEntity.status(HttpStatus.CREATED).body(newFreeBoard);
	}
	
	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Void> deleteFreeBoard(@PathVariable Integer id) {
		freeBoardService.deleteFreeBoard(id);
		return ResponseEntity.noContent().build();
	}
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<FreeBoard> getFreeBoardById(@PathVariable Integer id) {
		Optional<FreeBoard> freeBoard = freeBoardService.getFreeBoardById(id);
		return freeBoard.map(ResponseEntity::ok)
				.orElse(ResponseEntity.notFound().build());
	}
	
	@PutMapping(value = "/{id}")
	public ResponseEntity<FreeBoard> updateFreeBoard(@PathVariable Integer id, @RequestBody FreeBoard updatedFreeBoard) {
		Optional<FreeBoard> optionalFreeBoard = freeBoardService.getFreeBoardById(id);
		if (optionalFreeBoard.isPresent()) {
			FreeBoard freeBoard = optionalFreeBoard.get();
			freeBoard.setTitle(updatedFreeBoard.getTitle());
			// 필요한 필드 업데이트
			FreeBoard savedFreeBoard = freeBoardService.createFreeBoard(freeBoard);
			return ResponseEntity.ok(savedFreeBoard);
		} else {
			return ResponseEntity.notFound().build();
		}
	}
	
	
	
	
	
	
	
	
	
	
}
