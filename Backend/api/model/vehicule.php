<?php
require_once('config/config.php');

class vehicule extends config
{
    function getAll($search){
        try {
            $request = "Select
            marque.nom as marque,
            model.nom as model,
            vehicule.prix,
            vehicule.autonomie,
            vehicule.id,
            vehicule.img
        From
            vehicule Inner Join
            marque On vehicule.ref_id_marque = marque.id Inner Join
            model On model.ref_id_marque = marque.id
                    And vehicule.ref_id_model = model.id
            Where ";
            if($search->type!=""){
                $request.= "vehicule.ref_id_type = :type";
            }
            if($search->marque!=""){
                $request.= " And vehicule.ref_id_marque = :marque";
            }
            if($search->model=""){
                $request.= " And vehicule.ref_id_model = :model";
            }
            if($search->couleur!=""){
                $request.= " And vehicule.ref_id_couleur = :couleur";
            }
            $data_base=$this->connection();
            $select = $data_base->prepare($request);
            if($search->type!=""){
                $select->bindParam(':type',$search->type);
            }
            if($search->marque!=""){
                $select->bindParam(':marque',$search->marque);
            }
            if($search->model!=""){
                $select->bindParam(':model',$search->model);
            }
            if($search->couleur!=""){
                $select->bindParam(':couleur',$search->couleur);
            }
            $select->execute();
            $data=$select->fetchAll();
            return $data;
        } catch (PDOException $e) {
            return "Erreur !: " . $e->getMessage() . "<br/>";
            die();
        }
    }
    
    function getinfovehiculebyid($vehicule)
    {
        try {
            $data_base=$this->connection();
            $select = $data_base->prepare("Select
            vehicule.id,
            type.nom,
            couleur.nom As couleur,
            marque.nom As marque,
            model.nom As model,
            vehicule.autonomie
            From
            vehicule Inner Join
            type On vehicule.ref_id_type = type.id Inner Join
            couleur On vehicule.ref_id_couleur = couleur.id Inner Join
            marque On vehicule.ref_id_marque = marque.id Inner Join
            model On model.ref_id_marque = marque.id
                    And vehicule.ref_id_model = model.id 
            Where vehicule.id = :id");
            $select->bindParam(':id',$vehicule);
            $select->execute();
            $data=$select->fetch(PDO::FETCH_ASSOC);
            return $data;
        } catch (PDOException $e) {
            return "Erreur !: " . $e->getMessage() . "<br/>";
            die();
        }
    }

    function getinfovehiculebyUser($user)
    {
        try {
            $data_base=$this->connection();
            $select = $data_base->prepare("Select
            vehicule.id,
            type.nom,
            couleur.nom As couleur,
            marque.nom As marque,
            model.nom As model,
            vehicule.autonomie
            From
            vehicule Inner Join
            type On vehicule.ref_id_type = type.id Inner Join
            couleur On vehicule.ref_id_couleur = couleur.id Inner Join
            marque On vehicule.ref_id_marque = marque.id Inner Join
            model On model.ref_id_marque = marque.id
                    And vehicule.ref_id_model = model.id 
            Where vehicule.ref_id_user = :id");
            $select->bindParam(':id',$user);
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