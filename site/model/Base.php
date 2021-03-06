<?php

require_once('BaseException.php');


/**
* Singleton allowing the access to the database
* through the getConnection() method. 
* Configuration on config.php.
*/

class Base
{
	
	// Attributes	
	

	private static $dblink;	// The PDO connecting to the database.
	
	
	// M�thods	
	
	
	/**
	* Tries to connect wirh the database.
	* 
	* @return The PDO connected to the database.
	*/

	private static function connect()
	{
		try
		{
			include('config.php');
			$db = new PDO($host, $user, $pass, array(PDO::ERRMODE_EXCEPTION=>true,
			PDO::ATTR_PERSISTENT=>true));
                    $db->exec("set names utf8");
                        
                }
		catch(PDOException $e) 
		{
			throw new BaseException("connection: ".$e->getMessage(). '<br/>');
		}
		return $db;
	}
	
	
	/**
	* Connects this class to the database.
	* 
	* @return The PDO connected to the database.
	*/

	public static function getConnection()
	{
		if(isset(self::$dblink))
		{
			return self::$dblink;
		}
		else
		{
			self::$dblink=self::connect();
			return self::$dblink;
		}
	}
        
            public function __sleep()
    {include('config.php');
        return array($host, $user, $pass);
    }

    public function __wakeup()
    {
        $connect = self::connect();
    }
}