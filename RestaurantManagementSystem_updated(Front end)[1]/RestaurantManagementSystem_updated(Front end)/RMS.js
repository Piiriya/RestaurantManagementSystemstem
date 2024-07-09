// JavaScript for Restaurant Management System

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.link_lists ul li a');
    const adminLink = document.querySelector('a[href="#admin"]');
    const menuLink = document.querySelector('a[href="#menu"]');
    const feedbackLink = document.querySelector('a[href="#feedback"]');
    const exploreBtn = document.querySelector('.explore_btn');
    const ordersLink = document.querySelector('a[href="#orders"]');
    const tableLink = document.querySelector('a[href="#table"]');
    const staffLink = document.querySelector('a[href="#staff"]');
    const adminLoginForm = document.querySelector('.admin-login-form');
    const adminLoginButton = document.querySelector('#admin-login-btn');
    const adminLogoutButton = document.querySelector('#admin-logout-btn');
    const staffList = document.querySelector('.staff-list');
    const feedbackForm = document.querySelector('.feedback-form');
    const orderForm = document.querySelector('.order-form');
    const tableBookingForm = document.querySelector('.table-booking-form');
    const paymentPage = document.querySelector('.payment-page');
    const parcelForm = document.querySelector('.parcel-form');
  
    // Hide all forms initially
    adminLoginForm.style.display = 'none';
    staffList.style.display = 'none';
    feedbackForm.style.display = 'none';
    orderForm.style.display = 'none';
    tableBookingForm.style.display = 'none';
    paymentPage.style.display = 'none';
    parcelForm.style.display = 'none';
  
    // Admin login functionality
    adminLoginButton.addEventListener('click', function() {
      // Replace with actual authentication logic
      const adminId = document.getElementById('admin-id').value;
      const adminPassword = document.getElementById('admin-password').value;
  
      // Simulated authentication (replace with actual backend logic)
      if (adminId === 'admin' && adminPassword === 'password') {
        adminLoginForm.style.display = 'none';
        staffList.style.display = 'block';
        alert('Admin logged in successfully!');
      } else {
        alert('Invalid credentials. Please try again.');
      }
    });
  
    // Admin logout functionality
    adminLogoutButton.addEventListener('click', function() {
      adminLoginForm.style.display = 'block';
      staffList.style.display = 'none';
      alert('Admin logged out.');
    });
  
    // Navigation link click events
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionId = link.getAttribute('href').substring(1);
        toggleSectionDisplay(sectionId);
      });
    });
  
    // Explore button click redirects to menu
    exploreBtn.addEventListener('click', function() {
      toggleSectionDisplay('menu');
    });
  
    // Function to toggle section display based on clicked link
    function toggleSectionDisplay(sectionId) {
      switch (sectionId) {
        case 'admin':
          adminLoginForm.style.display = 'block';
          staffList.style.display = 'none';
          feedbackForm.style.display = 'none';
          orderForm.style.display = 'none';
          tableBookingForm.style.display = 'none';
          paymentPage.style.display = 'none';
          parcelForm.style.display = 'none';
          break;
        case 'menu':
          // Logic to display menu items (replace with actual functionality)
          alert('Displaying menu items');
          break;
        case 'feedback':
          feedbackForm.style.display = 'block';
          adminLoginForm.style.display = 'none';
          staffList.style.display = 'none';
          orderForm.style.display = 'none';
          tableBookingForm.style.display = 'none';
          paymentPage.style.display = 'none';
          parcelForm.style.display = 'none';
          break;
        case 'orders':
          orderForm.style.display = 'block';
          adminLoginForm.style.display = 'none';
          staffList.style.display = 'none';
          feedbackForm.style.display = 'none';
          tableBookingForm.style.display = 'none';
          paymentPage.style.display = 'none';
          parcelForm.style.display = 'none';
          break;
        case 'table':
          tableBookingForm.style.display = 'block';
          adminLoginForm.style.display = 'none';
          staffList.style.display = 'none';
          feedbackForm.style.display = 'none';
          orderForm.style.display = 'none';
          paymentPage.style.display = 'none';
          parcelForm.style.display = 'none';
          break;
        case 'staff':
          // Only display staff list if admin is logged in
          if (isAdminLoggedIn()) {
            staffList.style.display = 'block';
            adminLoginForm.style.display = 'none';
            feedbackForm.style.display = 'none';
            orderForm.style.display = 'none';
            tableBookingForm.style.display = 'none';
            paymentPage.style.display = 'none';
            parcelForm.style.display = 'none';
          } else {
            alert('Only admin can view staff list. Please login first.');
            adminLoginForm.style.display = 'block';
            staffList.style.display = 'none';
            feedbackForm.style.display = 'none';
            orderForm.style.display = 'none';
            tableBookingForm.style.display = 'none';
            paymentPage.style.display = 'none';
            parcelForm.style.display = 'none';
          }
          break;
      }
    }
  
    // Function to check if admin is logged in (simulated)
    function isAdminLoggedIn() {
      // Replace with actual check against backend or session storage
      return staffList.style.display === 'block';
    }
  
    // Feedback form submission
    document.getElementById('feedback-submit-btn').addEventListener('click', function() {
      const feedbackId = document.getElementById('feedback-id').value;
      const itemRating = document.getElementById('item-rating').value;
  
      // Validate feedback ID and item rating (replace with actual validation)
      if (feedbackId && itemRating) {
        // Submit feedback (replace with actual backend logic)
        alert('Feedback submitted successfully!');
        feedbackForm.style.display = 'none';
      } else {
        alert('Please enter feedback ID and item rating.');
      }
    });
  
    // Order form submission
    document.getElementById('order-submit-btn').addEventListener('click', function() {
      const orderId = document.getElementById('order-id').value;
      const orderTime = document.getElementById('order-time').value;
      const orderAmount = document.getElementById('order-amount').value;
  
      // Validate order details (replace with actual validation)
      if (orderId && orderTime && orderAmount) {
        // Submit order (replace with actual backend logic)
        alert('Order placed successfully!');
        orderForm.style.display = 'none';
        paymentPage.style.display = 'block'; // Redirect to payment page
      } else {
        alert('Please enter order details.');
      }
    });
  
    // Table booking form submission
    document.getElementById('table-booking-submit-btn').addEventListener('click', function() {
      const tableNumber = document.getElementById('table-number').value;
      const totalPeople = document.getElementById('total-people').value;
      const bookingTime = document.getElementById('booking-time').value;
  
      // Validate table booking details (replace with actual validation)
      if (tableNumber && totalPeople && bookingTime) {
        // Book table (replace with actual backend logic)
        alert('Table booked successfully!');
        tableBookingForm.style.display = 'none';
        paymentPage.style.display = 'block'; // Redirect to payment page
      } else {
        alert('Please enter table booking details.');
      }
    });
  
    // Parcel form submission
    document.getElementById('parcel-submit-btn').addEventListener('click', function() {
      const parcelId = document.getElementById('parcel-id').value;
      const parcelItem = document.getElementById('parcel-item').value;
  
      // Validate parcel details (replace with actual validation)
      if (parcelId && parcelItem) {
        // Proceed to payment (replace with actual backend logic)
        alert('Proceed to payment for parcel successfully!');
        parcelForm.style.display = 'none';
        paymentPage.style.display = 'block'; // Redirect to payment page
      } else {
        alert('Please enter parcel details.');
      }
    });
  
  });
  