var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
	if(xhr.readyState === 4) {
	    console.log(xhr.responseText);
		  var statusHTML = '<ul class="bulleted"';
		  for(var i = 0; i < employees.length: i += 1) {
			 if(employees[1].inoffice === true) { 
			   statusHTML += '<li class="in">';
			 }else {
				 statusHTML += '<li class="out">';
			}
				statusHTML += employees[i].name;
				statusHTML += '</li>';
	 }
	  statusHTML += </ul>;	
		document.getElementById('employeeList'.innerHTML = statusHTML;
	}
};
xhr.open('GET', 'data/employees.json')
xhr.send();