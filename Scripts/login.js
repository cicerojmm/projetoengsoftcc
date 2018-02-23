$(function() {

    $('#aluno').click(function(e) {
		$("#aluno").delay(100).fadeIn(100);
		$('#professor').removeClass('active');
		$('#coordenador').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$('#professor').click(function(e) {
		$("#professor").delay(100).fadeIn(100);
		$('#aluno').removeClass('active');
		$('#coordenador').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
		$('#coordenador').click(function(e) {
		$("#coordenador").delay(100).fadeIn(100);
		$('#aluno').removeClass('active');
		$('#professor').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});

});
