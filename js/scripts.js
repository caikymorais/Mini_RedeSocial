function mostrarFormulario() {
  document.getElementById('new-post-form').style.display = 'block';
}

function publicarPost() {
  const postContent = document.getElementById('new-post-content').value;
  if (postContent.length > 0) {
    alert("Post publicado: " + postContent);
    document.getElementById('new-post-content').value = ''; // Limpa o campo após publicar
  } else {
    alert("O post não pode estar vazio!");
  }
}
