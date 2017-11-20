var dateToday = new Date();
$("h2").html(dateToday.toDateString());

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(e){
	flashRed();
	$(this).parent().fadeOut(250, function(){
		$(this).remove();
	});
	e.stopPropagation();
});

$("#delete").on("click", function(){
	$("li").fadeOut(250, function(){
		$(this).remove();
	});
	flashRed();
});

$("input[type='text']").keypress(function(e){
	if(e.which === 13){
		var newTodo = $(this).val();
		if(newTodo != ""){
			$(this).val("");
			$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + newTodo + "</li>");
			flashGreen();
		}
	}
});

function flashGreen(){
	$("h1").css("background-color", "green");
	$("h2").css("background-color", "green");
	setTimeout(function(){
		$("h1").css("background-color", "BurlyWood");
		$("h2").css("background-color", "BurlyWood");
	}, 1000);
}

function flashRed(){
	$("h1").css("background-color", "red");
	$("h2").css("background-color", "red");
	setTimeout(function(){
		$("h1").css("background-color", "BurlyWood");
		$("h2").css("background-color", "BurlyWood");
	}, 1000);
}