<?php
require_once('config/config.php');

class user extends config
{
    function getAll()
    {
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
    
    function insert($user)
    {
        try {
            $role = 2;
            $data_base=$this->connection();
            $insert = $data_base->prepare("INSERT INTO user (nom, prenom, mail, password, point, anniversaire, telephone, npermis, ref_id_role) VALUES (:token, :id)");
            $insert->bindParam(':nom',$role);
            $insert->bindParam(':prenom',$id[0]['id']);
            $insert->bindParam(':mail',$id[0]['id']);
            $insert->bindParam(':password',$id[0]['id']);
            $insert->bindParam(':point',$id[0]['id']);
            $insert->bindParam(':anniversaire',$id[0]['id']);
            $insert->bindParam(':telephone',$id[0]['id']);
            $insert->bindParam(':npermis',$id[0]['id']);
            $insert->bindParam(':ref_id_role',$role);
            $insert->execute();
            return true;
        } catch (PDOException $e) {
            return "Erreur !: " . $e->getMessage() . "<br/>";
            die();
        }
    }
    
    function update(){}
        
    function delete($id)
    {
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
    
    function connexion($parametre)
    {
        try {
            $data_base=$this->connection();
            $select = $data_base->prepare("Select COUNT(*), user.id, user.password From user WHERE mail=:mail");
            $select->bindParam(':mail',$parametre['email']);
            $select->execute();
            $data = $select->fetch(PDO::FETCH_ASSOC);
            return $data;
        } catch (PDOException $e) {
            return "Erreur !: " . $e->getMessage() . "<br/>";
            die();
        }
    }
    
    function insertToken($token, $id)
    {
        try {
            $data_base=$this->connection();
            $insert = $data_base->prepare("INSERT INTO token (token, ref_id_user) VALUES (:token, :id)");
            $insert->bindParam(':token',$token);
            $insert->bindParam(':id',$id['id']);
            $insert->execute();
            return true;
        } catch (PDOException $e) {
            return "Erreur !: " . $e->getMessage() . "<br/>";
            die();
        }
    }

    function getinfouserbyid($user)
    {
        try {
            $data_base=$this->connection();
            $select = $data_base->prepare("Select user.id, user.nom, user.prenom, user.anniversaire, user.npermis, user.point From user Where user.id = :id");
            $select->bindParam(':id',$user);
            $select->execute();
            $data=$select->fetch(PDO::FETCH_ASSOC);
            return $data;
        } catch (PDOException $e) {
            return "Erreur !: " . $e->getMessage() . "<br/>";
            die();
        }
    }
}