<?php
// include main configuration file
require_once __DIR__ . '/Inc/init.php';
//Start session to use session id as token
session_start();
//Set error error reporting to false 
error_reporting(false);
//Allow any website to hit api 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, DELETE, PUT, PATCH, OPTIONS');
header('Access-Control-Allow-Headers: token, Content-Type');


class index
{

    private $url;
    private $SwitchURL;
    private $env;
    public $errorResponse;

    public function __construct()
    {


        $this->url = baseURL();
        $this->env = 'development';

        /**
         * Accessing base url according to development server
         */

        if ($this->env == 'livehost') {
            $this->SwitchURL = $this->url[5];
        } else {
            $this->SwitchURL = $this->url[4];
        }

        $this->route();
    }


    /**
     * Accessing base url according to development server
     * Adding routing 
     */
    public function route()
    {
        switch ($this->SwitchURL) {
            case 'login':


                require_once __DIR__ . '/Controller/login.php';
                break;

            case "signup":

                require_once __DIR__ . '/Controller/signup.php';
                break;

            case 'auth-cred':

                require_once __DIR__ . '/Controller/authCred.php';
                break;
            case "Logout":


                require_once __DIR__ . '/Controller/Logout.php';
                break;
            case 'payment':
                require_once __DIR__ . '/Controller/payment.php';
                break;
            default:
                $result = array(
                    'Status' => http_response_code(),
                    'error' => true,
                    "message" => "Link is not valid",
                );
                echo json_encode($result);
                break;
        }
    }
};

$index = new index();
