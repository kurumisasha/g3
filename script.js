document.addEventListener('DOMContentLoaded', function() {
    const generateButton = document.getElementById('generateButton');
    const voucherDetails = document.getElementById('voucherDetails');

    generateButton.addEventListener('click', function() {
        // Get the card number from the input field
        const cardNumber = document.getElementById('cardNumber').value.trim();

        if (cardNumber === "") {
            alert("Please enter a card number.");
            return;
        }

        // Simulate API call to fetch voucher details
        fetchVoucherDetails(cardNumber);
    });

    function fetchVoucherDetails(cardNumber) {
        const url = `https://api.teeg.cloud/vouchers/campaigns/NCSMYMT/cards/${cardNumber}?tz=MIDKNJFK4G`;
        const accessToken = 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6Imp0X1htek9Od2NqTlg0VFhjTjRvMUhNM2k5aUtpczlpSGgxYTllcEdENGsiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiI2ZjcyYzI3NS01MWI5LTQ2M2ItODQxMS0zYjA0OTM2Y2UxODkiLCJpc3MiOiJodHRwczovL2lkZW50aXR5LnRlZWcuY2xvdWQvYWYyMWUwNTYtMGEyMS00ZDgzLWI1ZGQtNDRjNDM5ZmE4ZjMwL3YyLjAvIiwiZXhwIjoxNzE5Njg1NDg4LCJuYmYiOjE3MTk2ODQ1ODgsImlwQWRkcmVzcyI6IjEwNC4yOC4yMTUuMTM1Iiwib2lkIjoiNWY1MmFjOTMtYjQ5Zi00MmEzLTkxMGEtNjVmMTYyNjE4YmE2Iiwic3ViIjoiNWY1MmFjOTMtYjQ5Zi00MmEzLTkxMGEtNjVmMTYyNjE4YmE2IiwicGhvbmUiOiIrNjI4MjE0NzI2ODU3MCIsInRpZCI6ImFmMjFlMDU2LTBhMjEtNGQ4My1iNWRkLTQ0YzQzOWZhOGYzMCIsIm5vbmNlIjoiNDY0Nzg5OTctOGMyOS00ZDZlLWJiYzEtMWNmMWM0ODU0ZTFiIiwic2NwIjoiYWxsLWFwaXMiLCJhenAiOiJjYTBlNDg2OC0xNzdiLTQ5ZDItOGM2My1mMTA0NGUzZWRjNjMiLCJ2ZXIiOiIxLjAiLCJpYXQiOjE3MTk2ODQ1ODh9.uyZmrVyE2y73V7zK37-8dVgZq865C2cnc48M2KCaqZ2PPPnIz29b7LCKbbI5GtkJWMJDAZsAGrLQsDgXEMlhLeZ7LRgM9OuhWl1vviT1SKnsJFkcBzuWovYPFixbx1HcpqNfuCyY4FzynR_vzpJZ_bNLUv4M8niDaXIGsf7F0DS-8I4qh_Gmiz-dtM07cBCAmnC3XD2p3akhp5dO7dNzSgl_pmeIxM3gFBravayltxwsoIUjkeSQ1_XlBaMMuxDexHlSBMPtuNM1RiRlvepifNATU-t0a_BhedvPslrwImnisYS6DZxqRG5FLNEx6I7WH40hwQ3uimtKYxlYt1kr3g';

        fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': accessToken,
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            // Display voucher details
            voucherDetails.innerHTML = `
                <p><strong>Voucher Code:</strong> ${data.voucher_code}</p>
                <p><strong>Amount:</strong> ${data.amount}</p>
                <p><strong>Expiry Date:</strong> ${data.expiry_date}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching voucher details:', error);
            voucherDetails.innerHTML = '<p>Failed to fetch voucher details.</p>';
        });
    }
});
