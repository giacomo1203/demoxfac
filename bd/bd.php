<?php
	class BD{
		var $cn;
		//function BD($servidor="localhost", $usuario="root", $clave="123", $base="jose_xfactura"){
		function BD($servidor="ec2-52-205-175-163.compute-1.amazonaws.com", $usuario="root", $clave="Nami_2017", $base="xfactura"){
			$this->cn = mysqli_connect($servidor, $usuario, $clave);
			mysqli_select_db($this->cn, $base);
			mysqli_query($this->cn, "set names 'utf8'");
			date_default_timezone_set("America/Lima");
		}
		
		function proceso($sql){
			mysqli_query($this->cn, $sql);
		}
		
		function consulta($sql){
			return mysqli_query($this->cn, $sql);
		}
		
		function num_rows($resultado){
			return mysqli_num_rows($resultado);
		}
		
		function fetch_array($resultado){
			return mysqli_fetch_array($resultado);
		}
		
		function fetch_assoc($resultado){
			return mysqli_fetch_assoc($resultado);
		}
		
		function fetch_row($resultado){
			return mysqli_fetch_row($resultado);
		}
		
		function result($res, $row=0, $col=0){ 
			$numrows = mysqli_num_rows($res); 
			if($numrows && $row<=($numrows-1) && $row >=0){
				mysqli_data_seek($res,$row);
				$resrow = (is_numeric($col)) ? mysqli_fetch_row($res) : mysqli_fetch_assoc($res);
				if (isset($resrow[$col])){
					return $resrow[$col];
				}
			}
			return false;
		}
		
		function num_fields($resultado){
			return mysqli_num_fields($resultado);
		}
	}
?>