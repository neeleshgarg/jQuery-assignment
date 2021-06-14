
// SORTING

function sort(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("myTable");
  switching = true;
  dir = "asc";
  while (switching) {
    switching = false;
    rows = table.getElementsByTagName("TR");
    for (i = 1; i < rows.length - 4; i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      if (n == 0) {
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            //if so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            //if so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
      }
      else if (n == 1) {
        if (dir == "asc") {
          if (parseFloat(x.innerHTML.toLowerCase()) > parseFloat(y.innerHTML.toLowerCase())) {
            //if so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (parseFloat(x.innerHTML.toLowerCase()) < parseFloat(y.innerHTML.toLowerCase())) {
            //if so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
      }
      else if (n == 2 || n == 3) {
        if (dir == "asc") {
          if (parseFloat(x.innerHTML.toLowerCase().replace(/[^\d\.\-]/g, "")) > parseFloat(y.innerHTML.toLowerCase().replace(/[^\d\.\-]/g, ""))) {
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (parseFloat(x.innerHTML.toLowerCase().replace(/[^\d\.\-]/g, "")) < parseFloat(y.innerHTML.toLowerCase().replace(/[^\d\.\-]/g, ""))) {
            shouldSwitch = true;
            break;
          }
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount++;
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }

  }
}

// REMOVE A ROW
$(function () {
  $(document).on("click", ".cross", function () {
    $(this).closest('tr').remove();
    let subtotal = totalSum();
    $(".subtotal").html('&#x20b9;' + parseInt(subtotal).toLocaleString());
    document.getElementById('total').innerHTML = '&#x20b9;' + subtotal.toLocaleString();

  });
});

function totalSum() {
  var subtotal = 0;
  var table = document.getElementById("myTable");
  var rows = table.getElementsByTagName('tr');
  for (i = 1; i < rows.length - 3; i++) {
    let x = rows[i].getElementsByTagName('td')[3].innerHTML.replace(/[^\d\.\-]/g, "");
    subtotal += parseFloat(x);
  }
  return subtotal;
}

//DISABLE REMOVE A ROW
$(function () {
  $(document).on("click", "#toggle_removal", function () {

    // FOR HIDING THE WHOLE COLUMN OF CROSSES
    $(".cross").toggleClass("hide");

    //FOR DISABLE CLICKING

    // $(".cross").toggleClass("cancel-pointer");

  });
})
