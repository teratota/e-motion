<?php
require "config/model.php";
class marqueController
{
    public function get($parametre = null){
        $class = new marque;
        $result = $class->getall();
        echo json_encode($result);
    }
}