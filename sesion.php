<?php
	session_start();
	if(!$_SESSION["s_id"]){
		header("location:index.php");
	}
	
	$c_id     = $_SESSION["s_id"];
	$c_ruc    = $_SESSION["s_ruc"];
	$c_razsoc = $_SESSION["s_razsoc"];
?>