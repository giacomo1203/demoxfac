<?php
	//include("../sesion.php");
	include("../bd/bd.php");
	include("../bd/empresa.php");
	$o_bd      = new BD();
	$o_empresa = new empresa();
	
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
			$id = $o_empresa->grabar($ruc, $razsoc, $ema, $usu, $cla, $fec, $est);
		}elseif($modo=="upd"){
			$id = $_REQUEST['id'];
			$o_empresa->actualizar($id, $ruc, $razsoc, $ema, $usu, $cla, $est);
		}
		header("location:../index.php");
	}elseif($modo=="upd1"){
		$id = $_REQUEST['id'];
		$ruc    = $_REQUEST['txruc'];
		$clacer = $_REQUEST['txclacer'];
		$ususol = $_REQUEST['txususol'];
		$clasol = $_REQUEST['txclasol'];
		$o_empresa->actualizar1($id, $clacer, $ususol, $clasol);
		$log = $_FILES["txlog"]['name']; $logtam=$_FILES["txlog"]['size']; $logtip=$_FILES["txlog"]['type']; $logext=pathinfo($_FILES["txlog"]['name'], PATHINFO_EXTENSION);
		if($log!=""){
			$des = "../empresa/".$ruc."/".$id.".".$logext;
			if(copy($_FILES['txlog']['tmp_name'], $des)){
				$o_bd->proceso("update empresa set log='".$id.".".$logext."' where id=$id");
			}
		}
		$cer = $_FILES["txcer"]['name']; $certam=$_FILES["txcer"]['size']; $certip=$_FILES["txcer"]['type']; $cerext=pathinfo($_FILES["txcer"]['name'], PATHINFO_EXTENSION);
		if($cer!=""){
			$des = "../empresa/".$ruc."/".$id.".".$cerext;
			if(copy($_FILES['txcer']['tmp_name'], $des)){
				$o_bd->proceso("update empresa set cer='".$id.".".$cerext."' where id=$id");
			}
		}
		header("location:../home.php");
	}elseif($modo=="del"){
		$id = $_REQUEST['id'];
		$o_empresa->eliminar($id);
		//header("location:../home.php?php=usuario/usuario.php");
	}elseif($modo=="exi"){
		$ruc = $_REQUEST['ruc'];
		$ema = $_REQUEST['ema'];
		$usu = $_REQUEST['usu'];
		$m = "";
		$num = $o_empresa->editar("ruc='$ruc'");
		if($num>0){
			$m = "Verifique RUC ingresado ya existe.";
		}else{
			$num = $o_empresa->editar("ema='$ema'");
			if($num>0){
				$m = "Verifique email ingresado ya existe.";
			}else{
				$num = $o_empresa->editar("usu='$usu'");
				if($num>0){
					$m = "Verifique usuario ingresado ya existe.";
				}
			}
		}
		echo $m;
	}
?>