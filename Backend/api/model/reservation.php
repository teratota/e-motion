<?php
require_once('config/config.php');

class reservation extends config
{
    function getAll(){}
    
    function insert(){}
    
    function update(){}
        
    function delete(){} 
    
    function verifReservation($parametre,$id){
        $search = json_decode($parametre['search']);
        try {
            $data_base=$this->connection();
            $select = $data_base->prepare(" SELECT COUNT(*)
            FROM reservation
            WHERE
              (
                (date_fin < :datedebut AND :datedebut < date_fin)
                OR (date_debut < :datefin AND :datefin < date_fin)
                OR (:datedebut < date_debut AND date_debut < :datefin)
              )
              AND id = :id_vehicule");
            $select->bindParam(':datedebut',$search->datedebut);
            $select->bindParam(':datefin',$search->datefin);
            $select->bindParam(':id_vehicule',$id);
            $select->execute();
            $data=$select->fetchAll();
            return $data;
        } catch (PDOException $e) {
            return "Erreur !: " . $e->getMessage() . "<br/>";
            die();
        }
    }
}