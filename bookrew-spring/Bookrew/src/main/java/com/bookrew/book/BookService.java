package com.bookrew.book;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BookService {
	
	@Autowired
	BookRepository bookRepository;
	
	// 전체 책 목록 가져오기 (get)
	public List<Book> getAllBooks() {
		return bookRepository.findAll();
	}
	
	// 사용자에게 입력받은 책 정보를 db에 저장
	public Book saveBook(Book book) {
		return bookRepository.save(book);
	}
	
	// 받은 id값으로 책 삭제하기
	public void deleteBook(Long id) {
		bookRepository.deleteById(id);
	}
	
	// id값을 이용하여 1개의 책 정보를 가져오기
	public Optional<Book> getBookById(Long id) {
		return bookRepository.findById(id);
	}
	
	// 책 수정 업데이트
    public Book updateBook(Long id, Book updatedBook) {
        Optional<Book> optionalBook = bookRepository.findById(id);
        if (optionalBook.isPresent()) {
            Book book = optionalBook.get();
            book.setTitle(updatedBook.getTitle());
            book.setAuthor(updatedBook.getAuthor());
            book.setPublisher(updatedBook.getPublisher());
            book.setCategory(updatedBook.getCategory());
            // 필요한 다른 필드 업데이트
            return bookRepository.save(book);
        } else {
            throw new RuntimeException("Book not found with id: " + id);
        }
    }
}
