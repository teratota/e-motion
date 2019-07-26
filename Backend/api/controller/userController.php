<?php
require "config/model.php";
class userController
{
    public function get($parametre = null){
        $class = new user;
        $result = $class->getall();
        echo json_encode($result);
    }

    public function delete($parametre = null){
        $class = new user;
        $result = $class->delete($parametre["id"]);
        echo json_encode($result);
    }
}