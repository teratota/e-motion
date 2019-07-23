<?php
require "config/model.php";
class modelsController
{
    public function get($parametre = null){
        $class = new model;
        $result = $class->getall($parametre['marque']);
        echo json_encode($result);
    }
}