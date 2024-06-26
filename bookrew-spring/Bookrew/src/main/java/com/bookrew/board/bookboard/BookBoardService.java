package com.bookrew.board.bookboard;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookBoardService {

    @Autowired
    private BookBoardRepository bookBoardRepository;

    public List<BookBoard> getAllBookBoards() {
        return bookBoardRepository.findAll();
    }

    public BookBoard createBookBoard(BookBoard bookBoard) {
        return bookBoardRepository.save(bookBoard);
    }

    public void deleteBookBoard(Integer id) {
        bookBoardRepository.deleteById(id);
    }

    public Optional<BookBoard> getBookBoardById(Integer id) {
        return bookBoardRepository.findById(id);
    }

    public BookBoard updateBookBoard(BookBoard bookBoard) {
        return bookBoardRepository.save(bookBoard);
    }
}
