//ensuring HTML code loads before JS script and code starts.
$(document).ready(function() {
	//clicking submit button will...
	$("#submitButton").on("click", function() {
		//store the value of textbox
		var newTodo = $('#textbox').val();
		
		//Appending (adding to end) new list items to tasklist
		$( ".taskList" ).append(
			'<li class="tasks">' 
				+ newTodo
			+ '</li>')

	});

	//(parentElement).methodname("parameter1", "parameter2", "parameter3")
	//removing individual list items from tasklist by clicking
	//list items are created dynamically, can only access list items through tasklist. all list items of ".taskList" will be removed when clicked. 
	$( ".taskList" ).on("click", ".tasks", function()  {
		$(this).remove() ;
	});

});