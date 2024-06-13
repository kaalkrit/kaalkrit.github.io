function toggleCollapse(id) {
      var collapseDiv = document.getElementById("publication-" + id);
      var collapseBtn = document.getElementById("collapse-btn-" + id);

      if (collapseDiv.style.display === "none") {
        collapseDiv.style.display = "block";
        collapseBtn.innerHTML = "Collapse";
      } else {
        collapseDiv.style.display = "none";
        collapseBtn.innerHTML = "Expand";
      }
    }
function showShortCV() {
    document.getElementById('short-cv').style.display = 'block';
    document.getElementById('long-cv').style.display = 'none';
}

function showLongCV() {
    document.getElementById('short-cv').style.display = 'none';
    document.getElementById('long-cv').style.display = 'block';
}
