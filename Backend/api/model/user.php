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
            $point = 10;
            $password = password_hash($user->password1, PASSWORD_DEFAULT);
            $data_base=$this->connection();
            $insert = $data_base->prepare("INSERT INTO user (nom, prenom, mail, `password`, `point`, anniversaire, telephone, npermis, ref_id_role, genre) VALUES (:nom, :prenom, :mail, :passwords, :points, :anniversaire, :telephone, :npermis, :ref_id_role, :genre)");
            $insert->bindParam(':nom',$user->lastName);
            $insert->bindParam(':prenom',$user->firstName);
            $insert->bindParam(':mail',$user->mail);
            $insert->bindParam(':passwords',$password);
            $insert->bindParam(':points',$point);
            $insert->bindParam(':anniversaire',$user->birthday);
            $insert->bindParam(':telephone',$user->phone);
            $insert->bindParam(':npermis',$user->driverLicense);
            $insert->bindParam(':ref_id_role',$role);
            $insert->bindParam(':genre',$user->gender);
            $insert->execute();
            $id = $data_base->lastInsertId(); 
            $insert = $data_base->prepare("INSERT INTO adresse (code_postal, rue, villes, pays, ref_id_user) VALUE (:code, :rue, :villes, :pays, :id)");
            $insert->bindParam(':code',$user->zip);
            $insert->bindParam(':rue',$user->adress);
            $insert->bindParam(':villes',$user->city);
            $insert->bindParam(':pays',$user->country);
            $insert->bindParam(':id',$id);
            $insert->execute();
            return true;
        } catch (PDOException $e) {
            return "Erreur !: " . $e->getMessage() . "<br/>";
            die();
        }
    }

    function update($user)
    {
        try {
            $role = 2;
            $point = 10;
            $password = password_hash($user->password1, PASSWORD_DEFAULT);
            $data_base=$this->connection();
            $insert = $data_base->prepare("UPDATE user SET nom = :nom, prenom = :prenom, mail = :mail, password = :passwords, point = :points, anniversaire = :anniversaire, telephone = :telephone, npermis = :npermis, ref_id_role = :ref_id_role, genre = :genre)");
            $insert->bindParam(':nom',$user->lastName);
            $insert->bindParam(':prenom',$user->firstName);
            $insert->bindParam(':mail',$user->mail);
            $insert->bindParam(':passwords',$password);
            $insert->bindParam(':points',$point);
            $insert->bindParam(':anniversaire',$user->birthday);
            $insert->bindParam(':telephone',$user->phone);
            $insert->bindParam(':npermis',$user->driverLicense);
            $insert->bindParam(':ref_id_role',$role);
            $insert->bindParam(':genre',$user->gender);
            $insert->execute();
            return true;
        } catch (PDOException $e) {
            return "Erreur !: " . $e->getMessage() . "<br/>";
            die();
        }
    }
        
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
    
    function insertToken($token, $id)
    {
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