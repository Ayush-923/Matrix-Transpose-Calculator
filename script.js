function createMatrix() {
	// Get number of rows and columns from user input
	const rows = document.getElementById("rows").value;
	const cols = document.getElementById("cols").value;

	// Create matrix as a 2D array
	let matrix = [];
	for (let i = 0; i < rows; i++) {
		matrix.push([]);
		for (let j = 0; j < cols; j++) {
			matrix[i].push(`<input type="number" id="m${i}${j}">`);
		}
	}

	// Display matrix on the web page
	document.getElementById("matrix").innerHTML = matrix.map(row => row.join(" ")).join("<br>");
	document.getElementById("matrix").style.display = "block";
	document.getElementById("result").style.display = "none";
}

function transposeMatrix() {
	// Get matrix elements from user input
	const rows = document.getElementById("rows").value;
	const cols = document.getElementById("cols").value;
	let matrix = [];
	for (let i = 0; i < rows; i++) {
		matrix.push([]);
		for (let j = 0; j < cols; j++) {
			matrix[i].push(Number(document.getElementById(`m${i}${j}`).value));
		}
	}

	// Calculate transpose of the matrix
	let transpose = [];
	for (let i = 0; i < cols; i++) {
		transpose.push([]);
		for (let j = 0; j < rows; j++) {
			transpose[i].push(matrix[j][i]);
		}
	}

	// Display transpose on the web page
	document.getElementById("result").innerHTML = transpose.map(row => row.join(" ")).join("<br>");
	document.getElementById("result").style.display = "block";
}
