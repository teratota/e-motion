<?php

class config
{
    function connection(){
        $user='bvc';
        $pass="bxcv";
        try {
            $data_base = new PDO('mysql:host=12254555;port=07;dbname=dfg', $user, $pass);
        } catch (PDOException $e) {
            print "Erreur !: " . $e->getMessage() . "<br/>";
        die();
        }
        return $data_base;
    }
    
    function mail($name){
        $data_base=$this->connection();
        $req = $data_base->prepare('SELECT nom, prenom, email, id FROM user WHERE id_role = :role');
        $req->bindValue(':role',1);
        $req->execute();
        $data=$req->fetchAll();
        $to = "organization@example.com";
        $subject = "New conference";
        $txt = "La conference ".$name." à ete créer";
        $headers = "organization@example.com" . "\r\n" . "BCC: ";
        foreach($data as $value){
                $headers.=$value['email'].",";
        }
        mail($to,$subject,$txt,$headers);
    }
}
