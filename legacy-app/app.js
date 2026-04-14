// AdminPanel v1.2 - Main JavaScript
// Last modified: ??? (no git history)

// Set last updated date on dashboard
var d = new Date();
var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
var dateStr = months[d.getMonth()] + ' ' + d.getDate() + ', ' + d.getFullYear() + ' ' + d.getHours() + ':' + (d.getMinutes() < 10 ? '0' : '') + d.getMinutes();
if (document.getElementById('lastUpdated')) {
    document.getElementById('lastUpdated').innerHTML = dateStr;
}

// Show toast notification
function showToast(msg) {
    var t = document.getElementById('toast');
    var tm = document.getElementById('toastMsg');
    if (t && tm) {
        tm.innerHTML = msg;
        t.style.display = 'block';
        setTimeout(function() {
            t.style.display = 'none';
        }, 3000);
    }
}

// Form submit handler
function submitForm() {
    var customer = document.getElementsByName('customer')[0];
    var product = document.getElementsByName('product')[0];
    if (!customer || customer.value == '') {
        alert('Please enter a customer name.');
        return;
    }
    if (!product || product.value == '') {
        alert('Please select a product.');
        return;
    }
    showToast('Order added successfully!');
}

// Add customer handler  
function addCustomer() {
    var fname = document.getElementById('fname');
    var lname = document.getElementById('lname');
    var email = document.getElementById('email');
    if (!fname || fname.value == '') {
        alert('First name is required!');
        return;
    }
    if (!lname || lname.value == '') {
        alert('Last name is required!');
        return;
    }
    if (!email || email.value == '') {
        alert('Email is required!');
        return;
    }
    // NOTE: no real email validation here - just check it's not empty
    // TODO: add real validation someday
    alert('Customer ' + fname.value + ' ' + lname.value + ' added!');
    document.getElementById('addForm').style.display = 'none';
}

// Confirm delete - called inline from HTML
// (already using onclick="return confirm()" directly in HTML, this is backup)
function confirmDelete(id) {
    return confirm('Are you sure you want to delete record #' + id + '? This cannot be undone.');
}

// Global error handler - catches JS errors so page doesn't die
window.onerror = function(msg, url, line) {
    // silently ignore - users complained about error popups
    return true;
};
