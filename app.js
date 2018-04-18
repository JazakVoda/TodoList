
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
		if(text == ''){
			text.value = alert('Write something!');
		} else{
			tasks.push({
				id: Date.now(),
				date: getDate(),
				text: text,
				isCorect: false
			});
			generateList();
			reset();
		}
	}

	function generateList(){
		document.getElementById("myTable").innerHTML = '<th>Date/Time</th><th>Description</th><th>Action</th>';

		tasks.forEach(function(task, index){
			const table = document.getElementById("myTable");

			//Create new row and cells
		    const row = table.insertRow(-1);
		    const cell1 = row.insertCell(0);
		    const cell2 = row.insertCell(1);
		    const cell3 = row.insertCell(2);

		    //Delete Task
		    const btn = document.createElement("BUTTON");
		    btn.addEventListener('click', function(){
		    	deleteTask(task.id);
		    });    
			const x = document.createTextNode("\u2716");      
			btn.appendChild(x);  

			//Blue color, task done!    
			const checked = document.createElement('BUTTON');
			checked.addEventListener('click', function(){
				table.rows[index + 1].classList.add('selected');
				task.isCorect = true;
				checked.style.display = 'none';
				
				if(task.isCorect === true) {
					btn.setAttribute("style", "display: block;");
				}
				saveTasks();
			});
			const e = document.createTextNode('\u2611');
			checked.appendChild(e);
			checked.style.color = 'blue';
			
			//After deleteTask generate selected rows
			if(task.isCorect === true){
				table.rows[index + 1].classList.add('selected');
				checked.setAttribute("style", "display: none;");
			}            

			//Push items from tasks in new row
		    cell1.innerHTML = task.date;
		    cell2.innerHTML = task.text;
		    cell3.appendChild(btn);
		    cell3.appendChild(checked); 

		    saveTasks();
		});   
	}

	// Reset input field
	function reset(){
		document.getElementById('text').value = '';

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
		return today = dd+'/'+mm+'/'+yyyy+ ' ' + hours + ':' + minutes;
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
