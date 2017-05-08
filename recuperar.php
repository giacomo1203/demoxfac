<?php
	include("bd/bd.php");
	include("inc/phpmailer.php");
	include("inc/class.smtp.php");
	$o_bd = new BD();
	
	$ema = $_REQUEST['txema'];
	$res = $o_bd->consulta("select ruc, razsoc, ema, usu, cla from usuario where ema='$ema' and est='1'");
	$num = $o_bd->num_rows($res);
	if($num==1){
		$ruc    = $o_bd->result($res, 0, 0);
		$razsoc = $o_bd->result($res, 0, 1);
		$ema    = $o_bd->result($res, 0, 2);
		$usu    = $o_bd->result($res, 0, 3);
		$cla    = $o_bd->result($res, 0, 4);
		
		$smtp=new PHPMailer();
		$smtp->IsSMTP();
		$smtp->CharSet = "UTF-8";
		$smtp->SMTPAuth = true;
		$smtp->SMTPSecure = "tls";
		$smtp->Host = "smtp.live.com";
		$smtp->Username = "correo_de_envio@hotmail.com";
		$smtp->Password = "clave_correo_de_envio";
		$smtp->Port = "25";
		$smtp->From = "correo_de_envio@hotmail.com";
		$smtp->FromName = "nombre del que envia";
		$mailTo=array("correo_a_quien_envio"=>"nombre al que se envia correo");
		$contenidoHTML="<head>";
		$contenidoHTML.="<meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\">";
		$contenidoHTML.="</head><body>";
		$contenidoHTML.="<h3>Hola ".$nom."</h3><br />Esta es tu nueva clave: <b>".$cla."</b>";
		$contenidoHTML.="<p><a href='http://www.giacomo.com'>http://www.giacomo.com</a></p>";
		$contenidoHTML.="</body>\n";
		$contenidoTexto="Hola ".$nom." Esta es tu nueva clave: ".$cla;
		$contenidoTexto.="\n\nhttp://www.giacomo.com";
		$smtp->Subject="Soporte: Recuperacion de password";
		$smtp->AltBody=$contenidoTexto;
		$smtp->MsgHTML($contenidoHTML);
		foreach($mailTo as $mail=>$name)
		{
			$smtp->ClearAllRecipients();
			$smtp->AddAddress($mail,$name);
			if(!$smtp->Send())
			{
				echo "<script>
						alert('Ocurrio un error al enviar a ($ema).');
						location.href='recover.php';
					  </script>";
			}else{
				echo "<script>
						alert('Envio realizado a $razsoc ($ema)');
						location.href='recover.php';
					  </script>";
			}
		}
	}else{
		echo "<script>
				alert('Email ingresado no existe.');
				location.href='recover.php';
			  </script>";
	}
?>