<?php



$env2 = 'livehost';

if ($env2 == 'development') {

    /**
     * config for database in localhost
         
     */



    defined('DB_HOST') ? NULL : define('DB_HOST', 'localhost');
    defined('DB_USER') ? NULL : define('DB_USER', 'root');
    defined('DB_PASS') ? NULL : define('DB_PASS', 'Rahul@7242');
    defined('DB_NAME') ? NULL : define('DB_NAME', 'Flex');
} else {

    /**
     * config for database in live server
         
     */

    defined('DB_HOST') ? NULL : define('DB_HOST', 'remotemysql.com');
    defined('DB_USER') ? NULL : define('DB_USER', 'vkJZ3TDXih');
    defined('DB_PASS') ? NULL : define('DB_PASS', 'd8BSmLsvaX');
    defined('DB_NAME') ? NULL : define('DB_NAME', 'vkJZ3TDXih');
}
