
	var tasks = [];

	document.getElementById('btn').addEventListener('click', function(){
		const text = document.getElementById('text').value;
		if(text == ''){
			text.value = '';
		}else{
			tasks.push({
				id: Date.now(),
				date: getDate(),
				text: text,
				isCorect: false
			});
			generateList();
			reset();
		}
	});
	function generateList(){
		document.getElementById("myTable").innerHTML = '<th>Date/Time</th><th>Description</th><th>Delete</th><th>Mark as Completed</th>';

		tasks.forEach(function(task, index){
			const table = document.getElementById("myTable");

			//Create new row and cells
		    const row = table.insertRow(-1);
		    const cell1 = row.insertCell(0);
		    const cell2 = row.insertCell(1);
		    const cell3 = row.insertCell(2);
		    const cell4 = row.insertCell(3);

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
					checked.setAttribute("hidden", "");
					saveTasks();
			});
			const e = document.createTextNode('\u2611');
			checked.appendChild(e);

			//After deleteTask generate selected rows
			if(task.isCorect === true){
				table.rows[index + 1].classList.add('selected');
				checked.setAttribute("hidden", "");
			}            

			//Push items from tasks in new row
		    cell1.innerHTML = task.date;
		    cell2.innerHTML = task.text;
		    cell3.appendChild(btn);
		    cell4.appendChild(checked); 

		    saveTasks();
		});   
	}

	function reset(){
		document.getElementById('text').value = '';

	}

	function deleteTask(id){
		tasks = tasks.filter(function(task){
			return task.id !== id;
		});
		generateList();
		saveTasks();
	}

	function getDate(){
		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth()+1;
		var hours = today.getHours();
  		var minutes = today.getMinutes();
		var yyyy = today.getFullYear();

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


	//LocalStorage tasks
	function saveTasks(){
		var str = JSON.stringify(tasks);
		localStorage.setItem("tasks", str);
	}

	function getTasks(){
		var str = localStorage.getItem("tasks")
		tasks = JSON.parse(str);
	
	}
	getTasks();
	generateList();
