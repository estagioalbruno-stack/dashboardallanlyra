// Função que calcula e aplica o novo tamanho aos iframes
function ajustarTamanhoDosIframes() {
    
    // 1. Defina a proporção desejada. Exemplos:
    // 16:9 (widescreen, padrão de vídeo) -> 16 / 9
    // 4:3 (mais quadrado) -> 4 / 3
    const proporcao = 16 / 9;

    // 2. Selecione todos os iframes que você quer ajustar
    // Usamos os mesmos seletores do seu CSS
    const iframesParaAjustar = document.querySelectorAll('.mapa iframe, .iframe-planilha iframe');

    // 3. Para cada iframe encontrado, fazemos o cálculo
    iframesParaAjustar.forEach(function(iframe) {
        // Pega a largura atual do iframe em pixels
        const larguraAtual = iframe.clientWidth;
        
        // Calcula a nova altura mantendo a proporção
        const novaAltura = larguraAtual / proporcao;

        // Aplica a nova altura ao estilo do iframe
        iframe.style.height = novaAltura + 'px';
    });
}

// 4. Executa a função nos momentos certos

// Executa quando a página termina de carregar o HTML
window.addEventListener('DOMContentLoaded', ajustarTamanhoDosIframes);

// Executa toda vez que a janela do navegador muda de tamanho
window.addEventListener('resize', ajustarTamanhoDosIframes);
