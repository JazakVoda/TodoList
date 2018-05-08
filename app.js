
	var tasks = [];

	// Add button
	document.getElementById('btn').addEventListener('click', function(){
			tasksPush();
	});

	// Function for 'Enter'
	function keyCode(event){
		const enter = event.keyCode;
		if(enter == 13){
			tasksPush();
		}
	}

	// Push new task in array of tasks
	function tasksPush(){
		const text = document.getElementById('text').value;
		const date = document.getElementById('date').value;
		if(text == '' || date == ''){
			text.value = alert('Add Task and Date!');
		} else{
			tasks.push({
				id: Date.now(),
				date: getDate(),
				text: text,
				isCorect: false,
				todoDate: date
			});
			sort();
			generateList();
			reset();
		}
	}


	function generateList(){
		var x = window.matchMedia("(max-width: 768px)");
		if(!x.matches){
		document.getElementById("myTable").innerHTML = '<th>Date/Time</th><th>Description</th><th>Date</th><th>Action</th>';
		} else{
			document.getElementById("myTable").innerHTML = '<tr></tr>';
		}
		x.addListener(function(changed) {
	    if(!changed.matches) {
	       document.getElementById("myTable").innerHTML = '<th>Date/Time</th><th>Description</th><th>Date</th><th>Action</th>';
	       generateList();
	    } else {
	        document.getElementById("myTable").innerHTML = '<tr></tr>';
	        generateList();
	    }
	});



		tasks.forEach(function(task, index){
			const table = document.getElementById("myTable");

			//Create new row and cells
		    const row = table.insertRow(-1);
		    const cell1 = row.insertCell(0);
		    const cell2 = row.insertCell(1);
		    const cell3 = row.insertCell(2);
		    const cell4 = row.insertCell(3);
		   

		    //Calculate dates
			const dateNow = Date.UTC(new Date(getDate()).getFullYear(), new Date(getDate()).getMonth(), new Date(getDate()).getDate());
			const dateTodo = Date.UTC(new Date(task.todoDate).getFullYear(), new Date(task.todoDate).getMonth(), new Date(task.todoDate).getDate());

			const _MS_PER_DAY = 1000 * 60 * 60 * 24;
			const day = (dateTodo - dateNow) / _MS_PER_DAY;

			if(day === 0){
				table.rows[index + 1].classList.add('today');
			} 
			if(day < 0) {
				table.rows[index + 1].classList.add('past');
			}


		    //Delete Task
		    const btn = document.createElement("BUTTON");
		    btn.addEventListener('click', function(){
		    	if(confirm('Are you sure you want to delete this task?')){
		    		deleteTask(task.id);
		    	}
		    });    
			const x = document.createTextNode("\u2716");      
			btn.appendChild(x); 

			//Remove blue color from task
			const returnLost = document.createElement('BUTTON');
			returnLost.addEventListener('click', function(){
				table.rows[index + 1].classList.remove('selected');

				task.isCorect = false;

				if(task.isCorect === false){
					checked.style.display = 'inline-block';
					returnLost.setAttribute('style', 'display: none');

					checked.style.color = 'blue';
				}

				if(day === 0){
					table.rows[index + 1].classList.add('today');
				}
				saveTasks();
		    });
			const c = document.createTextNode('\u27AD');
			returnLost.appendChild(c);
			returnLost.setAttribute('style', 'display: none');


			//Blue color, task done!    
			const checked = document.createElement('BUTTON');
			checked.addEventListener('click', function(){
				table.rows[index + 1].classList.remove('today');
				table.rows[index + 1].classList.add('selected');
				task.isCorect = true;
				checked.style.display = 'none';
				
				if(task.isCorect === true) {
					
					returnLost.setAttribute('style', 'color: #ffa500');
				}
				if(day < 0){
					checked.setAttribute("style", "display: none;");
					returnLost.style.display = 'none';
					btn.setAttribute('style', 'margin-left: 23px;');
				}
				saveTasks();
			});
			const e = document.createTextNode('\u2611');
			checked.appendChild(e);
			checked.style.color = 'blue';

			if(task.isCorect === true){
				table.rows[index + 1].classList.remove('today');
				table.rows[index + 1].classList.add('selected');
				checked.setAttribute("style", "display: none;");
				returnLost.setAttribute('style', 'display: inline-block; color: #ffa500');
			} 
			if(task.isCorect === true && day < 0){
				returnLost.style.display = 'none';
				btn.setAttribute('style', 'margin-left: 23px;');
			}          


			//Push items from tasks in new row
		    cell1.innerHTML = task.date;
		    cell2.innerHTML = task.text;
		    cell3.innerHTML = task.todoDate;
		    cell4.appendChild(btn);
		    cell4.appendChild(checked);
		    cell4.appendChild(returnLost);

		    saveTasks();
		});   
	}

	// Date sort
	function sort(){
		tasks.sort(function(a, b) {
	    	// convert date object into number to resolve issue in typescript
	    	return +new Date(a.todoDate) - +new Date(b.todoDate);
		});
	}

	// Reset input field
	function reset(){
		document.getElementById('text').value = '';
		document.getElementById('date').value = '';

	}

	// Delete selected task
	function deleteTask(id){
		tasks = tasks.filter(function(task){
			return task.id !== id;
		});
		generateList();
		saveTasks();
	}
	
	//Get Date and Time
	function getDate(){
		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth()+1;
		var yyyy = today.getFullYear();

		var hours = today.getHours();
  		var minutes = today.getMinutes();
		var ampm = hours >= 12 ? 'pm' : 'am';

		hours = hours % 12;
		hours = hours ? hours : 12; // the hour '0' should be '12'
		minutes = minutes < 10 ? '0'+minutes : minutes;

		if(dd<10){
		    dd='0'+dd;
		} 
		if(mm<10){
		    mm='0'+mm;
		} 
		return today = yyyy+'/'+mm+'/'+dd+ ' ' + hours + ':' + minutes;
	}
		

	// LocalStorage tasks
	function saveTasks(){
		const str = JSON.stringify(tasks);
		localStorage.setItem("tasks", str);
	}

	// Get tasks from LocalStorage
	function getTasks(){
		const str = localStorage.getItem("tasks")
		tasks = JSON.parse(str);
		if(!tasks){
			tasks = [];
		}
	
	}
	getTasks();
	generateList();
