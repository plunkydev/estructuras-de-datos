const pilasUI = () => {
    let pilaContainer = `
        <div class="pilaContainer" id="pilaContainer">
            <div class="pilaInfo" id="pilaInfo">
                <h2>Pila (Stack)</h2>
                <p>Lista ordenada o estructura de datos que permite almacenar y recuperar datos, el modo de acceso a sus elementos es de tipo LIFO(last in, first out)</p>
            </div>
            <div class="uiPilaContainer" id="uiPilaContainer">
                <div class="pilaItemContainer" id="pilaItemContainer"></div>
                <div class="uiPila" id="uiPila">
                    <button class="dataBtn" type="button" id="addPila">Agregar Pila</button>
                    <button class="dataBtn" type="button" id="removePila">Quitar de la Pila</button>
                </div>
            </div>
        </div>
    `
    return pilaContainer
}

export { pilasUI }