document.addEventListener('DOMContentLoaded', function() {
    // Handle navigation from main to login
    var continueButton = document.querySelector('.continue-button');
    if (continueButton) {
      continueButton.addEventListener('click', function() {
        window.location.href = 'login.html'; // Redirects to the login page
      });
    }
  
    // Handle login form submission
    var loginForm = document.querySelector('.login-form');
    if (loginForm) {
      loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
  
        console.log('Email:', email); // In production, you'd send this to your server
        console.log('Password:', password); // NEVER log passwords in production
  
        // Here you would handle the login logic, authenticate the user,
        // and upon success, redirect to the product detail page.
        window.location.href = 'product-detail.html';
      });
    }
  
    // Since the product list page is being removed, we do not need to handle
    // navigation from the product list to product detail. 
    // The following code is commented out as it is no longer needed.
    /*
    var productCards = document.querySelectorAll('.product-card');
    if (productCards.length > 0) {
      productCards.forEach(function(card) {
        card.addEventListener('click', function() {
          var productId = this.getAttribute('data-product-id');
          localStorage.setItem('selectedProductId', productId);
          window.location.href = 'product-detail.html';
        });
      });
    }
    */
  
    // Handle navigation from product detail to order history
    var orderHistoryButton = document.querySelector('.order-history-button');
    if (orderHistoryButton) {
      orderHistoryButton.addEventListener('click', function() {
        window.location.href = 'order-history.html'; // Redirects to the order history page
      });
    }
  
    // Additional functionality can be added below as needed for each page.
  });
  