<?php
require_once('config/config.php');

class reservation extends config
{
    function getAll(){}

    function getHistory($id){
        try {
            $data_base=$this->connection();

            $select = $data_base->prepare("Select
            reservation.date_fin,
            reservation.date_debut,
            reservation.prix,
            reservation.facture,
            reservation.ref_id_vehicule,
            model.nom,
            marque.nom As nom1,
            vehicule.ref_id_marque As ref_id_marque1,
            couleur.nom As nom2,
            type.nom As nom3,
            vehicule.ref_id_model,
            vehicule.plaque,
            vehicule.ref_id_couleur,
            vehicule.ref_id_type,
            vehicule.img
        From
            reservation Inner Join
            vehicule On reservation.ref_id_vehicule = vehicule.id Inner Join
            model On vehicule.ref_id_model = model.id Inner Join
            marque On vehicule.ref_id_marque = marque.id
                    And model.ref_id_marque = marque.id Inner Join
            couleur On vehicule.ref_id_couleur = couleur.id Inner Join
            type On vehicule.ref_id_type = type.id
        Where
            id=:id
            ");
            
            $select->bindParam(':id',$id);
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