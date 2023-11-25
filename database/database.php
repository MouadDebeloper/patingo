<?php

class Database {

    private $servername = "localhost";
    private $username = "root";
    private $password = "";
    private $dbname = "studentmanagement"; // Replace with your actual database name
    public $conn = '';

    public function __construct() {

        try {
            
            $this->conn = new PDO("mysql:host=$this->servername;dbname=$this->dbname", $this->username, $this->password);
            // set the PDO error mode to exception
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        } catch (PDOException $e) {
            echo "Connection failed: " . $e->getMessage();
        }

    }

}
