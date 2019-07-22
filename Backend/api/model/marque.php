<?php
require_once('config/config.php');

class marque extends config
{
    function getAll(){
		$listmarque = ['tesla','renault'];
		return $listmarque;
	}
    
    function insert(){}
    
    function update(){}
        
    function delete(){}  
}