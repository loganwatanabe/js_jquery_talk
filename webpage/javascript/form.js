$(function() { //document is loaded and ready


	var name_check = function(callback){
		var taken_names = ["admin", "new001"];
		callback(taken_names);
	}

	$('#submit-button').click(function(){
		var name = $('#name').val();
		var email = $('#email').val();
		var username = $('#username').val();
		var gender = $('input[name=gender]:checked', '#page-form').val();

		if(name, username, email, gender == null){
			alert('please fill out required fields');
			return false;
		}else{
			return true;
		}
		return false;
	})
	

	$('#username').focusout(function(){
		name_check(function(taken_names){

			var username = $('#username').val();
			if(username == ''){

				$('#username').css({'background-color':'#FF8080'});
				$('#username').parent().append('<br> username is required!');
				$('#username').next().next().remove();
				

				return false

			}else if ($.inArray(username, taken_names) >=0){

				$('#username').css({'background-color':'#FF8080'});
				$('#username').parent().append('<br> username is taken!');
								$('#username').next().next().remove();
				return false

			}else{
				$('#username').css({'background-color':'#ADEBAD'});
				$('#username').parent().append('<br> username is yours!');
								$('#username').next().next().remove();
				return true
			}

		})
	});


});//onReady