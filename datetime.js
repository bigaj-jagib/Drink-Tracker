// Function to format the date and time
function formatDateTime(date) {
    // Format as ISO 8601 string (e.g., "2025-12-31T18:39:00")
    // This is a widely compatible format for databases
    return date.toISOString(); 
}

// Function to set the hidden field's value
function setSubmissionTime() {
    var now = new Date();
    now.setHours(date.getHours() - 5)
    var hiddenInputField = document.getElementById('datetime');
    if (hiddenInputField) {
        hiddenInputField.value = formatDateTime(now);
    }
}

// Alternatively, you can attach an event listener to the form's submit event
document.getElementById('drinkform').addEventListener('submit', function() {
    setSubmissionTime();
})