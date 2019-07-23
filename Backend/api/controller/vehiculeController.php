<?php
require "config/model.php";
class vehiculeController
{
    public function get($parametre = null){
        $class = new vehicule;
        $result = $class->getall();
        print_r($result);
    }
}