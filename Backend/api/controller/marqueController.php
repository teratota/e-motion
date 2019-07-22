<?php
require "config/model.php";
class marqueController
{
    public function get($parametre = null){
        echo "test";
        $class = new marque;
        $result = $class->getall();
        print_r($result);
    }
}