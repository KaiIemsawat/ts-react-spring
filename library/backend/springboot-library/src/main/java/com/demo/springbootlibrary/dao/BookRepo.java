package com.demo.springbootlibrary.dao;

import com.demo.springbootlibrary.enitiy.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RequestParam;

public interface BookRepo extends JpaRepository<Book, Long> {

//    Will create '"search": {"href": "http://localhost:8080/api/books/search"}' in JSON
    Page<Book> findByTitleContaining(@RequestParam("title") String title, Pageable pageable);
}
