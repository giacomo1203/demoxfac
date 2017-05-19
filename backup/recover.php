<!DOCTYPE html>
<html lang="en">
<!-- Mirrored from foxythemes.net/preview/products/maisonnette/pages-forgot-password.php by HTTrack Website Copier/3.x [XR&CO'2014], Mon, 20 Mar 2017 19:16:38 GMT -->
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
	<div class="mai-wrapper mai-forgot-password">
		<div class="main-content container">
			<div class="splash-container row">
				<div class="col-sm-6 user-message">
					<span class="splash-message text-right">Oops!<br> esto tomará<br> solo un momento.</span>
					<span class="alternative-message text-right">No tienes cuenta? <a href="register.php">Regístrate</a></span>
				</div>
				<div class="col-sm-6 form-message">
					<img src="assets/img/logo-2x.png" alt="logo" width="250" height="52" class="logo-img mb-4">
					<span class="splash-description text-center mt-5 mb-5">No te preocupes, enviaremos tu nuevo password a tu email.</span>
					<form class="form-forgot-password" method="post" action="recuperar.php" name="frm">
						<div class="form-group">
							<div class="input-group">
								<span class="input-group-addon"><i class="icon s7-mail"></i></span>
								<input id="txema" name="txema" type="text" placeholder="Ingresa tu Email" class="form-control">
							</div>
						</div>
						<p class="contact mt-4">No recuerdas tu email? <a href="javascript:void(0)">Contactar soporte</a>.</p>
						<div class="form-group login-submit">
							<button data-dismiss="modal" type="button" class="btn btn-lg btn-primary btn-block" onclick="cambiar()">Cambiar Password</button>
						</div>
					</form>
					<div class="out-links"><a href="javascript:void(0)">© 2017 XFactura</a></div>
				</div>
			</div>
		</div>
	</div>
    <script src="assets/lib/jquery/jquery.min.js" type="text/javascript"></script>
    <script src="assets/lib/tether/js/tether.min.js" type="text/javascript"></script>
    <script src="assets/lib/perfect-scrollbar/js/perfect-scrollbar.jquery.min.js" type="text/javascript"></script>
    <script src="assets/lib/bootstrap/dist/js/bootstrap.min.js" type="text/javascript"></script>
    <script src="assets/js/app.js" type="text/javascript"></script>
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
	function cambiar(){
		var ema = $("#txema").val();
		if(ema.length==0){
			$("#txema").focus();
			alert("Ingrese email.");
			return;
		}
		frm.submit();
	}
	</script>
</body>
</html>