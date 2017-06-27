/*
This function is called when the Create Row Button Is clicked and it creates a row
*/
function create_Row() {
    var table = document.getElementById("dynamicTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "NEW CELL1";
    cell2.innerHTML = "NEW CELL2";
}

/*
This function is called when the Delete Row Button Is clicked and it Deletes a row
*/
function deleteRow() {
    document.getElementById("dynamicTable").deleteRow(0);
}