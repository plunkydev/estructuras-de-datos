import './style.css'
import { filasUI, addFila, removeFila } from '/src/components/filas'

const dataContainer = document.getElementById('dataContainer');
const dataBtnFilas = document.getElementById('dataBtnFilas');

dataBtnFilas.addEventListener('click', () => {
    dataContainer.innerHTML = filasUI();
    document.getElementById('addcola').addEventListener('click', addFila);
    document.getElementById('removeCola').addEventListener('click', removeFila);
})