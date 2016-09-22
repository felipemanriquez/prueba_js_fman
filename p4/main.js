$("#texto").focus();
$('#aplicar').on('click', function(){

	// alert("wat");
	// $("#testerino").append("holo <br>");
	// $("#buscador").val();
	var txt = $("#texto").val();
	$("#testerino").append(txt+ '<br>');


	$("#texto").val('').focus();
});

$("#color").val("val2");

