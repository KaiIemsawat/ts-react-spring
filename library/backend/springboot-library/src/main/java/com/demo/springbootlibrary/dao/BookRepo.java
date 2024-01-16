package com.demo.springbootlibrary.dao;

import com.demo.springbootlibrary.enitiy.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RequestParam;

public interface BookRepo extends JpaRepository<Book, Long> {

    Page<Book> findByTitleContaining(@RequestParam("title") String title, Pageable pageable);
//    Will create '"search": {"href": "http://localhost:8080/api/books/search"}' in JSON
//    With    "http://localhost:8080/api/books/search/findByTitleContaining{?title,page,size,sort}"

    Page<Book> findByCategory(@RequestParam("category") String category, Pageable pageable);
//    With     "http://localhost:8080/api/books/search/findByCategory{?category,page,size,sort}"
}
