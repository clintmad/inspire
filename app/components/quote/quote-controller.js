(function () {
	var quoteService = new QuoteService();

	quoteService.getQuote()
		.then(function (data) {
			console.log(data)

			var template = $('#quoteTemplate').html();

			template = template.replace('{{ quote }}', data.quote);
			

			$('#quote').append($(template));
			$('#quote').hover(function () {
				$(this).append($(`<span>-${data.author}</span>`));
			},
				function () {
					$(this).find("span:last").remove();
				});

		})





} ())
