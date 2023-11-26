<?php
$root = $_SERVER["DOCUMENT_ROOT"];
//include_once root."/PATINGO/database/database.php";
//include_once root."/PATINGO/database/Programme.php";

include_once "../database/database.php";
include_once "../database/Programme.php";
include_once "../database/department.php";

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


if($action=="getdepartments"){
    
    $dbo = new Database();
    $pdo = new Department();
    $result = $pdo->getAllDepartments($dbo);
    $rv = json_encode($result);
    echo($rv);
    exit();

}

if($action=="saveprogrammedetails"){
    
    $code = $_POST['code'];
    $title = $_POST['title'];
    $nos = $_POST['nos'];
    $department = $_POST['department'];
    $gl = $_POST['gl'];
    $tl = $_POST['tl'];
    $dbo = new Database();
    $pdo = new Programme();
    $rv = $pdo->createNewProgamme($dbo,$code,$title,$nos,$gl,$tl,$department); 
    echo json_encode($rv);
    exit();
}

if($action=="editprogrammedetails"){
    $id   = $_POST['pid'];
    $code = $_POST['code'];
    $title = $_POST['title'];
    $nos = $_POST['nos'];
    $department = $_POST['department'];
    $gl = $_POST['gl'];
    $tl = $_POST['tl'];
    $dbo = new Database();
    $pdo = new Programme();
    $rv = $pdo->updateProgrammeDetails($dbo,$id,$code,$title,$nos,$gl,$tl,$department); 
    echo json_encode($rv);
    exit();
}




?>

