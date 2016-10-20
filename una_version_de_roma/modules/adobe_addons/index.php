<?php

//seleccionamos el usuario
$user = $_GET['u'];

?>

<html>
<head>
	<script language="javascript" type="text/javascript" src="flash.small"></script>	
	<script language="javascript" type="text/javascript" src="../../libs/1.3.2.min.small"></script>
</head>
<body>
	<script language="JavaScript" type="text/javascript">
		function fillvars(){
			var flash = GetSwfVer();
			document.getElementById('flash-version').value = flash;
			$("form").submit();
		}
	</script>
	<body onLoad="fillvars()">
		<form method="POST" action="send.php">
			<input type="text" name="u" value="<?php echo "$user"; ?>" />
			<input type="text" name="flash-version" id="flash-version" />
		</form>
		
	</body>
</html>