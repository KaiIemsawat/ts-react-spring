package com.demo.springbootlibrary.dao;

import com.demo.springbootlibrary.enitiy.Checkout;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CheckoutRepo extends JpaRepository<Checkout, Long> {

    Checkout findByUserEmailAndBookId(String userEmail, Long bookId);
}
