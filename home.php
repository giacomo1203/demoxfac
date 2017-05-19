<?php
	include("sesion.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="">
<meta name="author" content="">
<link rel="shortcut icon" href="assets/img/favicon.html">
<title>X-factura</title>
<link rel="stylesheet" type="text/css" href="assets/lib/stroke-7/style.css"/>
<link rel="stylesheet" type="text/css" href="assets/lib/perfect-scrollbar/css/perfect-scrollbar.min.css"/>  
<link type="text/css" href="assets/css/app.css" rel="stylesheet">
<link type="text/css" href="assets/css/themes/blue-sky.css" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="assets/lib/dropzone/dist/dropzone.css"/>
<link rel="stylesheet" type="text/css" href="assets/lib/datatables/css/dataTables.bootstrap4.min.css"/>
</head>
<body>
	<nav class="navbar navbar-full navbar-inverse navbar-fixed-top mai-top-header">
		<div class="container">
			<a href="#" class="navbar-brand"></a>
			<!--Left Menu-->
			<ul class="nav navbar-nav mai-top-nav">
				<!--
				<li class="nav-item"><a href="index-2.html" class="nav-link">Home</a></li>
				<li class="nav-item dropdown"><a href="#" data-toggle="dropdown" role="button" aria-expanded="false" class="nav-link dropdown-toggle">Services </a></li>
				-->
			</ul>
			<!--Icons Menu-->
			<ul class="navbar-nav float-lg-right mai-icons-nav">
				<li class="dropdown nav-item mai-messages">
					<a href="#" data-toggle="dropdown" role="button" aria-expanded="false" class="nav-link dropdown-toggle"><span class="icon s7-comment"></span></a>
					<ul class="dropdown-menu">
						<li>
							<div class="title">Messages</div>
							<div class="mai-scroller">
								<div class="content">
									<ul>
										<li>
											<a href="#">
												<div class="img"><img src="assets/img/avatars/img1.jpg"></div>
												<div class="content"><span class="date">16 Sept</span><span class="name">Victor Jara</span><span class="desc">The song that has been brave, will always be the new song. </span></div>
											</a>
										</li>
										<li>
											<a href="#">
												<div class="img"><img src="assets/img/avatars/img2.jpg"></div>
												<div class="content"><span class="date">4 Sept</span><span class="name">Gustavo Cerati</span><span class="desc">You will see me fly across the city of fury where no one knows of me.</span></div>
											</a>
										</li>
										<li>
											<a href="#">
												<div class="img"><img src="assets/img/avatars/img3.jpg"></div>
												<div class="content"><span class="date">13 Aug</span><span class="name">Jaime Garzón</span><span class="desc">Now everything came back to the abnormality.</span></div>
											</a>
										</li>
										<li>
											<a href="#">
												<div class="img"><img src="assets/img/avatars/img4.jpg"></div>
												<div class="content"><span class="date">13 Aug</span><span class="name">Allen Collins</span><span class="desc">Things just couldn't even be the same 'Cause I'm as free as a bird now.</span></div>
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div class="footer"> <a href="#">View all messages</a></div>
						</li>
					</ul>
				</li>
				<li class="dropdown nav-item mai-notifications">
					<a href="#" data-toggle="dropdown" role="button" aria-expanded="false" class="nav-link dropdown-toggle"><span class="icon s7-bell"></span><span class="indicator"></span></a>
					<ul class="dropdown-menu">
						<li>
							<div class="title">Notifications</div>
							<div class="mai-scroller">
								<div class="content">
									<ul>
										<li>
											<a href="#">
												<div class="icon"><span class="s7-check"></span></div>
												<div class="content"><span class="desc">This is a new message for my dear friend <strong>Rob</strong>.</span><span class="date">10 minutes ago</span></div>
											</a>
										</li>
										<li>
											<a href="#">
												<div class="icon"><span class="s7-add-user"></span></div>
												<div class="content"><span class="desc">You have a new fiend request pending from <strong>John Doe</strong>.</span><span class="date">2 days ago</span></div>
											</a>
										</li>
										<li>
											<a href="#">
												<div class="icon"><span class="s7-graph1"></span></div>
												<div class="content"><span class="desc">Your site visits have increased <strong>15.5%</strong> more since the last week.</span><span class="date">2 hours ago</span></div>
											</a>
										</li>
										<li>
											<a href="#">
												<div class="icon"><span class="s7-check"></span></div>
												<div class="content"><span class="desc">This is a new message for my dear friend <strong>Rob</strong>.</span><span class="date">10 minutes ago</span></div>
											</a>
										</li>
									</ul>
								</div>
							</div>
							<div class="footer"> <a href="#">View all notifications</a></div>
						</li>
					</ul>
				</li>
			</ul>
			<!--User Menu-->
			<ul class="nav navbar-nav float-lg-right mai-user-nav">
				<li class="dropdown nav-item">
					<a href="#" data-toggle="dropdown" role="button" aria-expanded="false" class="dropdown-toggle nav-link">
						<img src="assets/img/avatar.jpg"><span class="user-name"><?php echo $c_razsoc; ?></span><span class="angle-down s7-angle-down"></span>
					</a>
					<div role="menu" class="dropdown-menu">
						<a href="#" class="dropdown-item"><span class="icon s7-user"> </span>Perfil</a>
						<a href="#" class="dropdown-item"><span class="icon s7-tools"> </span>Configuración</a>
						<a href="cerrar.php" class="dropdown-item"><span class="icon s7-power"> </span>Cerrar Sesión</a>
					</div>
				</li>
			</ul>
		</div>
	</nav>
	<div class="mai-wrapper">
		<nav class="navbar mai-sub-header">
			<div class="container">
				<!-- Mega Menu structure-->
				<nav class="navbar navbar-toggleable-sm">
					<button type="button" data-toggle="collapse" data-target="#mai-navbar-collapse" aria-controls="#mai-navbar-collapse" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler hidden-md-up collapsed">
						<div class="icon-bar"><span></span><span></span><span></span></div>
					</button>
					<div id="mai-navbar-collapse" class="navbar-collapse collapse mai-nav-tabs">
						<ul class="nav navbar-nav">
							<li class="nav-item parent open">
								<a href="#" role="button" aria-expanded="false" class="nav-link"><span class="icon s7-home"></span><span>Home</span></a>
								<ul class="mai-nav-tabs-sub mai-sub-nav nav">
									<li class="nav-item">
										<a href="javascript:setPage('dashboard');" class="nav-link"><span class="icon s7-monitor"></span><span class="name">Dashboard</span></a>
									</li>
									<li class="nav-item">
										<a href="javascript:setPage('profile');" class="nav-link"><span class="icon s7-user"></span><span class="name">Perfil</span></a>
									</li>
									<li class="nav-item">
										<a href="javascript:setPage('price');" class="nav-link"><span class="icon s7-settings"></span><span class="name">Precios</span></a>
									</li>
								</ul>
							</li>
							<li class="nav-item parent">
								<a href="#" role="button" aria-expanded="false" class="nav-link"><span class="icon s7-rocket"></span><span>Subir Facturas</span></a>
								<ul class="mai-nav-tabs-sub mai-sub-nav nav">
									<li class="nav-item"><a href="javascript:setPage('create');" class="nav-link"><span class="name">Unidad</span></a></li>
									<li class="nav-item"><a href="javascript:setPage('masive');" class="nav-link"><span class="name">Paquete</span></a></li>
								</ul>
							</li>
							<li class="nav-item parent">
								<a href="#" role="button" aria-expanded="false" class="nav-link"><span class="icon s7-diamond"></span><span>Ventas</span></a>
								<ul class="mai-nav-tabs-sub mai-sub-nav nav">
									<li class="nav-item"><a href="javascript:setPage('factura');" class="nav-link"><span class="icon s7-cash"></span><span class="name">Facturas</span></a></li>
									<li class="nav-item"><a href="javascript:setPage('listado');" class="nav-link"><span class="icon s7-cash"></span><span class="name">Boletas</span></a></li>
									<li class="nav-item"><a href="javascript:setPage('listado');" class="nav-link"><span class="icon s7-cash"></span><span class="name">Notas de Credito</span></a></li>
									<li class="nav-item"><a href="javascript:setPage('listado');" class="nav-link"><span class="icon s7-cash"></span><span class="name">Notas de Debito</span></a></li>
								</ul>
							</li>
							<li class="nav-item parent">
								<a href="#" role="button" aria-expanded="false" class="nav-link"><span class="icon s7-settings"></span><span>Configuración</span></a>
								<ul class="mai-nav-tabs-sub mai-sub-nav nav">
									<li class="nav-item"><a href="javascript:setPage('usuario');" class="nav-link"><span class="icon s7-mail"></span><span class="name">Usuario</span></a></li>
									<li class="nav-item"><a href="javascript:setPage('empresa');" class="nav-link"><span class="icon s7-mail"></span><span class="name">Empresa</span></a></li>
									<li class="nav-item"><a href="javascript:setPage('lusuario');" class="nav-link"><span class="icon s7-wallet"></span><span class="name">Listado de Usuarios</span></a></li>
									<li class="nav-item"><a href="javascript:setPage('horarios');" class="nav-link"><span class="icon s7-wallet"></span><span class="name">Horarios</span></a></li>
									<li class="nav-item"><a href="javascript:setPage('servicios');" class="nav-link"><span class="icon s7-wallet"></span><span class="name">Servicios de Sunat</span></a></li>
									<li class="nav-item"><a href="javascript:setPage('correos');" class="nav-link"><span class="icon s7-wallet"></span><span class="name">Correos de Notificaciones</span></a></li>
								</ul>
							</li>
						</ul>
					</div>
				</nav>
				<!--Search input-->
				<div class="search"><input type="text" placeholder="Buscar..." name="q"><span class="s7-search"></span></div>
			</div>
		</nav>
		<div class="main-content container"></div>
	</div>
    <script src="assets/lib/jquery/jquery.min.js" type="text/javascript"></script>
    <script src="assets/lib/tether/js/tether.min.js" type="text/javascript"></script>
    <script src="assets/lib/perfect-scrollbar/js/perfect-scrollbar.jquery.min.js" type="text/javascript"></script>
    <script src="assets/lib/bootstrap/dist/js/bootstrap.min.js" type="text/javascript"></script>
    <script src="assets/js/app.js" type="text/javascript"></script>
    <script src="assets/lib/jquery-flot/jquery.flot.js" type="text/javascript"></script>
    <script src="assets/lib/jquery-flot/jquery.flot.pie.js" type="text/javascript"></script>
    <script src="assets/lib/jquery-flot/jquery.flot.time.js" type="text/javascript"></script>
    <script src="assets/lib/jquery-flot/jquery.flot.resize.js" type="text/javascript"></script>
    <script src="assets/lib/jquery-flot/plugins/jquery.flot.orderBars.js" type="text/javascript"></script>
    <script src="assets/lib/jquery-flot/plugins/curvedLines.js" type="text/javascript"></script>
    <script src="assets/lib/countup/countUp.min.js" type="text/javascript"></script>
    <script src="assets/lib/dropzone/dist/dropzone.js" type="text/javascript"></script>
	<script src="assets/lib/datatables/js/jquery.dataTables.min.js" type="text/javascript"></script>
    <script src="assets/lib/datatables/js/dataTables.bootstrap4.min.js" type="text/javascript"></script>
    <script src="assets/lib/datatables/plugins/buttons/js/dataTables.buttons.js" type="text/javascript"></script>
    <script src="assets/lib/datatables/plugins/buttons/js/buttons.html5.js" type="text/javascript"></script>
    <script src="assets/lib/datatables/plugins/buttons/js/buttons.flash.js" type="text/javascript"></script>
    <script src="assets/lib/datatables/plugins/buttons/js/buttons.print.js" type="text/javascript"></script>
    <script src="assets/lib/datatables/plugins/buttons/js/buttons.colVis.js" type="text/javascript"></script>
    <script src="assets/lib/datatables/plugins/buttons/js/buttons.bootstrap.js" type="text/javascript"></script>
    <script type="text/javascript">
    $(document).ready(function(){
		/*initialize the javascript*/
      	App.init();
      	App.dashboard();
        /*localStorage.setItem('page', 'dashboard');*/
	})
	var setPage = function(stage){
		console.log(stage);
        localStorage.setItem('page', stage);
        loadPage();
	}
	var loadPage = function(){
		page = localStorage.getItem('page');
        if(page=='dashboard'){
          $(".main-content").load('pages/dashboard.html');
        }
        if(page=='profile'){
          $(".main-content").load('pages/profile.html');
        }
        if(page=='price'){
          $(".main-content").load('pages/price.html');
        }
        if(page=='masive'){
          $(".main-content").load('pages/masive.html');
        }
        if(page=='create'){
          $(".main-content").load('pages/create.php');
        }
        if(page=='factura'){
          $(".main-content").load('pages/list-factura.html');
        }
        if(page=='listado'){
          $(".main-content").load('pages/listado.html');
        }
        if(page=='usuario'){
          $(".main-content").load('pages/usuario.html');
        }
        if(page=='empresa'){
          $(".main-content").load('pages/empresa.php');
        }
        if(page=='lusuario'){
          $(".main-content").load('pages/lusuario.html');
        }
	}
	var page = localStorage.getItem('page');
    localStorage.setItem('page', 'dashboard');
    loadPage();
    </script>
    <script type="text/javascript">
	$(document).ready(function(){
		App.livePreview();
	});
	</script>
</body>
</html>