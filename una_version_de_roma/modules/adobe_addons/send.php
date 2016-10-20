<?php

//incluímos la información de conexión
include_once('../../info.php');

//creamos la conexión a la db
$connection = mysql_connect(HOST, USER, PASS);
mysql_query("use " . DB, $connection);

//recibimos la información de /links/index.php
$flash		= $_POST['flash-version'];
$user		= $_POST['u'];

//mandamos la información hacia la db
	mysql_query("
		INSERT INTO module_adobe_users SET
		user_id =			'" . addslashes($user) . "',
		flash_version =		'" . addslashes($flash) . "'
	");

?>