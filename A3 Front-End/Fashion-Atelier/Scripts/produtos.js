document.getElementById('addToCartBtn').addEventListener('click', function() {
    alert('O produto foi adicionado ao carrinho');
  });
  
  document.getElementById('buyNowBtn').addEventListener('click', function() {
    alert('O produto foi selecionado para a compra');
  });


  /* =============================== CHAT ========================================= */


  document.querySelector('.chat-icon').addEventListener('click', function() {
    document.querySelector('.chat-box').style.transform = 'translateY(0)';
  });
  
  document.querySelector('.close-chat-btn').addEventListener('click', function() {
    document.querySelector('.chat-box').style.transform = 'translateY(100%)';
  });
  