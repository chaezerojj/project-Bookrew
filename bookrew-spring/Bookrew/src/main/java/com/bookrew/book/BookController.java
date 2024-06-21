package com.bookrew.book;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/bookrew/books")
public class BookController {
	
	@Autowired
	private BookService bookService;
	
	@GetMapping(value = "/list")
	// ResponseEntity 
	// - HTTP 응답을 나타내는 객체
	// - REST API를 통해 프론트엔드와 데이터를 교환할때,
	//   JSON 형식 데이터를 직접 반환하기 위해서 사용
	public ResponseEntity<List<Book>> getAllBooks() {
		List<Book> books = bookService.getAllBooks();
		return ResponseEntity.ok(books);
	}
	
	// 사용자에게 입력받은 책 정보를 db에 저장
	@PostMapping
	public ResponseEntity<Book> putBook(@RequestBody Book book) {
		Book newBook = bookService.saveBook(book);
		return ResponseEntity.status(HttpStatus.CREATED).body(newBook);
	}
	
	// 받은 id값으로 책 삭제하기
	@DeleteMapping(value ="/{id}")
	// @PathVariable 어노테이션으로 id 변수값 받아옴
	public ResponseEntity<Void> deleteBook(@PathVariable Long id) {
		bookService.deleteBook(id);
		return ResponseEntity.noContent().build();
	}
	
	// id값으로 하나의 책 정보 가져오기
	@GetMapping(value = "/{id}")
	public ResponseEntity<Book> getBookById(@PathVariable Long id) {
		Optional<Book> book = bookService.getBookById(id);
		return book.map(ResponseEntity::ok) // book 존재하면 '200 ok' 응답 생성
					.orElse(ResponseEntity.notFound().build()); // book 객체 비어있으면 404
	}
	
}
