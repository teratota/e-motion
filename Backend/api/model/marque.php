<?php
require_once('config/config.php');

class marque extends config
{
    function getAll(){
        $listmarque = array('tesla','renault');
		return $listmarque;
	}
    
    function insert(){}
    
    function update(){}
        
    function delete(){}  
}