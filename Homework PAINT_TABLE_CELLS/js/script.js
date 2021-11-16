function changeColor() {
	let table = document.querySelector('#table');
	let tableRows = table.rows;
		for(let i = 0; i < tableRows.length; i++) {
			tableRows[i].cells[i].style.cssText = 'background-color: #108070; color: #fff';
		}
}