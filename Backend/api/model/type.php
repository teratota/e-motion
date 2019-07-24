<?php
require_once('config/config.php');

class type extends config
{
    function getAll(){
        try {
            $data_base=$this->connection();
            $select = $data_base->prepare("Select type.id, type.nom From type");
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