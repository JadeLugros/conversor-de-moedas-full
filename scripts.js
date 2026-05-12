const convertButton = document.querySelector(".convert-button")
const usaFlag = document.querySelector(".usa-flag")
const brazilFlag = document.querySelector(".brazil-flag")
const currencies = {
    "R$ Real Brasileiro": 1,
    "U$ Dólar Americano": 5.2,
    "€ Euro": 6.1,
    "£ Libra Esterlina": 7.2,
    "C$ Dólar Canadense": 4.1,
    "A$ Dólar Australiano": 3.4,
    "¥ Iene Japonês": 0.036
}




const currencyFormats = {
    "R$ Real Brasileiro": "BRL",
    "U$ Dólar Americano": "USD",
    "€ Euro": "EUR",
    "£ Libra Esterlina": "GBP",
    "C$ Dólar Canadense": "CAD",
    "A$ Dólar Australiano": "AUD",
    "¥ Iene Japonês": "JPY"
}


convertButton.addEventListener("click", convertValues)

function convertValues() {

    const inputCurrencyValue = Number(
    document.querySelector(".input-currency")
    .value
    .replace(/\./g, "")
    .replace(",", ".")
)
    const convertFrom = document.querySelector("#select-convert").value
    const convertTo = document.querySelector("#select-converted").value

    const convertedCurrency = document.querySelector(".converted-currency")
    const currencyToConvert = document.querySelector(".currency-to-convert")

    const valueInReal = inputCurrencyValue * currencies[convertFrom]

    const finalValue = valueInReal / currencies[convertTo]

    currencyToConvert.innerHTML =
        new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: currencyFormats[convertFrom]
        }).format(inputCurrencyValue)

    convertedCurrency.innerHTML =
        new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: currencyFormats[convertTo]
        }).format(finalValue)


if (convertFrom === "U$ Dólar Americano") {
        brazilFlag.src = "./Assets/usa-flag.png"
    }

    if (convertFrom === "€ Euro") {
        brazilFlag.src = "./Assets/european-flag.png"
    }

    if (convertFrom=== "£ Libra Esterlina") {
        brazilFlag.src = "./Assets/unitedkingdon-flag.png"
    }

    if (convertFrom === "C$ Dólar Canadense") {
        brazilFlag.src = "./Assets/canadian-flag.png"
    }

    if (convertFrom=== "A$ Dólar Australiano") {
        brazilFlag.src = "./Assets/australian-flag.png"
    }

    if (convertFrom === "¥ Iene Japonês") {
        brazilFlag.src = "./Assets/japan-flag.png"
    }

    if (convertTo === "R$ Real Brasileiro") {
    usaFlag.src = "./Assets/brazil-flag.png"
}


    if (convertTo === "U$ Dólar Americano") {
        usaFlag.src = "./Assets/usa-flag.png"
    }

    if (convertTo === "€ Euro") {
        usaFlag.src = "./Assets/european-flag.png"
    }

    if (convertTo === "£ Libra Esterlina") {
        usaFlag.src = "./Assets/unitedkingdon-flag.png"
    }

    if (convertTo === "C$ Dólar Canadense") {
        usaFlag.src = "./Assets/canadian-flag.png"
    }

    if (convertTo === "A$ Dólar Australiano") {
        usaFlag.src = "./Assets/australian-flag.png"
    }

    if (convertTo === "¥ Iene Japonês") {
        usaFlag.src = "./Assets/japan-flag.png"
    }

    if (convertTo === "R$ Real Brasileiro") {
    usaFlag.src = "./Assets/brazil-flag.png"
}}
function formatCurrency(event) {

    let value = event.target.value

    value = value.replace(/\D/g, "")

    value = (value / 100).toFixed(2)

    value = value.replace(".", ",")

    value = value.replace(/\B(?=(\d{3})+(?!\d))/g, ".")

    event.target.value = value
}

const inputCurrency = document.querySelector(".input-currency")

inputCurrency.addEventListener("input", formatCurrency)


