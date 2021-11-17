<?php

class login
{

    private $login;
    private $message;

    private $request;
    private $db;
    private $sql;
    private $values;
    private $result;
    private $sessionData = null;

    public function __construct()
    {


        $this->status = http_response_code();
        $this->request = $_SERVER['REQUEST_METHOD'];
        $this->request == 'GET' ? extract($_GET) : extract($_POST);


        /**
         * basic validation
         
         */




        if (!isset($password) || empty($password)) {

            $this->message = "password field should not be empty";
        } else if (!isset($email) || empty($email)) {

            $this->login = false;
            $this->message = "email field should not be empty";
        } else {
            /**
             * simple data validate
         
             */
            $email = $this->cleanData($email);
            if (!$this->verify($email, '/^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/ix')) {

                $this->message = 'Provide valid mail';
                $this->login = false;
            } else {

                $this->Login($email, $password);
            }
        }
        $this->Returnresult();
    }

    /**
     * data validation function 
         
     */

    private function verify($data, $regex)
    {

        return (!preg_match($regex, $data)) ? FALSE : TRUE;
    }

    /**
     * data cleaning  function 
         
     */

    public function cleanData($data)
    {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    private function Login($email, $password)
    {
        $this->values = array($email);


        /**
         * getting userid and email of specific user
         
         */
        $this->sql = "SELECT userID,email,password from auth where email = ?";
        $this->db = new database();
        $this->db->query_value($this->sql, $this->values);

        if ($this->db->sql_query->rowCount() > 0) {

            $this->result = $this->db->sql_query->fetchAll(PDO::FETCH_ASSOC);
            /**
             * matching password
         
             */
            if (password_verify($password, $this->result[0]['password'])) {
                $this->login = true;
                $this->message = "Login Successfull";
                $this->sessionData = array('SessionId' => session_id(), 'userId' => $this->result[0]['userID'], 'username' => $this->result[0]['email']);
                $_SESSION['authflex'] = $this->sessionData;
            } else {
                $this->login = false;
                $this->message = "Password Missmatched";
            }
        } else {
            $this->login = false;
            $this->message = "username doesn't exixst";
        }



        $this->db->close_connection();
    }

    private function Returnresult()
    {

        $this->result = array(
            "status" => $this->status,
            "login" => $this->login,
            "message" => $this->message,
            "token" => $this->sessionData,
        );
        echo json_encode($this->result);
    }
};

$login = new login();
