let counter=0;

function selectDish(classButton) {

    //pega quem tem a classe .selected
    const select = document.querySelector(".dishes .selected");

    //tirar a classe selected de quem já tem, exceto se ngm tem ainda
    if (select !== null) {
        select.classList.remove('selected');
    }
    else {
        counter ++;
    }
   //adicionar a borda verde no botao
    const button = document.querySelector(classButton);
    button.classList.add('selected');

    if(counter === 3) {
        const fim = document.querySelector(".finish-items");
        fim.classList.add('close-order', 'bottom-instruction');
        fim.innerHTML="Fechar pedido";
    }
    
}

function selectDrink(classButton) {

    const select = document.querySelector(".drinks .selected");

    if (select !== null) {
        select.classList.remove('selected');
    }
    else {
        counter ++;
    }

    const button = document.querySelector(classButton);
    button.classList.add('selected');

    if(counter === 3) {
        const fim = document.querySelector(".finish-items");
        fim.classList.add('close-order', 'bottom-instruction');
        fim.innerHTML="Fechar pedido";
    }
}

function selectDessert(classButton) {

    const select = document.querySelector(".desserts .selected");

    if (select !== null) {
        select.classList.remove('selected');
    }
    else {
        counter ++;
    }

    const button = document.querySelector(classButton);
    button.classList.add('selected');

    if(counter === 3) {
        const fim = document.querySelector(".finish-items");
        fim.classList.add('close-order', 'bottom-instruction');
        fim.innerHTML="Fechar pedido";
    }
}


function closeOrder(classButton) {

}