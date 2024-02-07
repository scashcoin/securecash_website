// Função para verificar se o dispositivo é um smartphone usando o navegador Chrome
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && window.navigator.userAgent.indexOf("Chrome") !== -1;
}


// Função para alternar a visibilidade do menu dropdown
function toggleMenu() {
    var navbar = document.getElementById("navbar");
    if (isMobileDevice()) {
        navbar.style.display = navbar.style.display === "block" ? "none" : "block";
    }
}

document.addEventListener('DOMContentLoaded', function () {
  const linkImages = document.querySelectorAll('.linkImage');
  const popup = document.getElementById('popup');
  const closeButton = document.querySelector('.close-btn');

  linkImages.forEach(linkImage => {
    linkImage.addEventListener('click', () => {
      const downloadLink = linkImage.getAttribute('data-link');
      popup.style.display = 'block';
      setTimeout(() => {
        // Simula o início do download após 3 segundos
        // Substitua o link pelo seu link de download real
        window.location.href = downloadLink;
      }, 3000);
    });
  });

  // Fecha o popup ao clicar fora dele
  window.addEventListener('click', function (event) {
    if (event.target === popup) {
      popup.style.display = 'none';
    }
  });

  // Fecha o popup ao clicar no botão de fechar
  closeButton.addEventListener('click', function () {
    popup.style.display = 'none';
  });
});

