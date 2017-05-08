<?php
	session_start();
	if(!$_SESSION["s_id"]){
		header("location:index.php");
	}
	
	$c_id     = $_SESSION["s_id"];
	$c_nomape = $_SESSION["s_nomape"];
	$c_img    = $_SESSION["s_img"];
?>