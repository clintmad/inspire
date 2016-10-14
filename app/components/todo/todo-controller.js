(function () {
	function TodoController() {



		var todoService = new TodoService();
		update(todoService.getTodos());

	
		$('form').on('submit', function (e) {
			debugger
			e.preventDefault();
			var temp = this.listItem.value;
			todoService.newItem = todoService.getTodos();
			todoService.newItem.push(temp);
			todoService.saveTodos(todoService.newItem);

			update(todoService.getTodos());
		})
		

		function update(list) {
			debugger
			var listElem = $('#list');
				var template = '';

			for (var i = 0; i < list.length; i++) {
				listElem.empty();
				debugger
				template += `
				<li>${list[i]}</li>
				<button class="button">X</button>`


			}
			listElem.append(template);

		}

	}





	TodoController();

	// new up the TodoService that has already been configured for your use
	// There are two methods getTodos returns and array
	// saveTodos accepts an array and stores it to your local storage




} ())
