<?php
require_once('config/config.php');

class vehicule extends config
{
    function getAll(){
        try {
            $data_base=$this->connection();
            $select = $data_base->prepare("Select model.nom, marque.nom As nom1, vehicule.prix, vehicule.img, vehicule.autonomie From vehicule Inner Join model On vehicule.ref_id_model = model.id Inner Join marque On vehicule.ref_id_marque = marque.");
            $select->execute();
            $data=$select->fetchAll();
            return $data;
        } catch (PDOException $e) {
            return "Erreur !: " . $e->getMessage() . "<br/>";
            die();
        }
	}
    
    function insert(){}
    
    function update(){}
        
    function delete(){}  
}