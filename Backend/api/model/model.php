<?php
require_once('config/config.php');

class model extends config
{
    function getAll($marque){
        try {
            $data_base=$this->connection();
            $select = $data_base->prepare("Select model.id, model.nom From model where ref_id_marque = :marque");
            $select->bindParam(':marque',$marque);
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