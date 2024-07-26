//criado a função com o parametro id
//este parametro id vai retornar o numero do jogo escolhido(1, 2 ,3)
function alterarStatus(id) {
    //recuperado qual o jogo clicado usando o id
    let jogoClicado = document.getElementById(`game-${id}`);
    //recuperado o status da imagem do jogo
    let imagemDoJogoClicado = jogoClicado.querySelector('.dashboard__item__img');
    //recuperado o status do botao do jogo
    let botadoDoJogoClicado = jogoClicado.querySelector('.dashboard__item__button');
    
    //feito a comparação para verificar se jogo esta alugado ou não
    if (imagemDoJogoClicado.classList == ('dashboard__item__img')) { 
        //esta é uma maneira alternativa que poderia ser feita a comparação usando contains()
        //if(imagemDoJogoClicado.classList.contains(('dashboard__item__img--rented')) {
        imagemDoJogoClicado.classList.add('dashboard__item__img--rented');
        botadoDoJogoClicado.classList.add('dashboard__item__button--return');
        botadoDoJogoClicado.textContent = 'Devolver';
    } else {
        imagemDoJogoClicado.classList.remove('dashboard__item__img--rented');
        botadoDoJogoClicado.classList.remove('dashboard__item__button--return');
        botadoDoJogoClicado.textContent = 'Alugar';
    }
}