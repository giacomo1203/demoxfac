<?php
	class usuario extends BD{
		var $id;
		var $ruc;
		var $razsoc;
		var $ema;
		var $usu;
		var $cla;
		var $fec;
		var $est;
		function grabar($ruc, $razsoc, $ema, $usu, $cla, $fec, $est){
			$this->proceso("insert into usuario(ruc, razsoc, ema, usu, cla, fec, est) values('$ruc', '$razsoc', '$ema', '$usu', '$cla', $fec, '$est')");
			return mysqli_insert_id($this->cn);
		}

		function actualizar($id, $ruc, $razsoc, $ema, $usu, $cla, $est){
			$this->proceso("update usuario set ruc='$ruc', razsoc='$razsoc', ema='$ema', usu='$usu', cla='$cla', est='$est' where id=$id");
		}
		
		function eliminar($id){
			$this->proceso("delete from usuario where id=$id");
		}

		function editar($where='1'){
			$res = $this->consulta("select * from usuario where $where limit 1");
			$num = $this->num_rows($res);
			if($num>0){
				$this->id     = $this->result($res, 0, 0);
				$this->ruc    = $this->result($res, 0, 1);
				$this->razsoc = $this->result($res, 0, 2);
				$this->ema    = $this->result($res, 0, 3);
				$this->usu    = $this->result($res, 0, 4);
				$this->cla    = $this->result($res, 0, 5);
				$this->fec    = $this->result($res, 0, 6);
				$this->est    = $this->result($res, 0, 7);
			}
			return $num;
		}

		function consultar($campo='*', $where='1', $order='1'){
			$res = $this->consulta("select $campo from usuario where $where order by $order");
			return $res;
		}

		function e_id(){ return $this->id; }
		function e_ruc(){ return $this->ruc; }
		function e_razsoc(){ return $this->razsoc; }
		function e_ema(){ return $this->ema; }
		function e_usu(){ return $this->usu; }
		function e_cla(){ return $this->cla; }
		function e_fec(){ return $this->fec; }
		function e_est(){ return $this->est; }
	}
?>