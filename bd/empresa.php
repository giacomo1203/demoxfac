<?php
	class empresa extends BD{
		var $id;
		var $ruc;
		var $razsoc;
		var $ema;
		var $usu;
		var $cla;
		var $fec;
		var $est;
		var $log;
		var $cer;
		var $clacer;
		var $ususol;
		var $clasol;
		var $recordar;
		function grabar($ruc, $razsoc, $ema, $usu, $cla, $fec, $est, $log, $cer, $clacer, $ususol, $clasol, $recordar){
			$this->proceso("insert into empresa(ruc, razsoc, ema, usu, cla, fec, est, log, cer, clacer, ususol, clasol, recordar) values('$ruc', '$razsoc', '$ema', '$usu', '$cla', $fec, '$est', '', '', '', '', '', '')");
			return mysqli_insert_id($this->cn);
		}

		function actualizar($id, $ruc, $razsoc, $ema, $usu, $cla, $est){
			$this->proceso("update empresa set ruc='$ruc', razsoc='$razsoc', ema='$ema', usu='$usu', cla='$cla', est='$est' where id=$id");
		}
		
		function actualizar1($id, $clacer, $ususol, $clasol){
			$this->proceso("update empresa set clacer='$clacer', ususol='$ususol', clasol='$clasol' where id=$id");
		}
		
		function eliminar($id){
			$this->proceso("delete from empresa where id=$id");
		}

		function editar($where='1'){
			$res = $this->consulta("select * from empresa where $where limit 1");
			$num = $this->num_rows($res);
			if($num>0){
				$this->id       = $this->result($res, 0, 0);
				$this->ruc      = $this->result($res, 0, 1);
				$this->razsoc   = $this->result($res, 0, 2);
				$this->ema      = $this->result($res, 0, 3);
				$this->usu      = $this->result($res, 0, 4);
				$this->cla      = $this->result($res, 0, 5);
				$this->fec      = $this->result($res, 0, 6);
				$this->est      = $this->result($res, 0, 7);
				$this->log      = $this->result($res, 0, 8);
				$this->cer      = $this->result($res, 0, 9);
				$this->clacer   = $this->result($res, 0, 10);
				$this->ususol   = $this->result($res, 0, 11);
				$this->clasol   = $this->result($res, 0, 12);
				$this->recordar = $this->result($res, 0, 13);
			}
			return $num;
		}

		function consultar($campo='*', $where='1', $order='1'){
			$res = $this->consulta("select $campo from empresa where $where order by $order");
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
		function e_log(){ return $this->log; }
		function e_cer(){ return $this->cer; }
		function e_clacer(){ return $this->clacer; }
		function e_ususol(){ return $this->ususol; }
		function e_clasol(){ return $this->clasol; }
		function e_recordar(){ return $this->recordar; }
	}
?>