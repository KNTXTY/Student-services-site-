<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = "info@example.com";
    $subject = "Новий запит від $name";
    $body = "Ім'я: $name\nEmail: $email\nПовідомлення:\n$message";

    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Ваше повідомлення успішно надіслано!";
    } else {
        echo "Виникла помилка при надсиланні повідомлення.";
    }
}
?>
