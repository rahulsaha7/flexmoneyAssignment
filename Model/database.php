<?php



class database
{
    private $conn;
    public $sql_query;
    public $result;
    function __construct()
    {

        $this->db_connect();
    }
    function db_connect()
    {
        try {

            /**
             * Connection to data 
         
             */

            $this->conn = new PDO("mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . "", DB_USER, DB_PASS);


            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            echo 'Something went wrong, please connect with the adminsitrator';
        }
    }

    /**
     * function to run sql  without any parameter
         
     */

    function query($sql)
    {
        try {
            $this->sql_query = $this->conn->prepare($sql);
            $this->sql_query->execute();
        } catch (PDOException $e) {
            echo "oops ! looks like something went wrong";
        }
    }


    /**
     * function to run sql  with  parameter
         
     */

    function query_value($sql, $values)
    {


        try {
            $this->sql_query = $this->conn->prepare($sql);

            for ($i = 0; $i < count($values); $i++) {
                $this->sql_query->bindParam($i + 1, $values[$i], PDO::PARAM_STR);
            }



            if ($this->sql_query->execute()) {
                $this->result = true;
            } else {
                $this->result = false;
            }
        } catch (PDOException $e) {
            echo "oops ! looks like something went wrong";
        }
    }


    function close_connection()
    {
        $this->conn = null;
    }
};
