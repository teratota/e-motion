<?php
require "config/model.php";
class couleurController
{
    public function get($parametre = null){
        $class = new couleur;
        $result = $class->getall();
        echo json_encode($result);
    }
}