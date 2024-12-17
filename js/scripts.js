document.querySelectorAll('.like-button').forEach(button => {
  button.addEventListener('click', function() {
    // Adiciona um "like" ao botão
    let count = parseInt(button.innerText.replace('Like', '')) || 0;
    button.innerText = `Like (${count + 1})`;
  });
});
