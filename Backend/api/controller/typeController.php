<?php
require "config/model.php";
class typeController
{
    public function get($parametre = null){
        $class = new type;
        $result = $class->getall();
        echo json_encode($result);
    }
}