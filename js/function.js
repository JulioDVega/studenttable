var deleteButtons = document.getElementsByTagName('button');

for(var i = 0; i < deleteButtons.length; i++) {
  deleteButtons[i].addEventListener("click", function() {
    var rowToDelete = this.parentNode.parentNode;
    alert("Bye Bye");
    rowToDelete.parentNode.removeChild(rowToDelete)
  }); 
}