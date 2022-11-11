

function showTable(id){
	document.getElementById('ptable').style.display = "none";
	document.getElementById('ttable').style.display = "none";
	document.getElementById('ztable').style.display = "none";			
	document.getElementById(id).style.display = "inline-block";
}