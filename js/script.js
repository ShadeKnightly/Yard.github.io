// Handle the form submission
document.getElementById('quoteForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent page reload

    // Get form input values
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value);
    const landSize = parseInt(document.getElementById('landSize').value);

    let message = `<strong>Name:</strong> ${name}<br><strong>Age:</strong> ${age}<br><strong>Land Size:</strong> ${landSize} sq. ft`;

    if (age < 18) {
        message += "<br><span style='color:red;'>You must be at least 18 to request a quote.</span>";
    } else {
        // Calculate estimated price based on land size
        let price = landSize <= 1000 ? 50 : landSize <= 3000 ? 75 : 100;
        message += `<br><strong>Estimated Price:</strong> $${price}`;
    }

    // Display the result below the form
    document.getElementById('quoteResult').innerHTML = message;
});
