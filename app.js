let pounds = document.querySelector('#pounds');
pounds.addEventListener('input', convertToKilos);
let init_unit = document.querySelector('#initial_unit');
init_unit.addEventListener('change', convertToKilos);
let target_unit = document.querySelector('#target_unit');
target_unit.addEventListener('change', convertToKilos);


function convertToKilos() {
    let initial_multiplier = document.querySelector('#initial_unit').value;
    let target_multiplier = document.querySelector('#target_unit').value;
    let kilos = pounds.value * initial_multiplier / target_multiplier;
    document.querySelector('#target').textContent = kilos;
}
