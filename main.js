

$(document).ready(function() {
    $('#example').DataTable( {
        "ajax": "arrays.txt",
        "scrollX": true, 
        "select":true,
        "buttons": {
            buttons: [ 'copy', 'csv', 'excel' ]
        },
        "pageLength": 5,
        "lengthChange": false, 
        "info":false, 
        "columnDefs": [
            { "width": "15%", "targets": 0 }
          ],
          "pagingType": "numbers"
    } );
} );

function myFunction(){
if(!document.getElementById("maintable").className.includes("expanded")){
   document.getElementById("maintable").className = "col-md-9 expanded";
   document.getElementById("rightMenu").style.display = "none";
   document.getElementById("arrowTable").className = "fa fa-chevron-circle-left";
 }
 else{
    document.getElementById("maintable").className = "col-md-6";
    document.getElementById("rightMenu").style.display = ""; 
    document.getElementById("arrowTable").className = "fa fa-chevron-circle-right";
 }
}