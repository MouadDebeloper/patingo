<?php

require_once "database.php";


class Department {

    public function getAllDepartments($dbo) {

        $cmd = "SELECT 
            dd.id AS did,
            dd.title AS dtitle,
            dd.code AS dcode
        FROM  department_details AS dd";

        $statement = $dbo->conn->prepare($cmd);
        $statement->execute();
        $rv = $statement->fetchAll(PDO::FETCH_ASSOC);
        return $rv; 
    }
    
}

?>