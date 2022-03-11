<?php

// __DIR__-> restituisce il percorso alla cartella che contiene questo file
// ../ torna su nella cartella di un livello
require __DIR__ . '/../vendor/autoload.php';

// Per comprendere questo percorso, apri il file 
// - vendor/phpmailer/phpmailer/src/PHPMailer.php
// Analizza il namespace: è PHPMailer\PHPMailer
// L'ultima ripetizione (PHPMailer) è il nome della classe, che si trova
// per l'appunto all'interno del namespace
use PHPMailer\PHPMailer\{ Exception, PHPMailer, SMTP };

$mail = new PHPMailer(true);

$mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
$mail->isSMTP();                                            //Send using SMTP
$mail->Host       = 'smtp.gmail.com';                      //Set the SMTP server to send through
$mail->SMTPAuth   = true;                                   //Enable SMTP authentication
$mail->Username   = 'lucads94de@gmail.com';                 //SMTP username
$mail->Password   = 'secret';                       //SMTP password
$mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
$mail->Port       = 587;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

$mail->setFrom($_POST["from"]);
$mail->addAddress($_POST["to"]);
$mail->Subject = 'Here is the subject';
$mail->Body    = $_POST["message"];

try {
    $mail->send();  
} catch(Exception $e) {
    var_dump($e);
}

