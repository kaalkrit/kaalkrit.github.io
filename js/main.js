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
