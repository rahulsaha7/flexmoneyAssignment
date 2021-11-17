<?php



class authCred
{

    public $status;
    private $data;
    private $message;
    private $request;
    private $s_id;
    private $values;
    private $result;
    private $payment;
    private $month;

    public function __construct()
    {
        $this->request = $_SERVER['REQUEST_METHOD'];
        $this->request == 'GET' ? extract($_GET) : extract($_POST);

        $session_id = $this->cleanData($session_id);


        $this->showCredData($session_id);
    }

    public function cleanData($data)
    {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    public function showCredData($session_id)
    {

        $this->status = http_response_code();

        $this->s_id = session_id();


        /**
         * Adding simple validation to validate data
         
         */
        if ((!empty($this->s_id) || $this->s_id == $session_id)) {
            $this->data = true;

            /**
             * Checking if user had done payment or not
         
             */

            $this->sql = "SELECT orderID,month from payment where userID = ?";
            $id = $_POST['userid'];
            $this->values = array($id);
            $db = new database();
            $db->query_value($this->sql, $this->values);
            if ($db->sql_query->rowCount() > 0) {
                $this->result = $db->sql_query->fetchAll(PDO::FETCH_ASSOC);

                if ($this->result[0]['orderID'] == "") {
                    $this->payment = false;
                } else
                    $this->payment = true;


                /**
                 * geeting payment month
         
                 */

                $this->month = $this->result[0]['month'];
            } else {
                $this->payment = false;
                $this->month = "";
            }
            $this->message = "Auth data is retrieved";
        } else {
            $this->data = false;
            $this->message = "Session is not set or expired";
        }

        $this->result = array(
            "status" => $this->status,
            "data" => $this->data,
            "message" => $this->message,
            "payment" => $this->payment,
            "month" => $this->month
        );
        echo json_encode($this->result);
    }
};

$login = new authCred();
