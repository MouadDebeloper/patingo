<?php

require_once "database.php";
require_once "programme.php";
require_once "department.php";

$dbo = new Database();
$pdo = new Programme();
$dd = new Department();

/*

$result = $dd->getAllDepartments($dbo);

print_r($result);

echo("<br><br><br>");
echo("------------------------------------------");
echo("<br><br><br>");
*/



$result = $pdo->getAllProgrammes($dbo);

print_r($result);

echo("<br><br><br>");
echo("------------------------------------------");
echo("<br><br><br>");


//$result = $pdo->updateProgrammeDetails($dbo,1,"SMA","STHA",3,"SM","SA",1);

/*

$result = $pdo->getAllProgrammes($dbo);

print_r($result);

echo("<br><br><br>");
echo("------------------------------------------");
echo("<br><br><br>");

*/





/* getting programme by using programme id 

$result = $pdo->getProgrammesDetailsById($dbo,2);

$result = $pdo->getProgrammesDetailsByCode($dbo,"AMATH");
$result = $pdo->

print_r($result);

*/







/*
$result = $pdo->createNewProgamme($dbo,"PHYSIQUE","CHIMIE-D",5,"EF","CHM",2);

//echo($result);


$result = $pdo->getAllProgrammes($dbo);

print_r($result);
*/





?>