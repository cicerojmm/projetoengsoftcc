$(function() {

    $('#salvar').click(function(e) {
		if($("#titulotcc").val()==""){
			alert("Falta titulo!");
		}
		if($("#subtitulo").val()==""){
			alert("Falta subtitulo!");
		}
		if($("#orientador").val()==""){
			alert("Falta orientador!");
		}
		if($("#area").val()==""){
			alert("Falta area!");
		}
		if($("#resumo").val()==""){
			alert("Falta resumo!");
		}
		if($("#anexo").val()==""){
			alert("Falta anexo!");
		}		
		alert("Salvo!");
	});
	$('#limpar').click(function(e) {
		$("#titulotcc").val('');
		$("#subtitulo").val('');
		$("#orientador").val('');
		$("#area").val('');
		$("#resumo").val('');	
		$("#anexo").val('');
		
	});
	

});
