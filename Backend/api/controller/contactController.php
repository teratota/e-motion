<?php

require "config/model.php";

class contactController
{
    function contactMail($mail){
        var_dump($mail);
        echo $mail['mail'];
        echo $mail['name'];
        echo $mail['content'];

        $to = "emotion@example.com";
        $subject = "Demande de contact de ". $mail['name'] ;
        $txt = $mail['content'];
        $headers = "From: ". $mail['mail'];
        mail($to,$subject,$txt,$headers);
    }
}