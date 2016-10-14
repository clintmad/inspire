(function(){
	var quoteService = new QuoteService();

quoteService.getQuote()
	.then(function(data){
		console.log(data)
		debugger
		var template = $('#quoteTemplate').html();

		template = template.replace('{{ quote }}', data.quote);
		template = template.replace('{{ author }}', data.author);

		$('#quote').append($(template));
	})


	
	
}())
