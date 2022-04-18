<?php
    $email_to ="dkanesal3@gmail.com";
    $subject = "simple emails with pfp";
    $message = "this was sent with script";
    $headers = "from: ur mom"

    if(mail($email_to, $subject, $message, $headers))
        echo 'sent message';
    else
        echo 'not sent'
    header("Location: index.html");

?>