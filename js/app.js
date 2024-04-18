let totalGeral;
limpar();

function adicionar() {
    let quantidade = document.getElementById('quantidade').value;
    let campoProduto = document.getElementById('produto').value;
    let produto = campoProduto.split('-')[0];
    let valorUni = campoProduto.split('R$')[1];
    let valor = quantidade * valorUni;
    let listaDoCarrinho = document.getElementById('lista-produtos');
    let valorTotal = document.getElementById('valor-total');
    if(quantidade > 0){
        listaDoCarrinho.innerHTML += `
        <section class="carrinho__produtos__produto">
            <span class="texto-azul">${quantidade}x</span> ${produto} <span class="texto-azul">R$${valorUni}</span>
        </section>
        `
    }else{
        alert('Digite a quantidade de produtos.');
    }

    document.getElementById('quantidade').value = '';
    totalGeral = totalGeral + valor;
    valorTotal.innerText = `R$${totalGeral}`;
}


function limpar() {
    totalGeral = 0;
    document.getElementById('valor-total').innerText = 'R$0';
    document.getElementById('lista-produtos').innerHTML = '';
}