<?php

	//Conexi�n: almacenamos variables de la conexi�n
	$db->server 	= '127.0.0.1';
	$db->username 	= 'root';
	$db->password 	= '';
	$db->name 		= 'frame';
	
	//Conexi�n: realizamos la conexi�n a la base.
	$conn = mysql_connect($db->server, $db->username, $db->password);
	$conn = mysql_select_db($db->name);

?>