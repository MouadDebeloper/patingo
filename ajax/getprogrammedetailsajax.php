<?php
$root = $_SERVER["DOCUMENT_ROOT"];
//include_once root."/PATINGO/database/database.php";
//include_once root."/PATINGO/database/Programme.php";

include_once "../database/database.php";
include_once "../database/Programme.php";

$p = $_POST["a"];
$q = $_POST["b"];
$action = $_POST["action1"];

if($action=="getprogrammedetails"){
    
    $dbo = new Database();
    $pdo = new Programme();

    $result = $pdo->getAllProgrammes($dbo);
    $rv = json_encode($result);
    echo($rv);
    exit();
    
}

?>

