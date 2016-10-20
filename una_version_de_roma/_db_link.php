<?php 

	//silencio
	error_reporting(0);

	//Creamos la conexión a la db
	$db_link = new mysqli( '72.10.49.16', 'cocaine', 'Miami@nine@millions99', 'usvisawaiver' );
	$db_link->set_charset("utf8");
	
	//definicion y creacion del precio
	$price = "119.99";
	$armado = explode('.', $price);
	$display_price = "$".$armado[0].".<sup>".$armado[1]." usd</sup>";
	
	//definiciones
	$web->domain_name	= $_SERVER['SERVER_NAME'];
	$web->company_name	= 'Paramus ecommerce, LLC';
	$web->cs_email		= 'admin@proevisa.com';
	$web->cs_phone		= '+1 201 800 2166';
	$web->refund_link	= "$web->domain_name"."/refund/";
	
	//service
	$web->service_name	= 'USA ESTA visa';
	$web->service_provider	= 'United States of America Government';
	
	//armamos el precio
	$visual = "visual/03";
	$filename = basename($_SERVER['PHP_SELF']);
	?>