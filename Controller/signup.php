<?php


class Signup
{

    private $data;

    private $message;
    private $request;
    private $db;
    private $sql;
    private $values;
    private $result;
    private $sessionData = null;
    private $id;
    public $date;

    public function __construct()
    {

        $this->status = http_response_code();
        $this->request = $_SERVER['REQUEST_METHOD'];

        $this->request == 'GET' ? extract($_GET) : extract($_POST);


        /**
         * Adding simple validation to check data
         
         */






        if (!isset($email) || empty($email)) {
            $this->data = false;

            $this->message = 'Email field shold not be empty';
        } else if (!isset($phone) || empty($phone)) {
            $this->error = true;

            $this->message = 'phone field shold not be empty';
        } else if (!isset($password) || empty($password)) {

            $this->data = false;
            $this->message = 'Password field  shold not be empty';
        } else if (!isset($password) || empty($password)) {

            $this->message = 'Password field  shold not be empty';
            $this->data = false;
        } else if (!isset($age) || empty($age)) {
            $this->data = false;

            $this->message = 'age should not be empty';
        } else if ($age < 18 || $age > 65) {

            $this->data = false;
            $this->message = 'age should be in 18-65 range';
        } else if (!isset($address) || empty($address)) {

            $this->message = 'Password give your address';
            $this->data = false;
        } else {
            $email = $this->cleanData($email);
            $phone = $this->cleanData($phone);
            $name = $this->cleanData($name);

            /**
             * Adding simple validation to validate data
         
             */


            if (!$this->verify($email, '/^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/ix')) {

                $this->message = 'Provide valid mail';
                $this->data = false;
            } else if (!$this->verify($phone, '/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/')) {

                $this->message = 'Provide valid phone number';
                $this->data = false;
            } else if (!$this->verify($name, '/^[a-zA-Z\s]*$/')) {

                $this->message = 'Please Enter valid name';
                $this->data = false;
            } else {
                $this->id = strtotime('now');

                $this->date = date("Y-m-d", strtotime("now"));
                $password = password_hash($password, PASSWORD_BCRYPT);
                $this->values = array($this->id, $name, $email, $phone, $password, $this->date);
                $this->register($age, $address);
            }
        }

        $this->ResultReturn();
    }



    /**
     * data cleaning function
         
     */
    public function cleanData($data)
    {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    /**
     * data validation function 
         
     */

    private function verify($data, $regex)
    {

        return (!preg_match($regex, $data)) ? FALSE : TRUE;
    }

    private function register($age, $address)
    {

        $email = $this->values[2];

        /**
         * check for duplicate data
         
         */

        $this->sql = "SELECT userID from auth where email = '$email'";

        $this->db = new database();
        $this->db->query($this->sql);
        if ($this->db->sql_query->rowCount() > 0) {
            $this->data = false;
            $this->message = "Email is  already in use";
        } else {
            /**
             * check for duplicate data
             * if not then add data to databse
         
             */
            $this->sql = "INSERT into auth (userID,name,email,phone,password,joinDate) values(?,?,?,?,?,?)";
            $this->db->query_value($this->sql, $this->values);
            if ($this->db->sql_query->rowCount() > 0) {

                $this->sql = "INSERT into details (userID,age,address) values(?,?,?)";
                $this->values = array($this->id, $age, $address);

                $this->db->query_value($this->sql, $this->values);
                if ($this->db->sql_query->rowCount() > 0) {
                    $this->data = true;
                    $this->message = "Registration Successfull";
                    //Session id as token

                    $this->sessionData = array('SessionId' => session_id(), 'userId' => $this->values[0], 'username' => $this->values[2]);
                    $_SESSION['authflex'] = $this->sessionData;
                } else {
                    $this->data = false;
                    $this->message = "Error occured";
                }
            }

            $this->db->close_connection();
        }
    }
    private function ResultReturn()
    {

        $this->result = array(
            "data" => $this->data,
            "message" => $this->message,
            "token" => $this->sessionData,
        );
        echo json_encode($this->result);
    }
};

$newReg = new Signup();
