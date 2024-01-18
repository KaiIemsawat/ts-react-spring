package com.demo.springbootlibrary.service;

import com.demo.springbootlibrary.dao.BookRepo;
import com.demo.springbootlibrary.dao.CheckoutRepo;
import com.demo.springbootlibrary.enitiy.Book;
import com.demo.springbootlibrary.enitiy.Checkout;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.Optional;

@Service
@Transactional
public class BookService {

    private BookRepo bookRepo;

    private CheckoutRepo checkoutRepo;

    public BookService(BookRepo bookRepo, CheckoutRepo checkoutRepo) {
        this.bookRepo = bookRepo;
        this.checkoutRepo = checkoutRepo;
    }

    public Book checkoutBook (String userEmail, Long bookId) throws Exception {
        Optional<Book> book = bookRepo.findById(bookId);

        Checkout validateCheckout = checkoutRepo.findByUserEmailAndBookId(userEmail, bookId);

        if (!book.isPresent() || validateCheckout != null || book.get().getCopiesAvailable() <= 0 ) {
            throw new Exception("Book doesn't exist or already checked out by user");
        }

        book.get().setCopiesAvailable(book.get().getCopiesAvailable() -1);

        bookRepo.save(book.get());

        Checkout checkout = new Checkout(
                userEmail,
                LocalDate.now().toString(),
                LocalDate.now().plusDays(7).toString(),
                book.get().getId()
        );

        checkoutRepo.save(checkout);

        return book.get();
    }
}
