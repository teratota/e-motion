<?php
require_once('config/config.php');

class marque extends config
{
    function getAll(){
        try {
            $data_base=$this->connection();
            $select = $data_base->prepare("Select marque.id, marque.nom From marque");
            $select->execute();
            $data=$select->fetchAll();
            return $data;
        } catch (PDOException $e) {
            return "Erreur !: " . $e->getMessage() . "<br/>";
            die();
        }
	}
}