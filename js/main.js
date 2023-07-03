 function toggleCollapse() {
      var collapseDiv = document.getElementById("publication-collapse");
      var collapseBtn = document.getElementById("collapse-btn");

      if (collapseDiv.style.display === "none") {
        collapseDiv.style.display = "block";
        collapseBtn.innerHTML = "Collapse";
      } else {
        collapseDiv.style.display = "none";
        collapseBtn.innerHTML = "Expand";
      }
    }
