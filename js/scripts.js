const textarea = document.getElementById('new-post-content');
const charCount = document.getElementById('char-count');
const previewButton = document.getElementById('preview-button');
const previewContent = document.getElementById('preview-content');
const postPreview = document.getElementById('post-preview');
const publishButton = document.getElementById('publish-button');

// Atualiza a contagem de caracteres
textarea.addEventListener('input', function() {
  const textLength = textarea.value.length;
  charCount.textContent = `${textLength}/280 caracteres`;
});

// Exibe o preview do post
previewButton.addEventListener('click', function() {
  const content = textarea.value;
  previewContent.textContent = content;
  postPreview.style.display = 'block';
});

// Lógica para publicar o post (simulada)
publishButton.addEventListener('click', function() {
  alert('Post publicado!');
  textarea.value = ''; // Limpa o formulário
  charCount.textContent = '0/280 caracteres'; // Reseta o contador de caracteres
  postPreview.style.display = 'none'; // Esconde o preview
});
