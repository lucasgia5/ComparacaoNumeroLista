function salvarValores() {
    const lista = [];
    
    for (let i = 1; i <= 8; i++) {
        const inputId = `${i === 1 ? 'primeiro' : i === 2 ? 'segundo' : i === 3 ? 'terceiro' : i === 4 ? 'quarto' : i === 5 ? 'quinto' : i === 6 ? 'sexto' : i === 7 ? 'setimo' : 'oitavo'}Num`;
        const valor = document.getElementById(inputId).value;
        lista.push(valor);
    }
    
    localStorage.setItem('valoresInputs', JSON.stringify(lista));
    
    window.location.href = 'segundaTela.html';
}

function salvarNumeroAdicional() {
        const numeroAdicional = document.getElementById('numeroAdicional').value;
        
        if (!numeroAdicional) {
            alert('Por favor, insira um número adicional.');
            return;
        }

        localStorage.setItem('numeroAdicional', numeroAdicional);

        window.location.href = 'terceiraTela.html';
    }


function verificarNumero() {
    let lista = JSON.parse(localStorage.getItem('valoresInputs')) || [];
    lista = lista.map(Number);
    
    const numeroAdicional = Number(localStorage.getItem('numeroAdicional'));
    
    lista.sort((a, b) => a - b);

    const resultado = lista.includes(numeroAdicional) ? 
        'O número adicional está na lista da primeira tela.' :
        'O número adicional NÃO está na lista da primeira tela.';
    
    const resultadoElement = document.getElementById('resultado');
    if (resultadoElement) {
        resultadoElement.innerText = resultado;
    }

    const listaElement = document.getElementById('listaOrdenada');
    if (listaElement) {
        listaElement.innerHTML = '';
        const ul = document.createElement('ul');
        lista.forEach(num => {
            const li = document.createElement('li');
            li.textContent = num;
            ul.appendChild(li);
        });
        listaElement.appendChild(ul);
    }

    const posicaoElement = document.getElementById('posicaoNumero');
    if (posicaoElement) {
        const posicao = lista.indexOf(numeroAdicional);
        posicaoElement.innerText = posicao !== -1 ? 
            `O número ${numeroAdicional} está na posição ${posicao + 1} da lista.` :
            `O número ${numeroAdicional} não está na lista.`;
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', verificarNumero);
} else {
    verificarNumero();
}