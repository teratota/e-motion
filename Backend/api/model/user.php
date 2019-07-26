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
    
    function connexion($parametre){
        try {
            $data_base=$this->connection();
            $select = $data_base->prepare("Select COUNT(*), user.id From user WHERE mail=:mail AND password=:pass");
            $select->bindParam(':mail',$parametre['email']);
            $select->bindParam(':pass',$parametre['password']);
            $select->execute();
            $data=$select->fetchAll();
            return $data;
        } catch (PDOException $e) {
            return "Erreur !: " . $e->getMessage() . "<br/>";
            die();
        }
    }
    
    function insertToken($token, $id){
        try {
            $data_base=$this->connection();
            $insert = $data_base->prepare("INSERT INTO token (token, ref_id_user) VALUES (:token, :id)");
            $insert->bindParam(':token',$token);
            $insert->bindParam(':id',$id[0]['id']);
            $insert->execute();
            return true;
        } catch (PDOException $e) {
            return "Erreur !: " . $e->getMessage() . "<br/>";
            die();
        }
    }
}