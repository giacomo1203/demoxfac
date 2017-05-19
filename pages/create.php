<div class="row invoice">

          <div class="col-md-12 invoice-content">
            <div class="row invoice-header">
              <div class="col-4 invoice-title"><span>Logo de Empresa</span></div>
              <div class="col-4 invoice-order" style="text-align:left;"><span class="invoice-number">Number 2308</span><span class="invoice-date"> Lima, 22 de abril del 2017</span></div>
			<div class="col-4 invoice-order" style="border:1px solid grey; border-radius: 3px; text-align:center;">
				<span class="invoice-number">R.U.C. 20548627762</span>
				<span class="invoice-date">FACTURA ELECTRÓNICA</span>
				<span class="invoice-codigo">F002 No 00000002</span>
				</div>
            </div>
			  <div class="row">
              <div class="col-md-12">
                <div>
                  <p><b>Av. del Pinar 136 | Oficina 604 |, Santiago de Surco, Lima, Perú</b></p>
					<p><b>administracion@3waf.com | www.3waf.com</b></p>
					<p><b>Teléfono: (+51) 702 8108</b></p>

                </div>
              </div>
            </div>
			  <div class="row">
              <div class="col-md-12">
                <div class="invoice-payment-details customspan">
                  <p><b>Señor (es) :</b> <span contenteditable="true" data-toggle="tooltip" href="#" data-original-title="Edita tu documento" class="">INSTITUTO PERUANO DE ACCION EMPRESARIAL IPAE</span></p>
					<p><b>Tipo de Documento:</b><span contenteditable="true" data-toggle="tooltip" href="#" data-original-title="Nombre" class=""> RUC 20137254205</span></p>
					<p><b>Dirección :</b><span contenteditable="true" data-toggle="tooltip" href="#" data-original-title="Escribe tu dirección" class=""> AV. PASEO DE LA REPUBLICA N 4675</span></p>
					<p><b>Tipo de moneda :</b> <span contenteditable="true" data-toggle="tooltip" href="#" data-original-title="USD o PEN" class="">USD </span></p>
					<p><b>́Observación :</b><span contenteditable="true" data-toggle="tooltip" href="#" data-original-title="Escribe Aquí" class="">Ninguna</span> </p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <table class="invoice-details" id="jsgrid">
                  <thead>
                    <tr>
					<th style="whidth:10%">Cantidad</th>
					<th style="whidth:10%">Código</th>
                      <th style="width:50%">Descripción</th>
						<th style="width:17%" class="hours">P. Unitario</th>

                      <th style="width:15%" class="amount">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
					  <td class="cantidad">2</td>
					  <td class="código">630067</td>
                      <td class="description">Web design (Etiam sagittis metus sit amet mauris gravida hendrerit)</td>
                      <td class="hours">60</td>
                      <td class="amount">$4,200.00</td>
                    </tr>
                    <tr>
					    <td class="cantidad">2</td>
						<td class="código">630067</td>
                      <td class="description">Responsive design (Etiam sagittis metus sit amet mauris gravida hendrerit)</td>
                      <td class="hours">10</td>
                      <td class="amount">$1,500.00</td>
                    </tr>
                    <tr>
						<td class="cantidad">2</td>
						<td class="código">630067</td>
                      <td class="description">Logo design (Cras faucibus tincidunt elit id rhoncus.)</td>
                      <td class="hours">12</td>
                      <td class="amount">$1,700.00</td>
                    </tr>
                  </tbody>
                </table>
                <table class="invoice-summary">
                  <thead>
                    <tr>
                      <th>Subtotal</th>
                      <th>Discount (20%)</th>
                      <th class="total">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="amount">$7,400,00</td>
                      <td class="amount">$1,480,00</td>
                      <td class="amount total-value">$5,920</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="invoice-payment-details">
                  <p><b>Banco de la Nación:</b> 2039-493-34043</p>
                  <p><b>BCP:</b> 130340-3434-322-12</p>
                  <p><b>BBVA:</b> 4256981-38743-664</p>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12 invoice-message mt-5 mb-5 mt-sm-6 mb-sm-6"><span class="title mb-4">Thank you for contacting us!</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis massa nisl. Sed fringilla turpis id mi ultrices, et faucibus ipsum aliquam.</p>
              </div>
            </div>
            <div class="row invoice-footer">
              <div class="col-md-12">
                <button class="btn btn-space btn-secondary">Save PDF</button>
                <button class="btn btn-space btn-secondary">Print</button>
                <button class="btn btn-space btn-primary">Pay now</button>
              </div>
            </div>
          </div>
        </div>

<script>
var subtotal = 0;
var descuento = 0;
var total = 0;
function guardar(){
	var acan = "";
	var acod = "";
	var ades = "";
	var apre = "";
	var atot = "";
	$("#idet tr").each(function (index) 
    {
        $(this).children("td").each(function (index2) 
        {
            switch (index2) 
            {
                case 0: acan += "|" + $(this).text(); break;
                case 1: acod += "|" + $(this).text(); break;
                case 2: ades += "|" + $(this).text(); break;
				case 3: apre += "|" + $(this).text(); break;
				case 4: atot += "|" + $(this).text(); break;
            }
            //$(this).css("background-color", "#ECF8E0");
        })
    })
	
	acan = acan.substring(1);
	acod = acod.substring(1);
	ades = ades.substring(1);
	apre = apre.substring(1);
	atot = atot.substring(1);
	
	$("#dcan").val(acan);
	$("#dcod").val(acod);
	$("#ddes").val(ades);
	$("#dpre").val(apre);
	$("#dtot").val(atot);
	
	$("#csubtot").val($("#subtotal").html());
	$("#cdscto").val($("#descuento").html());
	$("#ctot").val($("#total").html());
	
	setTimeout("enviar()", 1000);
	//alert("Cant=>"+acan+"\nCod=> "+acod+"\nDes=> "+ades+"\nPre=> "+apre+"\nTot=> "+atot+"\n\nSubTotal=> "+$("#subtotal").html()+"\nDscto=>"+$("#descuento").html()+"\nTotal=> "+$("#total").html());
}
function enviar(){
	frm.submit();
}
function agregar_item(){
	var cod = $("#icod").val();
	var can = $("#ican").val();
	var pre = $("#ipre").val();
	var des = $("#ides").val();
	if(cod!="" && can!="" && pre!="" && des!=""){
		$("#idet tbody").append('<tr><td class="cantidad">'+can+'</td><td class="código">'+cod+'</td><td class="descripcion">'+des+'</td><td class="hours">'+pre+'</td><td class="amount">'+(pre*can).toFixed(2)+'</td><td class="toRemove"><span class="icon s7-trash" onclick="borrar_item(this);"></span></td></tr>');
								
		subtotal+=pre*can;
		total=subtotal-descuento;
		$("#subtotal").html(subtotal.toFixed(2));
		$("#descuento").html(descuento.toFixed(2));
		$("#total").html(total.toFixed(2));
		
		$("#icod").val('');
		$("#ican").val('');
		$("#ipre").val('');
		$("#ides").val('');
		$("#icod").focus();
	}
}
function borrar_item(el){
	var rest = $(el).closest('tr').find('.amount').text();
	//rest = rest.replace(/\D/g,'');
	subtotal-=rest;
	total=subtotal-descuento;
	$("#subtotal").html(subtotal.toFixed(2));
	$("#descuento").html(descuento.toFixed(2));
	$("#total").html(total.toFixed(2));
	$(el).closest('tr').remove();
}
</script>