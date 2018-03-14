document.addEventListener("DOMContentLoaded", function() {

let scroll = new SmoothScroll('a[data-scroll]');

$('[data-fancybox]').fancybox({
	autoFocus: false
})

$('[data-to-popup]').click(function () {
	$.fancybox.close();
	$.fancybox.open([
	{
		src: $(this).attr('href')
	}],
	{
		autoFocus: false
	});
	return false;
})

svg4everybody();
$('select').selectric();

$("[data-toggle-disabled]").change(function() {
	let $btn = $($(this).data("toggle-disabled"));

	if($(this).prop("checked")) {
		$btn.prop("disabled", false);
		$btn.removeClass("button_disabled");
	} else {
		$btn.prop("disabled", true);
		$btn.addClass("button_disabled");
	}
});

let mySwiper = new Swiper('.swiper-container', {
	speed: 400,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	}
});
});

window.addEventListener("load", function () {

	AOS.init({
		once: true,
		offset: 0
	});

});



// let modal = document.getElementById('showBlock1');
//
// let lnk1 = document.getElementById("link-show");
// let show1 = document.getElementById('auth');
// let show2 = document.querySelectorAll('.fancybox-is-open .fancybox-bg');
//
// let span = document.getElementsByClassName("close")[0];
//
// lnk1.onclick = function () {
//     modal.style.display = "block";
// };
//
// span.onclick = function () {
//     modal.style.display = "none";
// };
//
// window.onclick = function (event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
//};


$("#link-show").fancybox();
$("#showBlock1").submit(function(){ return false; });

$("#btn-show").on("click", function(){

    // тут дальнейшие действия по обработке формы
    // закрываем окно, как правило делать это нужно после обработки данных
	$('.pupup-auth__nav2').css({
		'height':0
	});
	$('.block-hide').hide();
    $("#form-show").fadeOut("fast", function(){
        $(this).before("<p class='text-cen'>Мы отправили ссыдку для восстановления на вашу электронную почту</p>");
        setTimeout("$.fancybox.close()", 100000000);
    });
});















