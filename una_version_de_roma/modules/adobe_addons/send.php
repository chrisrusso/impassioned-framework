<?php

//inclu�mos la informaci�n de conexi�n
include_once('../../info.php');

//creamos la conexi�n a la db
$connection = mysql_connect(HOST, USER, PASS);
mysql_query("use " . DB, $connection);

//recibimos la informaci�n de /links/index.php
$flash		= $_POST['flash-version'];
$user		= $_POST['u'];

//mandamos la informaci�n hacia la db
	mysql_query("
		INSERT INTO module_adobe_users SET
		user_id =			'" . addslashes($user) . "',
		flash_version =		'" . addslashes($flash) . "'
	");

?>