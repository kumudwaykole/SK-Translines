<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to_email = "hr@sktranslines.com"; // Replace with your email address
    $subject = "New form submission";
    $message = "Name: " . $_POST['fullname'] . "\nEmail: " . $_POST['email'] . "\nMessage: " . $_POST['message'];

    if (mail($to_email, $subject, $message)) {
        echo "Email sent successfully!";
    } else {
        echo "Failed to send email. Please try again.";
    }
}
?>
