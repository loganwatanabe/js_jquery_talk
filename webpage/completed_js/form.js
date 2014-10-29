$(function() { //document is loaded and ready


	var name_check = function(callback){
		var taken_names = ["admin", "new001"];
		callback(taken_names);
	}

	$('#username').focusout(function(){
		name_check(function(taken_names){

		if($('#username').val()==''){
			//do nothing

		}else if( $.inArray($('#username').val(), taken_names) >= 0){	//the username is taken!
				
				$('#username').css({'background-color' : '#FF8080'});//.trigger("create"); //change background to red

				$('#username').next().next().remove();
				$('#username').next().remove();
				$('#username').parent().append('<br><div style="color: red; text-align: center;">That name is already taken! </div>');
				//step through sing chrome console


			}else{

				$('#username').css({'background-color' : '#ADEBAD'});//change field to green background
				$('#username').next().next().remove();
				$('#username').next().remove();
				$('#username').parent().append('<br><div style="color: green; text-align: center;">That name is all yours! </div>');
			}
		});

	});

	$('#submit-button').click(function(){
		var name = $('#name').val();
		var username = $('#username').val();
		var gender = $('input[name=gender]:checked', '#page-form').val();
		var email = $('#email').val();
		var age = $('#age').val();
		var notes = $('#notes').val();

		if(name, username, email, gender == null){
			alert("please fill out required fields");
			return false;
		}else{
			return true;
		}


		console.log(name);
		console.log(username);
		console.log(email);
		console.log(gender);
		console.log(age);
		console.log(notes);

		return false;

	});

	$('#nothing').click(function(){
		if($( '#hidden' ).is(":visible")){
              $( '#hidden' ).hide();
              return false;
         } else{
              $( '#hidden' ).show();
              return false;
         }

	})


});//onReady