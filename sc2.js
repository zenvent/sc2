function showTable(tableName){
    const boxes = document.getElementsByTagName('table');
    for (const box of boxes) {
        box.style.display = 'none';
    }
    document.getElementById(tableName).style.display="table";
    document.getElementById(tableName+"-logo").classList.add('logo-active');
}