<?php
require_once('config/config.php');

class user extends config
{
    function getAll(){
        try {
            $data_base=$this->connection();
            $select = $data_base->prepare("Select user.id, user.nom, user.prenom, user.anniversaire, user.npermis, user.`point` From user");
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
        
    function delete($id){
        try {
            $data_base=$this->connection();
            $delete = $data_base->prepare("DELETE FROM user WHERE id=:id ; DELETE FROM adresse WHERE id=:id");
            $delete->bindParam(':id',$id);
            $delete->execute();
            return true;
        } catch (PDOException $e) {
            return "Erreur !: " . $e->getMessage() . "<br/>";
            die();
        }
	}  
}