document.addEventListener('DOMContentLoaded', function() {
    const generateButton = document.getElementById('generateButton');
    const voucherDetails = document.getElementById('voucherDetails');
    
    generateButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default form submit behavior

        const cardNumber = document.getElementById('cardNumber').value.trim();
        
        if (cardNumber === "") {
            alert("Please enter a card number.");
            return;
        }
        
        console.log('Card Number:', cardNumber);  // Debugging step
        
        fetchVoucherDetails(cardNumber);
    });

    function fetchVoucherDetails(cardNumber) {
        const url = `https://api.teeg.cloud/vouchers/campaigns/NCSMYMT/cards/${cardNumber}?tz=MIDKNJFK4G`;
        const accessToken = 'Bearer <your_access_token>';

        console.log('API URL:', url); // Debugging step
        
        fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': accessToken,
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            console.log('API Response:', response);  // Debugging step
            return response.json();
        })
        .then(data => {
            console.log('Voucher Data:', data);  // Debugging step
            
            // Display voucher details
            voucherDetails.innerHTML = `
                <p><strong>Voucher Code:</strong> ${data.voucher_code}</p>
                <p><strong>Amount:</strong> ${data.amount}</p>
                <p><strong>Expiry Date:</strong> ${data.expiry_date}</p>
            `;
            voucherDetails.style.display = 'block';  // Make the details visible
        })
        .catch(error => {
            console.error('Error fetching voucher details:', error);
            voucherDetails.innerHTML = '<p>Failed to fetch voucher details.</p>';
            voucherDetails.style.display = 'block';  // Make the error message visible
        });
    }
});
