const listaEnlazadaUi = () => {
    let listaEnlazadaContainer = `
        <div class="linkedLisContainer" id="linkedListContainer">
            <div class="linkedListInfo">
                <h2>Lista Enlazada (Linked List)</h2>
                <p>Una lista enlazada es una colección **<strong>linear</strong>** constutuida por una secuencia de "nodos en donde se guardan campos de datos arbitrarios y una referencia al siguiente nodo.</p>
            </div>
            <div class="uiLinkedListContainer">
                <div class="uiLinkedList">
                    <div class="addNodoContainer">
                        <label for="addNodoValue">Agregar dato
                            <input class="listInput" type="number" placeholder="Numero" id="addNodoValue">
                        </label>
                        <button class="dataBtn" id="btnAddNodo" type="button">Agregar</button>
                    </div>
                    <div class="removeNodoContainer">
                        <label for="removeNodoValue">Eliminar dato
                            <input class="listInput" type="number" placeholder="en lista" id="removeNodoValue">
                        </label>
                        <button class="dataBtn" id="btnRemoveNodo" type="button">Eliminar</button>
                    </div>
                </div>
                <div class="linkedListItemContainer border" id="linkedListItemContainer">
                    <div class="listItem" id="listItem">
                        <div class="data" id="data">1</div>
                        <div class="next" id="next">ref</div>
                    </div>
                </div>
            </div>
        </div>
    `
    return listaEnlazadaContainer
}

export { listaEnlazadaUi }