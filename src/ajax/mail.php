<?php
    $email = $_POST['email'];
    $message = $_POST['message'];

    $subject = "=?utf-8?B?" . base64_encode("Contact us -  Tali Light") . "?=";
    $message = "Name: " . $email . "\r\n Message: " . $message . "\r\n";
    $headers = "From: $email\r\nReply-to: $email\r\nContent-Type: text/plain; charset=utf-8\r\n";

    $success = mail("talilight111@gmail.com", $subject, $message, $headers);
    echo $success;