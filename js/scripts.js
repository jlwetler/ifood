let counter = 0;
let nome = "";
let address = "";
let dish = "";
let drink = "";
let dessert = "";
let dishPrice;
let drinkPrice;
let dessertPrice;
let totalPrice;

function selectDish(classButton) {
    const select = document.querySelector(".dishes .selected"); //pega quem tem a classe .selected
    
    if (select !== null) {                        //se tiver alguem com .select, tira a classe
        select.classList.remove('selected');
    }
    else {
        counter ++;
    }
    const button = document.querySelector(classButton); //adicionar a borda verde no botao
    button.classList.add('selected');

    if(counter === 3) {
        const fim = document.querySelector(".finish-items");
        fim.classList.add('close-order', 'bottom-instruction');
        fim.innerHTML="Fechar pedido";
    }

    dish = document.querySelector(".selected .dish-item").innerHTML;
    const price = document.querySelector(".selected .dish-price").innerHTML;
    dishPrice = parseFloat(price);
    totalPrice = dishPrice + drinkPrice + dessertPrice;
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
    drink = document.querySelector(".selected .drink-item").innerHTML;
    const price = document.querySelector(".selected .drink-price").innerHTML;
    drinkPrice = parseFloat(price);
    totalPrice = dishPrice + drinkPrice + dessertPrice;
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
    dessert = document.querySelector(".selected .dessert-item").innerHTML;
    const price = document.querySelector(".selected .dessert-price").innerHTML;
    dessertPrice = parseFloat(price);
    totalPrice = dishPrice + drinkPrice + dessertPrice;
}

function closeOrder(classButton) {
    if(counter === 3) {
        while (nome === "" || nome === null) {
            nome = prompt("Digite o seu nome:");
        } 
        while (address === "" || address === null) {
            address = prompt("Digite o seu endere??o:");
        }
        
    const color = document.querySelector(".content");
    color.classList.add('opacity');

    const close = document.querySelector(".confirm");
    close.classList.remove('invisible');

    const dishName = document.querySelector(".dish-name");
    dishName.innerHTML= dish;

    const drinkName = document.querySelector(".drink-name");
    drinkName.innerHTML= drink;

    const dessertName = document.querySelector(".dessert-name");
    dessertName.innerHTML= dessert;

    const priceDish = document.querySelector(".order .dish-price");
    priceDish.innerHTML=  "R$ " + dishPrice.toFixed(2);;

    const priceDrink = document.querySelector(".order .drink-price");
    priceDrink.innerHTML= "R$ " + drinkPrice.toFixed(2);;

    const priceDessert = document.querySelector(".order .dessert-price");
    priceDessert.innerHTML=  "R$ " + dessertPrice.toFixed(2);;

    const total = document.querySelector(".total");
    total.innerHTML =  "R$ " + totalPrice.toFixed(2);
    }
}

function sendOrder () {
    let celular = "5527996031184";
    let texto = "Ol??, gostaria de fazer o pedido: \n- Prato: " + dish + "\n- Bebida: " + drink + "\n- Sobremesa: " + dessert + "\nTotal: R$ " + totalPrice.toFixed(2) + "\n \nNome: " + nome + "\nEndere??o: " + address;
    texto = window.encodeURIComponent(texto);

    window.open("https://wa.me/" + celular + "?text=" + texto);

}

function cancel () {
    const color = document.querySelector(".content");
    color.classList.remove('opacity');

    const close = document.querySelector(".confirm");
    close.classList.add('invisible');
}