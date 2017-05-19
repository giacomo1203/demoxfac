<?php
	include("../sesion.php");
	include("../bd/bd.php");
	include("../bd/empresa.php");
	$o_bd      = new BD();
	$o_empresa = new empresa();
	
	$log    = "";
	$cer    = "";
	$clacer = "";
	$ususol = "";
	$clasol = "";
	$num_emp = $o_empresa->editar("id=$c_id");
	if($num_emp>0){
		$log    = $o_empresa->e_log();
		$cer    = $o_empresa->e_cer();
		$clacer = $o_empresa->e_clacer();
		$ususol = $o_empresa->e_ususol();
		$clasol = $o_empresa->e_clasol();
	}
?>
<div class="row">
	<div class="col-md-12">
		<div class="panel panel-default">
			<div class="panel-heading panel-heading-divider">Empresa<span class="panel-subtitle">Información general de la empresa</span></div>
			<div class="panel-body">
				<form method="post" action="control/empresa.php?modo=upd1&id=<?php echo $c_id; ?>" name="frm" enctype="multipart/form-data">
					<div class="form-group row">
						<label class="col-3 col-form-label text-right">Logo empresarial</label>
						<div class="col-6">
							<input type="file" name="txlog" id="txlog" data-multiple-caption="{count} files selected" class="inputfile">
							<label for="txlog" class="btn btn-secondary"> <i class="icon s7-upload"></i><span>Seleccionar Archivo...</span></label>
						</div>
					</div>
					<div class="form-group row">
						<label class="col-3 col-form-label text-right">Subir certificado</label>
						<div class="col-6">
							<input type="file" name="txcer" id="txcer" data-multiple-caption="{count} files selected" class="inputfile">
							<label for="txcer" class="btn btn-secondary"> <i class="icon s7-upload"></i><span>Seleccionar Archivo...</span></label>
						</div>
					</div>
					<div class="form-group row">
						<label class="col-3 col-form-label text-right">Clave Certificado</label>
						<div class="col-6"><input type="text" name="txclacer" id="txclacer" value="<?php echo $clacer; ?>" class="form-control"></div>
					</div>
					<div class="panel-heading panel-heading-divider">Configuración de la clave Sol</div>
					<br>
					<div class="form-group row">
						<label class="col-3 col-form-label text-right">RUC</label>
						<div class="col-6"><input type="text" name="txruc" id="txruc" class="form-control" readonly="readonly" value="<?php echo $c_ruc; ?>"></div>
					</div>
					<div class="form-group row">
						<label class="col-3 col-form-label text-right">Usuario SOL</label>
						<div class="col-6"><input type="text" name="txususol" id="txususol" class="form-control" value="<?php echo $ususol; ?>"></div>
					</div>
					<div class="form-group row">
						<label class="col-3 col-form-label text-right">Clave SOL</label>
						<div class="col-6"><input type="text" name="txclasol" id="txclasol" class="form-control" value="<?php echo $clasol; ?>"></div>
					</div>
					<div class="form-group row">
						<div class="col-6">
							<p class="text-right">
								<button type="button" class="btn btn-space btn-primary" onclick="guardar()">Guardar</button>
								<button class="btn btn-space btn-secondary">Limpiar</button>
							</p>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
</div>
<script type="text/javascript">
function guardar(){
	frm.submit();
}
</script>