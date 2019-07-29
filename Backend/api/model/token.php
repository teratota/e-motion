<?php
require_once('config/config.php');

class token extends config
{
    function verifconnectionuser($parametre)
    {
        try {
            $data_base=$this->connection();
            $select = $data_base->prepare("Select COUNT(*) From token WHERE token=:token");
            $select->bindParam(':token',$parametre['token']);
            $select->execute();
            $data=$select->fetchAll();
            return $data;
        } catch (PDOException $e) {
            return "Erreur !: " . $e->getMessage() . "<br/>";
            die();
        }
    }

    function verifconnectionadmin($parametre)
    {
        try {
            $data_base=$this->connection();
            $select = $data_base->prepare("Select COUNT(*) From token Inner Join
            user On token.ref_id_user = user.id  WHERE token.token=:token and user.role = :role");
            $select->bindParam(':token',$parametre['token']);
            $select->bindParam(':role',1);
            $select->execute();
            $data=$select->fetchAll();
            return $data;
        } catch (PDOException $e) {
            return "Erreur !: " . $e->getMessage() . "<br/>";
            die();
        }
    }
}