<?php
require "config/model.php";
class reservationController
{
    public function getHistory($parametre = null){
        $class = new reservation;
        $result = $class->getHistory($parametre['id']);
        echo json_encode($result);
    }

}