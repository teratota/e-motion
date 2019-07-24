<?php
require "config/model.php";
class vehiculeController
{
    public function get($parametre = null)
    {
        $search = json_decode($parametre['search']);
        
        $class = new vehicule;
        $result = $class->getall($search);

        if($search->datedebut!="" && $search->datefin!="" && count($result)!=0 ){
            $class = new reservation;
            foreach($result as $key => $value){
                $data = $class->verifReservation($parametre,$value["id"]);
                if($data[0]["COUNT(*)"]>=1){
                    array_splice($result,$key);
                }
            }  
        }
        echo json_encode($result);
    }
}