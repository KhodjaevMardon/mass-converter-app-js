let pounds = document.querySelector('#pounds');
pounds.addEventListener('input', convertToKilos);
// let init_unit = document.querySelector('#initial_unit');
// init_unit.addEventListener('change', convertToKilos);
// let target_unit = document.querySelector('#target_unit');
// target_unit.addEventListener('change', convertToKilos);


function convertToKilos() {
    let split = pounds.value.split(" ");
    let initial_multiplier = getMultiplier(split[1]);
    let target_multiplier = getMultiplier(split[4]);
    let kilos = parseFloat(split[0]) * initial_multiplier / target_multiplier;
    console.log(kilos);
    split[3] = kilos.toPrecision(Math.log10(kilos) + 3);
    console.log(split.join(" "));
    document.querySelector('#target').value = split.join(" ");
}

function getMultiplier(a) {
    let conversionMap = new Map();
    conversionMap.set("карат", 0.2);
    conversionMap.set("ка", 0.2);
    conversionMap.set("грамм", 1);
    conversionMap.set("г", 1);
    conversionMap.set("унций", 28.349523125);
    conversionMap.set("у", 28.349523125);
    conversionMap.set("фунтов", 453.59237);
    conversionMap.set("ф", 453.59237);
    conversionMap.set("килограмм", 1000);
    conversionMap.set("кг", 1000);
    conversionMap.set("центнеров", 100000);
    conversionMap.set("ц", 100000);
    conversionMap.set("тонн", 1000000);
    conversionMap.set("т", 1000000);
    return conversionMap.get(a);
}
