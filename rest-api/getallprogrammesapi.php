<?php

header("Content-Type:application/json");

include_once "../database/database.php";
include_once "../database/Programme.php";
include_once "../database/department.php";


$pdo = new Database();
$pg = new Programme;


$result = $pg->getAllProgrammes($pdo);


$json_response = json_encode($result);
echo $json_response;



?>