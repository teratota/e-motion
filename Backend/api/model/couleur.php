<?php
require_once('config/config.php');

class couleur extends config
{
    function getAll(){
        try {
            $data_base=$this->connection();
            $select = $data_base->prepare("Select couleur.id, couleur.nom From couleur");
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