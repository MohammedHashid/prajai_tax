<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $website = $_POST['web'];
    $message = $_POST['message'];

    $mail = new PHPMailer(true);

    try {
        // SMTP Settings
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;

        // YOUR EMAIL
        $mail->Username = 'yourgmail@gmail.com';
        $mail->Password = 'your_app_password';

        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // Sender & Receiver
        $mail->setFrom($email, $name);
        $mail->addAddress('info@prajai.com');

        // Content
        $mail->isHTML(true);
        $mail->Subject = 'New Contact Form Submission';

        $mail->Body = "
        <h3>New Contact Message</h3>
        <p><b>Name:</b> $name</p>
        <p><b>Phone:</b> $phone</p>
        <p><b>Email:</b> $email</p>
        <p><b>Website:</b> $website</p>
        <p><b>Message:</b><br>$message</p>
        ";

        $mail->send();
        echo "success";

    } catch (Exception $e) {
        echo "error";
    }
}
?>