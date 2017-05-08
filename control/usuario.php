<?php
	//include("../sesion.php");
	include("../bd/bd.php");
	include("../bd/usuario.php");
	$o_bd      = new BD();
	$o_usuario = new usuario();
	
	$modo = $_REQUEST['modo'];

	if($modo=="add" || $modo=="upd"){
		$ruc    = $_REQUEST['txruc'];
		$razsoc = $_REQUEST['txrazsoc'];
		$ema    = $_REQUEST['txema'];
		$usu    = $_REQUEST['txusu'];
		$cla    = $_REQUEST['txcla'];
		$fec    = date("Ymd");
		$est    = "1";
		if($modo=="add"){
			$id = $o_usuario->grabar($ruc, $razsoc, $ema, $usu, $cla, $fec, $est);
		}elseif($modo=="upd"){
			$id = $_REQUEST['id'];
			$o_usuario->actualizar($id, $ruc, $razsoc, $ema, $usu, $cla, $est);
		}
		header("location:../index.php");
	}elseif($modo=="del"){
		$id = $_REQUEST['id'];
		$o_usuario->eliminar($id);
		//header("location:../home.php?php=usuario/usuario.php");
	}elseif($modo=="exi"){
		$ruc = $_REQUEST['ruc'];
		$ema = $_REQUEST['ema'];
		$usu = $_REQUEST['usu'];
		$m = "";
		$num = $o_usuario->editar("ruc='$ruc'");
		if($num>0){
			$m = "Verifique RUC ingresado ya existe.";
		}else{
			$num = $o_usuario->editar("ema='$ema'");
			if($num>0){
				$m = "Verifique email ingresado ya existe.";
			}else{
				$num = $o_usuario->editar("usu='$usu'");
				if($num>0){
					$m = "Verifique usuario ingresado ya existe.";
				}
			}
		}
		echo $m;
	}
?>