<?php
require "config/model.php";
class tokenController
{
    public function verifconnectionuser ($parametre = null){
        $class = new token;
        $result = $class->verifconnectionuser($parametre);
        if($result[0]['COUNT(*)']==1){
            $result=true;
        }else{
            $result=false;
        }
        echo json_encode($result);
    }

    public function verifconnectionadmin ($parametre = null){
        $class = new token;
        $result = $class->verifconnectionadmin($parametre);
        if($result[0]['COUNT(*)']==1){
            $result=true;
        }else{
            $result=false;
        }
        echo json_encode($result);
    }
}