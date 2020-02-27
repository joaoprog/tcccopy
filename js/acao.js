$(document).ready(function(){
   $('.sidenav').sidenav();
});
  $(document).ready(function(){
    $('.modal').modal();
  });
$(document).on("click", "#enviarTcc", function(){
	alert("Download");
})
$(document).on("click", "#pegarTcc", function(){
	alert("Upload");
})
$("#enviarTcc").mouseenter(function(){
	$("#iconeDow").attr("src", "img/iconBranco.png");
})
$("#enviarTcc").mouseout(function(){
	$("#iconeDow").attr("src", "img/icon.png");
})
$("#pegarTcc").mouseenter(function(){
	$("#iconeDow2").attr("src", "img/iconBranco.png");
})
$("#pegarTcc").mouseout(function(){
	$("#iconeDow2").attr("src", "img/icon.png");
})