<?php

	//analizar.php realiza una recolección de información de usuario.

	//Inicialización: inclusión de archivos necesarios.
	//include_once('conn.php');
	//Simplificar las bases de los archivos de localización.
	include_once('modules/locale/geoipcity.inc');
	
	//Usuario: server: almacenamos direccion. almacenamos referido. almacenamos hua.
	$usuario->direccion		= $_SERVER['REMOTE_ADDR'];
	$usuario->referido		= $_SERVER['HTTP_REFERER'];
	$usuario->hua			= $_SERVER['HTTP_USER_AGENT'];
	$usuario->lan			= $_SERVER['HTTP_ACCEPT_LANGUAGE'];
	
	//Usuario: os: creamos $oss con expresiones para buscar el os.
	$oss = array(
	
	"/Windows NT (.+?);/"	=> "Windows",
	"/Linux (.+?);/"		=> "Linux",
	"/Mac OS (.+?);/"		=> "Mac OS"
	);
	
	//Usuario: os: recorremos $usuario->hua, buscando las expresiones de $oss.
	foreach ($oss as $ex => $name) { if (preg_match ($ex, $usuario->hua, $founds)) {
		$usuario->os_name = $name;
		$usuario->os_version = $founds[1];
		break;
		}
	}
	
	//Usuario: browser: creamos $browsers con expresiones para buscar el browser.
	$browsers = array(
	
	"/Firefox\/(.+?) |Firefox\/(.+)$/"	=> "Firefox",
	"/MSIE (.+?);/"						=> "Msie",
	"/Version\/(.+?) Safari/" 			=> "Safari",
	"/Opera\/(.+?) /" 					=> "Opera",
	"/Chrome\/(.+?) /" 					=> "Chrome",
	"/Iron\/(.+?) /" 					=> "Iron"
	);
	
	//Usuario: browser: recorremos $usuario->hua, buscando las expresiones de $browsers.
	foreach ($browsers as $ex => $name) { if (preg_match ($ex, $usuario->hua, $founds)) {
		$usuario->browser_name = $name;
		$usuario->browser_version = $founds[1];
		if (!$usuario->browser_version) $usuario->browser_version = $founds[2];
		break;
		}
	}
	
	//Inicialización: lanzamos librerias de localización.
	//Simplificar las bases de los archivos de localización.
	$Geo = geoip_open("modules/locale/GeoIPCity.dat",GEOIP_STANDARD);
	$record = geoip_record_by_addr($Geo,$usuario->direccion);
	geoip_close($Geo);
	
	//Usuario: localización: asociamos las variables.
	$usuario->zona						= $record->continent_code;
	$usuario->zona_pais_code			= $record->country_code;
	$usuario->zona_pais_nombre			= $record->country_name;
	//La linea 64 es ridicula, el array deberia sacar la información desde la primera inclusión.
	$usuario->zona_provincia			= $GEOIP_REGION_NAME[$record->country_code][$record->region];
	$usuario->zona_ciudad				= $record->city;
	$usuario->zona_area_code			= $record->postal_code;
	$usuario->zona_coordinadas_x		= $record->longitude;
	$usuario->zona_coordinadas_y		= $record->latitude;
	
?>

<html>
	<head>
	<script type="text/javascript" src="analyzer.js"></script>
	</head>
	<body>
	<script type="text/javascript">
		//Usuario: Addons: analizamos adobe reader.
		var adobe_reader = Analyzze.getVersion("AdobeReader");
		document.write("adobe reader "+adobe_reader);
		
		//Usuario: Addons: analizamos adobe flash.
		var adobe_flash = Analyzze.getVersion("Flash");
		document.write("adobe flash "+adobe_flash);
		
		//Usuario: Addons: analizamos adobe shockwave.
		var adobe_shockwave = Analyzze.getVersion("Shockwave");
		document.write("adobe shockwave "+adobe_shockwave);
		
		//Usuario: Addons: analizamos adobe shockwave.
		var windows_media = Analyzze.getVersion("WindowsMediaPlayer");
		document.write("windows media player "+windows_media);
	</script>
	</body>
</html>













