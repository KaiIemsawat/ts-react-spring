package com.demo.springbootlibrary.dao;

import com.demo.springbootlibrary.enitiy.Book;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookRepo extends JpaRepository<Book, Long> {

}
