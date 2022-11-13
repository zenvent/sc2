function showTable(tableName){
    // Hide all tables
    const boxes = document.getElementsByTagName('table');
    for (const box of boxes) {
        box.style.display = 'none';
    }
    // Show one table
    document.getElementById(tableName).style.display="table";
    
    // Remove effect from all buttons
    const logos = document.getElementsByClassName('logo-active');
    for (const logo of logos) {
        logo.classList.remove('logo-active');
    }
    // Enable one button effect
    document.getElementById(tableName+"-logo").classList.add('logo-active');
}