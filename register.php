<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="">
<meta name="author" content="">
<link rel="shortcut icon" href="assets/img/favicon.html">
<title>X Factura</title>
<link rel="stylesheet" type="text/css" href="assets/lib/stroke-7/style.css"/>
<link rel="stylesheet" type="text/css" href="assets/lib/perfect-scrollbar/css/perfect-scrollbar.min.css"/>
<link rel="stylesheet" type="text/css" href="assets/lib/font-awesome/css/font-awesome.min.css"/>
<link type="text/css" href="assets/css/app.css" rel="stylesheet">
<link type="text/css" href="assets/css/themes/blue-sky.css" rel="stylesheet">
</head>
<body class="mai-splash-screen bg-register">
	<div class="mai-wrapper mai-sign-up">
		<div class="main-content container">
			<div class="splash-container row">
				<div class="col-sm-6 form-message">
					<img src="assets/img/logo-2x.png" alt="logo" width="169" height="28" class="logo-img mb-4">
					<span class="splash-description text-center mt-4 mb-4">Regístrate</span>
					<form class="sign-up-form" method="post" action="control/usuario.php?modo=add" name="frm">
						<div class="form-group">
							<div class="input-group">
								<span class="input-group-addon"><i class="icon s7-cash"></i></span>
								<input id="txruc" name="txruc" type="text" placeholder="RUC" autocomplete="off" class="form-control">
							</div>
						</div>
						<div class="form-group">
							<div class="input-group">
								<span class="input-group-addon"><i class="icon s7-user"></i></span>
								<input id="txrazsoc" name="txrazsoc" type="text" placeholder="Razón Social" autocomplete="off" class="form-control">
							</div>
						</div>
						<div class="form-group">
							<div class="input-group">
								<span class="input-group-addon"><i class="icon s7-user"></i></span>
								<input id="txusu" name="txusu" type="text" placeholder="Usuario" autocomplete="off" class="form-control">
							</div>
						</div>
						<div class="form-group">
							<div class="input-group">
								<span class="input-group-addon"><i class="icon s7-mail"></i></span>
								<input id="txema" name="txema" type="text" placeholder="Email" class="form-control">
							</div>
						</div>
						<div class="form-group inline row">
							<div class="col-6">
								<div class="input-group">
									<span class="input-group-addon"><i class="icon s7-lock"></i></span>
									<input id="txcla" name="txcla" type="password" placeholder="Password" class="form-control">
								</div>
							</div>
							<div class="col-6">
								<div class="input-group">
									<span class="input-group-addon"><i class="icon s7-lock"></i></span>
									<input id="txrcla" name="txrcla" type="password" placeholder="Repetir Password" class="form-control">
								</div>
							</div>
						</div>
						<div class="form-group sign-up-submit">
							<button data-dismiss="modal" type="button" class="btn btn-lg btn-primary btn-block" onclick="registrar()">Registrar</button>
						</div>
						<div class="form-group row social-signup mb-4"></div>
						<p class="conditions">Para crear tu cuenta, debes aceptar los <a href="javascript:void(0)">Términos y Condiciones</a>.</p>
					</form>
					<div class="out-links"><a href="javascript:void(0)">© 2017 X Factura</a></div>
				</div>
				<div class="col-sm-6 user-message oli">
					<span class="splash-message text-left">Bienvenido<br> Nuevamente<br> a X factura</span>
					<span class="alternative-message text-right">Ya tienes una cuenta? <a href="index.php">Ingresa ahora</a></span>
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
	function registrar(){
		var ruc    = $("#txruc").val();
		var razsoc = $("#txrazsoc").val();
		var usu    = $("#txusu").val();
		var ema    = $("#txema").val();
		var cla    = $("#txcla").val();
		var rcla   = $("#txrcla").val();
		if(ruc.length==0){
			$("#txruc").focus();
			alert("Ingrese RUC.");
			return;
		}
		if(razsoc.length==0){
			$("#txrazsoc").focus();
			alert("Ingrese razón social.");
			return;
		}
		if(usu.length==0){
			$("#txusu").focus();
			alert("Ingrese usuario.");
			return;
		}
		if(ema.length==0){
			$("#txema").focus();
			alert("Ingrese email.");
			return;
		}
		if(cla.length==0){
			$("#txcla").focus();
			alert("Ingrese password.");
			return;
		}
		/*
		if(cla.length<=7){
			$("#txcla").focus();
			alert("Ingrese password minimo 8 dígitos.");
			return;
		}
		*/
		if(rcla.length==0){
			$("#txrcla").focus();
			alert("Ingrese repetir password.");
			return;
		}
		if(cla!=rcla){
			$("#txcla").focus();
			alert("Verifique password.");
			return;
		}
		existe();
	}
	function existe(){
		var ruc = $("#txruc").val();
		var ema = $("#txema").val();
		var usu = $("#txusu").val();
		$.ajax({
			type: "POST",
			data: "ruc="+ruc+"&ema="+ema+"&usu="+usu+"&modo=exi",
			url: "control/usuario.php",
			success: function(respuesta){
				if(respuesta!=""){
					alert(respuesta);
				}else{
					frm.submit();
				}
			}
		});
	}
	</script>
</body>
</html>