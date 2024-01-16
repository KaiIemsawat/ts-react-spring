package com.demo.springbootlibrary.dao;

import com.demo.springbootlibrary.enitiy.Review;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestParam;

public interface ReviewRepo extends JpaRepository<Review,Long> {
    Page<Review> findByBookId(@RequestParam("book_id") Long bookId, Pageable pageable);
//    Will create -> "href": "http://localhost:8080/api/reviews/search"
//    with -> "href": "http://localhost:8080/api/reviews/search/findByBookId{?bookId,page,size,sort}",
}
