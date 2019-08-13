<?php
require "config/model.php";
class userController
{
    public function get($parametre = null)
    {
        $class = new user;
        $result = $class->getall();
        echo json_encode($result);
    }

    public function delete($parametre = null)
    {
        $class = new user;
        $result = $class->delete($parametre["id"]);
        echo json_encode($result);
    }

    public function connexion($parametre = null)
    {
        $class = new user;
        $result = $class->connexion($parametre);
        if ($result[0]["COUNT(*)"] == 1) {
            $resultToken = md5(uniqid(rand(), true));
            $resultInsert = $class->insertToken($resultToken, $result);
            if ($resultInsert == true ) {
                echo json_encode($resultToken);
            }
            else {
                echo json_encode("Erreur de connection");
            }
        }
        else {
            $result = false;
            echo json_encode($result);
        }
    }

    public function insertUser(){
        $user = json_decode($parametre['user']);
        $class = new user;
        $result = $class->insert($user);
        echo json_encode($result);
    }
}