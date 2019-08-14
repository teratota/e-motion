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
    public function getVehiculeForUser($parametre = null)
    {
        $class = new vehicule;
        $result = $class->getinfovehiculebyUser($parametre["id"]);
        echo json_encode($result);
    }

    public function saveVehicule($parametre = null)
    {
        $vehicule = json_decode($parametre['vehicule']);
        $class = new vehicule;
        $result = $class->saveVehicule($vehicule);
        echo json_encode($result);
    }

    public function delete($parametre = null)
    {
        $class = new vehicule;
        $result = $class->delete($parametre["id"]);
        echo json_encode($result);
    }
}