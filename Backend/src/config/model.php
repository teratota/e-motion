<?php

$list_model=scandir("../model");
foreach($list_model as $value){
    if($value != "." && $value != ".."){
        require_once("../model/".$value);
    }
}

