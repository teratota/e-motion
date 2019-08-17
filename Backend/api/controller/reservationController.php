<?php
require "config/model.php";
class reservationController
{
    private function facture($reservation)
    {
        $user = new user;
        $vehicule = new vehicule;
        $user=$user->getinfouserbyid($reservation->id);
        $vehicule=$vehicule->getinfovehiculebyid($reservation->vehicule->id);
        $facture = "<p>Facture<p><p>nom : ".$user['nom']."<p><p>prénom : ".$user['prenom']."<p>";
        $facture .= "<p>email de facturation : ".$reservation->email."<p>";
        $facture .= "<p>date-debut reservation : ".$reservation->datedebut."<p><p>date-fin reservation : <p>";
        $facture .= "<p>Information Véhicule<p>";
        $facture .= "<p>marque : ".$vehicule['marque']."<p> <p>model : ".$vehicule['model']."<p> <p>couleur : ".$vehicule['couleur']."<p> <p>autonomie : ".$vehicule['autonomie']."<p> <p>type : ".$vehicule['type']."<p>";
        $facture .= "<p>prix : ".$reservation->prix."<p>";
        return $facture;
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
        $datedebut = new DateTime($reservation->datedebut);
        $reservation->datedebut=$datedebut->format('Y-m-d H:i:s');
        $datefin = new DateTime($reservation->datefin);
        $reservation->datefin=$datefin->format('Y-m-d H:i:s');
        $class = new reservation;
        $facture=$this->facture($reservation);
        $result = $class->saveReservation($reservation,$facture);
        echo json_encode($result);
    }
    public function prixReservation($parametre = null)
    {
        $datedebut = new DateTime($parametre['datedebut']);
        $datefin = new DateTime($parametre['datefin']);
        $tarifH=$parametre["prix"]/24;
        $interval = $datedebut->diff($datefin);
        $nbhour=$interval->days*24 + $interval->h;
        $prixtotal = $nbhour * $tarifH;
        echo json_encode(round($prixtotal,2));
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