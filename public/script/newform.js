function updateFileName() {
    const fileInput = document.getElementById('fileInput');
    const fileNameDisplay = document.getElementById('fileName');

    if (fileInput.files.length > 0) {
        fileNameDisplay.innerHTML = `&nbsp;Selected file: ${fileInput.files[0].name}`;
    } else {
        fileNameDisplay.innerHTML = '&nbsp;No file selected';
    }
}