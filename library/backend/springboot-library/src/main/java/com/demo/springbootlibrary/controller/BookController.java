package com.demo.springbootlibrary.controller;

import com.demo.springbootlibrary.enitiy.Book;
import com.demo.springbootlibrary.service.BookService;
import com.demo.springbootlibrary.utils.ExtractJWT;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("http://localhost:3000")
@RestController
@RequestMapping("/api/books")
public class BookController {

    private BookService bookService;

    @Autowired
    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping("/secure/currentLoans/count")
    public int currentLoansCount(@RequestHeader(value = "Authorization") String token) {
        String userEmail = ExtractJWT.payloadJwtExtraction(token, "\"sub\"");
        return bookService.currentLoanCount(userEmail);
    }

    @GetMapping("/secure/isCheckout/byUser")
    public Boolean checkoutBookByUser(
            @RequestHeader(value = "Authorization") String token,
            @RequestParam Long bookId
    ) {
        String userEmail = ExtractJWT.payloadJwtExtraction(token, "\"sub\"");
        return bookService.checkoutBookByUser(userEmail, bookId);
    }

    @PutMapping("/secure/checkout")
    public Book checkoutBook(
            @RequestHeader(value = "Authorization") String token,
            @RequestParam Long bookId
    ) throws Exception {
        String userEmail = ExtractJWT.payloadJwtExtraction(token, "\"sub\"");
        return bookService.checkoutBook(userEmail, bookId);
    }
}
