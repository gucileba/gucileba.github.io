var doc_height = 15976;

function scroll_to_element(el){
	scroll_to($(el).offset().top);
}

function scroll_to(y){
	$('html,body').css('overflow-y', 'hidden');
	$('html,body').scrollTop(y);
	$('html,body').css('overflow-y', 'auto');
}

$(document).ready(function(){
	scroll_to(doc_height);
});
