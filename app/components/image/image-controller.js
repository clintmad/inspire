(function(){
	var imgService = new ImageService();

imgService.getImage()
	.then(function(data){
		console.log(data)
		debugger
		var template = $('#image').html();

		template = template.replace('{{ url }}', data.large_url);
		

		$('#body').append($(template));
	})


	
	
}())
