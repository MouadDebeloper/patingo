<?php

require_once "database.php";

class Programme {

    public function getAllProgrammes($dbo) {

        $cmd = "SELECT 
            pd.id AS pid,
            pd.code AS pcode,
            pd.title AS ptitle,
            pd.np_of_sem AS nos,
            pd.graduation_level AS gl,
            pd.technical_level AS tl,
            pd.department_id AS did,
            dd.title AS dtitle,
            dd.code AS dcode
        FROM programme_details AS pd
        JOIN department_details AS dd ON pd.department_id = dd.id";

        $statement = $dbo->conn->prepare($cmd);
        $statement->execute();
        $rv = $statement->fetchAll(PDO::FETCH_ASSOC);
        return $rv; 
    }

    public function createNewProgamme($dbo, $code, $title, $nos, $gl, $tl, $did) {
        $cmd = "INSERT INTO programme_details
            (title, code, np_of_sem, graduation_level, technical_level, department_id)
            VALUES
            (:title, :code, :np_of_sem, :graduation_level, :technical_level, :department_id)";
    
        try {
            $statement = $dbo->conn->prepare($cmd);
            $statement->execute([
                "title" => $title,
                "code" => $code,
                "np_of_sem" => $nos,
                "graduation_level" => $gl,
                "technical_level" => $tl,
                "department_id" => $did ,
            ]);
        } catch (Exception $e) {
            echo $e->getMessage(); // Using getMessage() to get the error message.
        }
    }
        
    public function getProgrammesDetailsById($dbo,$pid){

        $cmd = "SELECT 
        pd.id AS pid,
        pd.code AS pcode,
        pd.title AS ptitle,
        pd.np_of_sem AS nos,
        pd.graduation_level AS gl,
        pd.technical_level AS tl,
        pd.department_id AS did,
        dd.title AS dtitle,
        dd.code AS dcode
        FROM programme_details AS pd
        JOIN department_details AS dd ON pd.department_id = dd.id AND pd.id = :id ";

        $statement = $dbo->conn->prepare($cmd);
        $statement->execute([":id"=>$pid]);
        $rv = $statement->fetchAll(PDO::FETCH_ASSOC);
        return $rv; 


    }


    public function getProgrammesDetailsByCode($dbo,$code){

        $cmd = "SELECT 
        pd.id AS pid,
        pd.code AS pcode,
        pd.title AS ptitle,
        pd.np_of_sem AS nos,
        pd.graduation_level AS gl,
        pd.technical_level AS tl,
        pd.department_id AS did,
        dd.title AS dtitle,
        dd.code AS dcode
        FROM programme_details AS pd
        JOIN department_details AS dd ON pd.department_id = dd.id AND pd.code = :code ";

        $statement = $dbo->conn->prepare($cmd);
        $statement->execute([":code"=>$code]);
        $rv = $statement->fetchAll(PDO::FETCH_ASSOC);
        return $rv;     


    }

  
    public function updateProgrammeDetails($dbo, $id) {
        $cmd = "UPDATE programme_details 
                SET
                code = :code,
                title = :title,
                np_of_sem = :np_of_sem,
                graduation_level = :graduation_level,
                technical_level = :technical_level,
                department_id = :department_id
                WHERE id = :id";
    
        try {
            
            $statement = $dbo->conn->prepare($cmd);
            $statement->execute([
                ":code" => $code,
                ":title" => $title,
                ":np_of_sem" => $nos,
                ":graduation_level" => $gl,
                ":technical_level" => $tl,
                ":department_id" => $did,
                ":id" => $id
            ]);
    
            // Assuming you want to return something upon successful execution
            
            return 1;
        } catch (Exception $ee) {
            // Handle the exception or return an error code
            return 0;
        }
    }

    public function deleteProgramme($dbo,$pid){
        $cmd = "DELETE FROM programme_details
        WHERE id = :id";
        try {
            
            $statement = $dbo->conn->prepare($cmd);
            $statement->execute([
                ":id" => $pid
            ]);
            // Assuming you want to return something upon successful execution
            return 1;
        } catch (Exception $ee) {
            // Handle the exception or return an error code
            return 0;
        }
    }
    
}
?>