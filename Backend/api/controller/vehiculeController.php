<?php
require "config/model.php";
class vehiculeController
{
    public function get($parametre = null){
        echo "test";
        $class = new vehicule;
        $result = $class->getall();
        print_r($result);
    }
}