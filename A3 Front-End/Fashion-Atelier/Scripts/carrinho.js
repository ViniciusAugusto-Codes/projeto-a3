/* =============================== TABELA ======================================= */
function cancelPurchase() {
  var table = document.getElementById("product-table");
  table.getElementsByTagName('tbody')[0].innerHTML = "";
}

function showPaymentModal() {
  var modal = document.getElementById("payment-modal");
  modal.style.display = "block";
}

function closePaymentModal() {
  var modal = document.getElementById("payment-modal");
  modal.style.display = "none";
}




/* =============================== CHAT ========================================= */


document.querySelector('.chat-icon').addEventListener('click', function() {
    document.querySelector('.chat-box').style.transform = 'translateY(0)';
  });
  
  document.querySelector('.close-chat-btn').addEventListener('click', function() {
    document.querySelector('.chat-box').style.transform = 'translateY(100%)';
  });
  