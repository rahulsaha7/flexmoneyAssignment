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
    private $s_id;
    private $id;
    private $oId;

    private $rId;


    public function __construct()
    {

        $this->status = http_response_code();
        $this->request = $_SERVER['REQUEST_METHOD'];
        /**
         * accessing request  method
         
         */
        $this->request == 'GET' ? extract($_GET) : extract($_POST);
        $this->s_id = session_id();
        //This line of code checck if any empty data is send by client



        /**
         * Adding simple validation to check data
         
         */
        if (empty($session_id) || !isset($session_id)) {
            $this->data = false;

            $this->message = 'token needed';
        } else if ((empty($this->s_id) || $this->s_id == $session_id)) {
            $this->data = false;

            $this->message = 'user is not valid';
        } else if (!isset($batch) || empty($batch)) {

            $this->data = false;
            $this->message = 'you have to select a batch';
        } else if ($batch < '1' || $batch > '4') {

            $this->data = false;
            $this->message = 'Please select a valid batch' . $batch;
        } else if ($amount > "500" || $amount < "500") {
            $this->data = false;
            $this->message = 'amount should be 500';
        } else if (!isset($email) || empty($email)) {
            $this->data = false;

            $this->message = 'Email field shold not be empty';
        } else if (!isset($phone) || empty($phone)) {
            $this->error = true;

            $this->message = 'phone field shold not be empty';
        }
        /**
         * Adding verification mechanism to validate important data
         
         */
        else if (!$this->verify($email, '/^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/ix')) {

            $this->message = 'Provide valid mail';
            $this->data = false;
        } else if (!$this->verify($phone, '/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/')) {

            $this->message = 'Provide valid phone number';
            $this->data = false;
        } else {




            $this->id = $userid;
            $this->CompletePayment($email, $batch, $phone, $amount);



            // $this->update();
        }

        $this->ResultReturn();
    }



    /**
     * function to clean data
         
     */

    public function cleanData($data)
    {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }


    /**
     * function to velidate data
         
     */


    private function verify($data, $regex)
    {

        return (!preg_match($regex, $data)) ? FALSE : TRUE;
    }


    private function CompletePayment($email, $batch, $phone, $amount)
    {


        $this->rId = strtotime('now');
        $this->oId = 'rs' . strtotime('now') . 'ps';
        $this->db = new database();
        /**
         * Checking if user has paid before
         
         */
        $this->sql = "SELECT orderID,month from payment where userID = ?";
        $this->values = array($this->id);

        $this->db->query_value($this->sql, $this->values);

        if ($this->db->sql_query->rowCount() > 0) {

            $this->result = $this->db->sql_query->fetchAll(PDO::FETCH_ASSOC);
            /**
             * Checking if user has paid before
             *  if had then checck whether it has expired or not 
         
             */

            if ($this->result[0]['orderID'] != " " && $this->result[0]['month'] ==  date('m')) {

                $this->message = 'Already Subscribed';
                $this->data = false;
            } else {
                $this->sql = "UPDATE details set batch=? where userID = ?";
                $this->values = array($batch, $this->id);
                $this->db->query_value($this->sql, $this->values);



                /**
                 * Checking if user has paid before
                 *  if had then checck whether it has expired or not 
                 * if expired then update payment details with new data 
         
                 */

                $this->sql = "UPDATE  payment set userID = ?,orderID=?,referenceID=?,orderAmount=?,month=? where userID = ? ";
                $this->values  = array($this->id, $this->oId, $this->rId, $amount, date('m'), $this->id);
                $this->db->query_value($this->sql, $this->values);
                if ($this->db->sql_query->rowCount() > 0) {

                    $this->message = 'your order id is ' . $this->oId;
                    $this->data = false;
                } else {
                    $this->message = 'something went wrong';
                    $this->data = false;
                }
            }
        } else {


            /**
             * checking if user is valid or not 
         

             */

            $this->sql = "SELECT userID from auth where userID = ?";
            $this->values = array($this->id);


            $this->db->query_value($this->sql, $this->values);
            if ($this->db->sql_query->rowCount() > 0) {
                /**
                 * checking if user is valid or not 
                 * if valid then update with new batch if user wants 
         
                 */
                $this->sql = "UPDATE `details` SET `batch` = '$batch' WHERE `details`.`userID` = $this->id ";

                $this->db->query($this->sql, $this->values);

                /**
                 * checking if user is valid or not 
                 * if valid then update with new batch if user wants 
                 * then insert payment details to payment table
         
                 */
                $this->sql = "INSERT into payment (userID,orderID,referenceID,orderAmount,month) values(?,?,?,?,?) ";
                $m = date('m');
                $this->values  = array($this->id, $this->oId, $this->rId, $amount, $m);
                $this->db->query_value($this->sql, $this->values);
                if ($this->db->sql_query->rowCount() > 0) {

                    $this->message = 'your order id is ' . $this->oId;
                    $this->data = true;
                } else {
                    $this->message = 'something went wrong';
                    $this->data = false;
                }
            } else {
                $this->message = 'user not valid' . $this->id;
                $this->data = false;
            }
        }



        $this->db->close_connection();
    }

    private function ResultReturn()
    {

        $this->result = array(
            "data" => $this->data,
            "message" => $this->message,
        );
        echo json_encode($this->result);
    }
};

$newReg = new Signup();
