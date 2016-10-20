<?php

	//Conexión: almacenamos variables de la conexión
	$db->server 	= '127.0.0.1';
	$db->username 	= 'root';
	$db->password 	= '';
	$db->name 		= 'frame';
	
	//Conexión: realizamos la conexión a la base.
	$conn = mysql_connect($db->server, $db->username, $db->password);
	$conn = mysql_select_db($db->name);

?>