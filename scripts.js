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

    dish = document.querySelector(".selected .dish-item").innerHTML;
    const price = document.querySelector(".selected .dish-price").innerHTML;
    dishPrice = parseFloat(price);
    const total = dishPrice + drinkPrice + dessertPrice;
    totalPrice = total.toFixed(2);
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
    const total = dishPrice + drinkPrice + dessertPrice;
    totalPrice = total.toFixed(2);
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
    const total = dishPrice + drinkPrice + dessertPrice;
    totalPrice = total.toFixed(2);
}

function closeOrder(classButton) {
    if(counter === 3) {
        nome = prompt("Digite o seu nome:");
        address = prompt("Digite o seu endereço:");
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

    dishPrice = dishPrice.toFixed(2);
    const priceDish = document.querySelector(".order .dish-price");
    priceDish.innerHTML=  "R$ " + dishPrice;

    drinkPrice = drinkPrice.toFixed(2);
    const priceDrink = document.querySelector(".order .drink-price");
    priceDrink.innerHTML= "R$ " + drinkPrice;

    dessertPrice = dessertPrice.toFixed(2);
    const priceDessert = document.querySelector(".order .dessert-price");
    priceDessert.innerHTML=  "R$ " + dessertPrice;

    const total = document.querySelector(".total");
    total.innerHTML =  "R$ " + totalPrice;
}

function sendOrder () {
    let celular = "5527999428967";
    let texto = "Olá, gostaria de fazer o pedido: \n - Prato: " + dish + "\n - Bebida: " + drink + "\n - Sobremesa: " + dessert + "\n Total: R$ " + totalPrice + "\n \n Nome: " + nome + "\n Endereço: " + address;
    texto = window.encodeURIComponent(texto);

    window.open("https://wa.me/" + celular + "?text=" + texto);

}