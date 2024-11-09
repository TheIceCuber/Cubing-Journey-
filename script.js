function toggleRow(rowId) {
    const row = document.getElementById(rowId);
    const mainRow = row.previousElementSibling; // Get the main row above the sub-row
  
    // Toggle display and expanded class
    row.style.display = row.style.display === 'table-row' ? 'none' : 'table-row';
    mainRow.classList.toggle('expanded'); // Add 'expanded' class for arrow rotation
  }
  