function createTable() {
    // Create a table element
    const table = document.createElement("table");

    // Create a header row
    const headerRow = document.createElement("tr");
    const headerCell1 = document.createElement("th");
    headerCell1.textContent = "Header 1";
    const headerCell2 = document.createElement("th");
    headerCell2.textContent = "Header 2";
    headerRow.appendChild(headerCell1);
    headerRow.appendChild(headerCell2);
    table.appendChild(headerRow);

    // Create rows with data
    for (let i = 1; i <= 5; i++) {
        const row = document.createElement("tr");
        const cell1 = document.createElement("td");
        cell1.textContent = "Data " + i + ", Column 1";
        const cell2 = document.createElement("td");
        cell2.textContent = "Data " + i + ", Column 2";
        row.appendChild(cell1);
        row.appendChild(cell2);
        table.appendChild(row);
    }

    // Insert the table into the container div
    const container = document.getElementById("tableContainer");
    container.appendChild(table);
}

// function inputOutputFunction() {
//     // Get input from the user
//     const userInput = prompt("Enter something:");

//     // Display the output
//     console.log("You entered:", userInput);
// }
