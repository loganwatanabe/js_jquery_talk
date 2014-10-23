$(function() { //document is loaded and ready

	flickr_key = 'ff03fc89ad7e33b2520891e111c68043';
	// var jsonFlickrApi = function()

	$("#form-submit").click(function(){
		var keyword = $('#keyword').val();


		if(keyword){

			$.getJSON('https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key='+flickr_key+'&tags='+keyword+'&format=json&per_page=1&jsoncallback=?', function(response){
				console.log(response);
				var picture = response.photos.photo[0]

				var imagehtml = '<img src="https://farm'+picture.farm+'.staticflickr.com/'+picture.server+'/'+picture.id+'_'+picture.secret+'.jpg" / >';

				$(imagehtml).hide().appendTo($('#results')).fadeIn('slow');
			});
			return false;

		}else{

			alert("nothing searched for");

		}
		return false;


	});



});//onReady