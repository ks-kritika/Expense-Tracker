function addRow(){
	var name = document.getElementById('name').value;
	var date = document.getElementById('date').value;
	var amount = document.getElementById('amount').value;

	// get the html table
	// 0 = the first table
	var table = document.getElementsByTagName('table')[0];

	var newRow = table.insertRow(table.rows.length);

	var cel1 = newRow.insertCell(0);
	var cel2 = newRow.insertCell(1);
	var cel3 = newRow.insertCell(2);

	cel1.innerHTML = name;
	cel2.innerHTML = date;
	cel3.innerHTML = amount;
}  
