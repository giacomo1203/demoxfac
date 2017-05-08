<?php
	include("bd/bd.php");
	$o_bd = new BD();
	
	$ruc = "";
	$usu = "";
	$cla = "";
	$rec = "";
	if(isset($_COOKIE['recid'])){
		if($_COOKIE['recid']!=""){
			$res = $o_bd->consulta("select ruc, usu, cla from usuario where id='".$_COOKIE["recid"]."' and recordar='".$_COOKIE["recordar"]."' and recordar<>''");
			$num = $o_bd->num_rows($res);
			if($num>0){
				$ruc = $o_bd->result($res, 0, 0);
				$usu = $o_bd->result($res, 0, 1);
				$cla = $o_bd->result($res, 0, 2);
				$rec = "1";
			}
		}
	}
?>
<!DOCTYPE html>
<html lang="en">
<!-- Mirrored from foxythemes.net/preview/products/maisonnette/pages-login.php by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 20 Mar 2017 19:16:38 GMT -->
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="">
<meta name="author" content="">
<link rel="shortcut icon" href="assets/img/favicon.html">
<title>XFactura</title>
<link rel="stylesheet" type="text/css" href="assets/lib/stroke-7/style.css"/>
<link rel="stylesheet" type="text/css" href="assets/lib/perfect-scrollbar/css/perfect-scrollbar.min.css"/>
<link type="text/css" href="assets/css/app.css" rel="stylesheet">
<link type="text/css" href="assets/css/themes/blue-sky.css" rel="stylesheet">
</head>
<body class="mai-splash-screen login-page">
	<div class="mai-wrapper mai-login">
		<div class="main-content container">
			<div class="splash-container row">
				<div class="col-sm-6 user-message oli">
					<span class="splash-message text-right">¡Hola!<br>de vuelta<br> en Xfactura</span>
					<span class="alternative-message text-right">No tienes cuenta? <a href="register.php">Regístrate Aquí</a></span>
				</div>
				<div class="col-sm-6 form-message">
					<img src="assets/img/logo-2x.png" alt="logo" width="160" class="logo-img mb-4">
					<span class="splash-description text-center mt-5 mb-5">Ingrese a su cuenta</span>
					<form method="post" action="login.php" name="frm">
						<div class="form-group">
							<div class="input-group">
								<span class="input-group-addon"><i class="icon s7-cash"></i></span>
								<input id="txruc" name="txruc" type="text" placeholder="RUC" autocomplete="off" class="form-control" value="<?php echo $ruc; ?>">
							</div>
						</div>
						<div class="form-group">
							<div class="input-group">
								<span class="input-group-addon"><i class="icon s7-user"></i></span>
								<input id="txusu" name="txusu" type="text" placeholder="Usuario" autocomplete="off" class="form-control" value="<?php echo $usu; ?>">
							</div>
						</div>
						<div class="form-group">
							<div class="input-group">
								<span class="input-group-addon"><i class="icon s7-lock"></i></span>
								<input id="txcla" name="txcla" type="password" placeholder="Password" class="form-control" value="<?php echo $cla; ?>">
							</div>
						</div>
						<div class="form-group login-submit">
							<button data-dismiss="modal" type="button" class="btn btn-lg btn-primary btn-block" onclick="entrar()">Entrar</button>
						</div>
						<div class="form-group row login-tools">
							<div class="col-6 login-remember">
								<label class="custom-control custom-checkbox mt-2">
									<input id="chrec" name="chrec" type="checkbox" class="custom-control-input" value="1" <?php if($rec=="1"){ echo "checked"; } ?>>
									<span class="custom-control-indicator"></span>
									<span class="custom-control-description">Recordar</span>
								</label>
							</div>
							<div class="col-6 pt-2 text-right login-forgot-password"><a href="recover.php">Olvidaste tu contraseña?</a></div>
						</div>
					</form>
					<div class="out-links"><a href="javascript:void(0)">© 2017 XFactura </a></div>
				</div>
			</div>
		</div>
	</div>
    <script src="assets/lib/jquery/jquery.min.js" type="text/javascript"></script>
    <script src="assets/lib/tether/js/tether.min.js" type="text/javascript"></script>
    <script src="assets/lib/perfect-scrollbar/js/perfect-scrollbar.jquery.min.js" type="text/javascript"></script>
    <script src="assets/lib/bootstrap/dist/js/bootstrap.min.js" type="text/javascript"></script>
    <script src="assets/js/app.js" type="text/javascript"></script>
    <script src="assets/lib/theme-switcher/theme-switcher.min.js" type="text/javascript"></script>
    <script type="text/javascript">
	$(document).ready(function(){
		/*initialize the javascript*/
		App.init();
	});
	</script>
    <script type="text/javascript">
    $(document).ready(function(){
		App.livePreview();
	});
	</script>
	<script type="text/javascript">
	function entrar(){
		var ruc    = $("#txruc").val();
		var usu    = $("#txusu").val();
		var cla    = $("#txcla").val();
		if(ruc.length==0){
			$("#txruc").focus();
			alert("Ingrese RUC.");
			return;
		}
		if(usu.length==0){
			$("#txusu").focus();
			alert("Ingrese usuario.");
			return;
		}
		if(cla.length==0){
			$("#txcla").focus();
			alert("Ingrese password.");
			return;
		}
		frm.submit();
	}
	</script>
</body>
<!-- Mirrored from foxythemes.net/preview/products/maisonnette/pages-login.php by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 20 Mar 2017 19:16:38 GMT -->
</html>