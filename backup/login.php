<?php
	session_start();
	include("bd/bd.php");
	include("bd/empresa.php");
	$o_bd      = new BD();
	$o_empresa = new empresa();
	
	$ruc = $_REQUEST['txruc'];
	$usu = $_REQUEST['txusu'];
	$cla = $_REQUEST['txcla'];
	$rec = $_REQUEST['chrec'];
	
	$num = $o_empresa->editar("ruc='$ruc' and usu='$usu' and cla='$cla' and est='1'");
	if($num>0){
		$_SESSION["s_id"]     = $o_empresa->e_id();
		$_SESSION["s_ruc"]    = $o_empresa->e_ruc();
		$_SESSION["s_razsoc"] = $o_empresa->e_razsoc();
		if($rec=="1"){
			mt_srand(time());
			$rand = mt_rand(1000000, 9999999);
			$o_bd->proceso("update empresa set recordar='".$rand."' where id=".$o_empresa->e_id());
			setcookie("recid", $o_empresa->e_id(), time()+(60*60*24*365));
			setcookie("recordar", $rand, time()+(60*60*24*365));
		}else{
			$o_bd->proceso("update empresa set recordar='' where id=".$o_empresa->e_id());
		}
		header("location:home.php");
	}else{
		header("location:index.php");
	}
?>