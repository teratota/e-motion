<?php
require "config/model.php";
require "vendor/autoload.php";
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

    public function stripe($parametre = null)
    {
       
        try {
                // Set your secret key: remember to change this to your live secret key in production
            // See your keys here: https://dashboard.stripe.com/account/apikeys
            \Stripe\Stripe::setApiKey('sk_test_zTwDALADRVBwfWUoCsapcNGb005ulh5P9d');
            // Token is created using Checkout or Elements!
            // Get the payment token ID submitted by the form:
                echo $parametre['token'];
            $token = json_decode($parametre['token']);
            $charge = \Stripe\Charge::create([
                'amount' => 999,
                'currency' => 'eur',
                'description' => 'Example charge',
                'source' => $parametre['token']
            ]);
          } catch(\Stripe\Error\Card $e) {
            // Since it's a decline, \Stripe\Error\Card will be caught
            $body = $e->getJsonBody();
            $err  = $body['error'];
          
            print('Status is:' . $e->getHttpStatus() . "\n");
            print('Type is:' . $err['type'] . "\n");
            print('Code is:' . $err['code'] . "\n");
            // param is '' in this case
            print('Param is:' . $err['param'] . "\n");
            print('Message is:' . $err['message'] . "\n");
          } catch (\Stripe\Error\RateLimit $e) {
            // Too many requests made to the API too quickly
          } catch (\Stripe\Error\InvalidRequest $e) {
            // Invalid parameters were supplied to Stripe's API
          } catch (\Stripe\Error\Authentication $e) {
            // Authentication with Stripe's API failed
            // (maybe you changed API keys recently)
          } catch (\Stripe\Error\ApiConnection $e) {
            // Network communication with Stripe failed
          } catch (\Stripe\Error\Base $e) {
            // Display a very generic error to the user, and maybe send
            // yourself an email
          } catch (Exception $e) {
            // Something else happened, completely unrelated to Stripe
          }
          echo json_encode(true);
    }


}