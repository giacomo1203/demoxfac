<?php
	include("../sesion.php");
	include("../bd/bd.php");
	$o_bd      = new BD();
	
	$modo = $_REQUEST['modo'];

	if($modo=="add" || $modo=="upd"){
		$emp       = $c_id;
		$fecemi    = date("Ymd");
		$tipdoc    = "FA";
		$ser       = $_REQUEST['cser'];
		$nro       = $_REQUEST['cnro'];
		$mnd       = $_REQUEST['cmnd'];
		$cliruc    = $_REQUEST['ccliruc'];
		$clirazsoc = $_REQUEST['cclirazsoc'];
		$clidir    = $_REQUEST['cclidir'];
		$subtot    = $_REQUEST['csubtot'];
		$dscto     = $_REQUEST['cdscto'];
		$tot       = $_REQUEST['ctot'];
		$obs       = $_REQUEST['cobs'];
		
		$dcod = $_REQUEST['dcod']; $acod = explode("|", $dcod);
		$dcan = $_REQUEST['dcan']; $acan = explode("|", $dcan);
		$dpre = $_REQUEST['dpre']; $apre = explode("|", $dpre);
		$ddes = $_REQUEST['ddes']; $ades = explode("|", $ddes);
		$dtot = $_REQUEST['dtot']; $atot = explode("|", $dtot);
		
		if($modo=="add"){
			$o_bd->proceso("insert into venta(emp_id, fecemi, tipdoc, ser, nro, mnd, cliruc, clirazsoc, clidir, subtot, dscto, tot, obs) values($emp, $fecemi, '$tipdoc', '$ser', '$nro', '$mnd', '$cliruc' , '$clirazsoc', '$clidir', '$subtot', '$dscto', '$tot', '$obs')");
			$id = mysqli_insert_id($o_bd->cn);
			for($i=0; $i<count($acod); $i++){
				$o_bd->proceso("insert into venta_det(ven_id, cod, can, pre, des, tot, obs) values($id, '".$acod[$i]."', '".$acan[$i]."', '".$apre[$i]."', '".$ades[$i]."', '".$atot[$i]."', '')");
			}
		}
		echo "GRABO TODO CORRECTAMENTE";
		//header("location:../home.php");
	}
?>