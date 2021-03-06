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
    
    function saveReservation($reservation,$facture)
    {
        try {
            echo $reservation->id;
            echo $reservation->vehicule->id;
            echo $reservation->datefin;
            echo $reservation->datedebut;
            echo $reservation->prix;
            echo $facture;
            $data_base=$this->connection();
            $insert = $data_base->prepare("INSERT INTO reservation (ref_id_user, ref_id_vehicule, date_fin, date_debut, prix, facture) VALUES (:user, :vehicule, :datefin, :datedebut, :prix ,:facture)");
            $insert->bindParam(':user',$reservation->id);
            $insert->bindParam(':vehicule',$reservation->vehicule->id);
            $insert->bindParam(':datefin',$reservation->datefin);
            $insert->bindParam(':datedebut',$reservation->datedebut);
            $insert->bindParam(':prix',$reservation->prix);
            $insert->bindParam(':facture',$facture);
            $insert->execute();
            return true;
        } catch (PDOException $e) {
            return "Erreur !: " . $e->getMessage() . "<br/>";
            die();
        }
    }
    
    function update(){}
        
    function delete(){} 
    
    function verifReservation($parametre,$id){
        $search = json_decode($parametre['search']);
        try {
            $data_base=$this->connection();
            $select = $data_base->prepare(" SELECT COUNT(*)
            FROM reservation
            WHERE
              (
                (date_fin < :datedebut AND :datedebut < date_fin)
                OR (date_debut < :datefin AND :datefin < date_fin)
                OR (:datedebut < date_debut AND date_debut < :datefin)
              )
              AND ref_id_vehicule=:id_vehicule");
            $select->bindParam(':datedebut',$search->datedebut);
            $select->bindParam(':datefin',$search->datefin);
            $select->bindParam(':id_vehicule',$id);
            $select->execute();
            $data=$select->fetch(PDO::FETCH_ASSOC);
            return $data;
        } catch (PDOException $e) {
            return "Erreur !: " . $e->getMessage() . "<br/>";
            die();
        }
    }

    function getUserReservation($id)
    {
        try {
            $data_base=$this->connection();
            $select = $data_base->prepare("Select
            reservation.id,
            reservation.ref_id_user,
            reservation.date_fin,
            reservation.date_debut,
            marque.nom As marque,
            model.nom As model,
            reservation.prix,
            vehicule.plaque,
            vehicule.coffre,
            vehicule.personne,
            vehicule.kilometrage,
            vehicule.prix As prix1,
            vehicule.autonomie,
            vehicule.img
            From
            reservation 
            Inner Join vehicule On reservation.ref_id_vehicule = vehicule.id 
            Inner Join marque On vehicule.ref_id_marque = marque.id
            Inner Join model On model.ref_id_marque = marque.id
            Where reservation.ref_id_user = :id_user");
            $select->bindParam(':id_user',$id);
            $select->execute();
            $data=$select->fetchAll();
            return $data;
        } catch (PDOException $e) {
            return "Erreur !: " . $e->getMessage() . "<br/>";
            die();
        }
    }

    function getVehiculeReservation($id)
    {
        try {
            $data_base=$this->connection();
            $select = $data_base->prepare(" Select
            reservation.id,
            reservation.date_fin,
            reservation.date_debut,
            marque.nom as marque,
            model.nom As model
            From
            reservation Inner Join
            vehicule On reservation.ref_id_vehicule = vehicule.id Inner Join
            marque On vehicule.ref_id_marque = marque.id Inner Join
            model On model.ref_id_marque = marque.id
            And vehicule.ref_id_model = model.id
            Where reservation.ref_id_vehicule = :id_vehicule");
            $select->bindParam(':id_vehicule',$id);
            $select->execute();
            $data=$select->fetchAll();
            return $data;
        } catch (PDOException $e) {
            return "Erreur !: " . $e->getMessage() . "<br/>";
            die();
        }
    }

    function getAllUserReservation()
    {
        try {
            $data_base=$this->connection();
            $select = $data_base->prepare("Select
            reservation.id,
            reservation.ref_id_user,
            reservation.date_fin,
            reservation.date_debut,
            marque.nom As marque,
            model.nom As model,
            reservation.prix,
            vehicule.plaque,
            vehicule.coffre,
            vehicule.personne,
            vehicule.kilometrage,
            vehicule.prix As prix1,
            vehicule.autonomie,
            vehicule.img
            From
            reservation 
            Inner Join vehicule On reservation.ref_id_vehicule = vehicule.id 
            Inner Join marque On vehicule.ref_id_marque = marque.id
            Inner Join model On model.ref_id_marque = marque.id");
            $select->execute();
            $data=$select->fetchAll();
            return $data;
        } catch (PDOException $e) {
            return "Erreur !: " . $e->getMessage() . "<br/>";
            die();
        }
    }

    function getNameUser($id)
    {
        try {
            $data_base=$this->connection();
            $select = $data_base->prepare("Select nom, prenom from user where id = :id_user");
            $select->bindParam(':id_user',$id);
            $select->execute();
            $data=$select->fetchAll();
            return $data;
        } catch (PDOException $e) {
            return "Erreur !: " . $e->getMessage() . "<br/>";
            die();
        }
    }
}