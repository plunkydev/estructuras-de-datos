import './style.css'
import { filasUI, addFila, removeFila } from '/src/components/filas'
import { pilasUI } from '/src/components/pilas'

const dataContainer = document.getElementById('dataContainer');
const dataBtnFilas = document.getElementById('dataBtnFilas');
const dataBtnPila = document.getElementById('dataBtnPila');

dataBtnFilas.addEventListener('click', () => {
    dataContainer.innerHTML = filasUI();
    document.getElementById('addcola').addEventListener('click', addFila);
    document.getElementById('removeCola').addEventListener('click', removeFila);
});

dataBtnPila.addEventListener('click', () => {
    dataContainer.innerHTML = pilasUI();
});