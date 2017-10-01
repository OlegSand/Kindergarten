var a = 1;
console.log(a);

function foo(string) {
 var newStr = string;
 return newStr;
}

(function ($) {
	$('.btn').click(function(){
		$('form').toggle('slow', function(){
			
		});
	});
})(jQuery);
