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
            vehicule.*,
            type.nom,
            couleur.nom As couleur,
            marque.nom As marque,
            model.nom As model
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
    
    function saveVehicule($vehicule,$id)
    {
        try {
            $data_base=$this->connection();
            $insert = $data_base->prepare("INSERT INTO vehicule (ref_id_marque, ref_id_user, ref_id_model, plaque, ref_id_couleur, ref_id_type, coffre, kilometrage,  prix, autonomie, img, personne) VALUES (:ref_id_marque, :ref_id_user, :ref_id_model, :plaque, :ref_id_couleur, :ref_id_type, :coffre, :kilometrage,  :prix, :autonomie, :img, :personne)");
            $insert->bindParam(':ref_id_marque',$vehicule->marque);
            $insert->bindParam(':ref_id_user',$id);
            $insert->bindParam(':ref_id_model',$vehicule->model);
            $insert->bindParam(':plaque',$vehicule->plaque);
            $insert->bindParam(':ref_id_couleur',$vehicule->couleur);
            $insert->bindParam(':ref_id_type',$vehicule->type);
            $insert->bindParam(':coffre',$vehicule->coffre);
            $insert->bindParam(':kilometrage',$vehicule->kilometrage);
            $insert->bindParam(':prix',$vehicule->prix);
            $insert->bindParam(':autonomie',$vehicule->autonomie);
            $insert->bindParam(':img',$vehicule->img);
            $insert->bindParam(':personne',$vehicule->capaciter);
            $insert->execute();
            return true;
        } catch (PDOException $e) {
            return "Erreur !: " . $e->getMessage() . "<br/>";
            die();
        }
    }
    
    function update($vehicule,$id){
        try {
            $data_base=$this->connection();
            $update = $data_base->prepare("UPDATE vehicule SET ref_id_marque=:ref_id_marque, ref_id_model=:ref_id_model, plaque=:plaque, ref_id_couleur=:ref_id_couleur, ref_id_type=:ref_id_type, coffre=:coffre, kilometrage=:kilometrage,  prix=:prix, autonomie=:autonomie, img=:img, personne=:personne WHERE id = :id");
            $update->bindParam(':ref_id_marque',$vehicule->marque);
            $update->bindParam(':ref_id_model',$vehicule->model);
            $update->bindParam(':plaque',$vehicule->plaque);
            $update->bindParam(':ref_id_couleur',$vehicule->couleur);
            $update->bindParam(':ref_id_type',$vehicule->type);
            $update->bindParam(':coffre',$vehicule->coffre);
            $update->bindParam(':kilometrage',$vehicule->kilometrage);
            $update->bindParam(':prix',$vehicule->prix);
            $update->bindParam(':autonomie',$vehicule->autonomie);
            $update->bindParam(':img',$vehicule->img);
            $update->bindParam(':personne',$vehicule->capaciter);
            $update->bindParam(':id',$id);
            $update->execute();
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
            $delete = $data_base->prepare("DELETE FROM vehicule WHERE id=:id");
            $delete->bindParam(':id',$id);
            $delete->execute();
            return true;
        } catch (PDOException $e) {
            return "Erreur !: " . $e->getMessage() . "<br/>";
            die();
        }
    }  

}