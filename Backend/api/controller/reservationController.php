<?php
require "config/model.php";
class reservationController
{
    private function facture($reservation)
    {
        $user = new user;
        $vehicule = new vehicule;
        $user=$class->getinfouserbyid($reservation['user']);
        $vehicule=$class->getinfovehiculebyid($reservation['vehicule']);
        $facture = "<p>Facture<p><p>nom : ".$result['nom']."<p><p>prénom : ".$result['prenom']."<p>";
        $facture .= "<p>email de facturation : ".$reservation['email']."<p>";
        $facture .= "<p>date-debut reservation : ".$reservation['datedebut']."<p><p>date-fin reservation : <p>";
        $facture .= "<p>Information Véhicule<p>";
        $facture .= "<p>marque : ".$vehicule['marque']."<p> <p>model : ".$vehicule['model']."<p> <p>couleur : ".$vehicule['couleur']."<p> <p>autonomie : ".$vehicule['autonomie']."<p> <p>type : ".$vehicule['type']."<p>";
        $facture .= "<p>prix : ".$reservation['prix']."<p>";
    }
    public function getHistory($parametre = null)
    {
        $class = new reservation;
        $result = $class->getHistory($parametre['id']);
        echo json_encode($result);
    }
    public function saveReservation($parametre = null)
    {
        $reservation = json_decode($parametre['reservation']);
        $class = new reservation;
        $facture=$this->facture($reservation);
        $result = $class->saveReservation($reservation,$facture);
        echo json_encode($result);
    }
    public function prixReservation($parametre = null)
    {
        $tarifH=$parametre["prix"]%24;
        $interval=date_diff($parametre['datefin'],$parametre['datedebut']);
        $nbhour=$interval->format("%h");
        $prixtotal = $nbhour * $tarifH;
        echo json_encode($prixtotal);
    }
    /*public function vefifDateReservation($parametre = null)
    {
        $vehicule = json_decode($parametre['vehicule']);
        $class = new reservation;
            $data = $class->verifReservation($vehicule);
            if($data[0]["COUNT(*)"]>=1){
                echo json_encode(false);
            }else{
                echo json_encode(true);
            }
    }*/
    public function getUserReservation($parametre = null)
    {
        $class = new reservation;
        $data = $class->getUserReservation($parametre['id']);
        echo json_encode($data);
    }

    public function getAllUserReservation($parametre = null)
    {
        $class = new reservation;
        $data = $class->getAllUserReservation();
        echo json_encode($data);
    }
    
    public function getNameUser($parametre = null)
    {
        $class = new reservation;
        $data = $class->getNameUser($parametre['id']);
        echo json_encode($data);
    }


}