<?php

require "config/model.php";

class contactController
{
    function contactMail($mail){
        $to = "emotion@example.com";
        $subject = "Demande de contact de ". $mail['name'] ;
        $txt = $mail['content'];
        $headers = "From: ". $mail['mail'];
        mail($to,$subject,$txt,$headers);
    }
}