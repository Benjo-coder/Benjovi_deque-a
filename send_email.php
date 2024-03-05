<?php
$to = "benjodequena@gmail.com"; // Your email address
$subject = "New Contact Form Enquiry";
$message = "
Full Name: " . $_POST['full-name'] . "
Email address: " . $_POST['email-address'] . "
Mobile number: " . $_POST['mobile-number'] . "
Email Subject: " . $_POST['email-subject'] . "
Message: " . $_POST['message'];

$headers = "From: " . $_POST['email-address'] . "\r\n" .
    "Reply-To: " . $_POST['email-address'] . "\r\n" .
    "Content-Type: text/html; charset=UTF-8\r\n" .
    "X-Mailer: PHP/" . phpversion();

mail($to, $subject, $message, $headers);
?>
