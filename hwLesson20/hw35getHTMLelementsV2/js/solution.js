(() => {
    //Environment preparation begin
    const additionalDiv = document.createElement("div");
    const additionalDiv2 = document.createElement("div");

    const createListButton = document.createElement("button");
    createListButton.innerText = "Display List";

    const createTableButton = document.createElement("button");
    createTableButton.innerText = "Display Table";

    const doChangesButton = document.createElement("button");
    doChangesButton.innerText = "Do changes";

    document.body.append(additionalDiv);
    additionalDiv.append(createListButton);
    additionalDiv.append(createTableButton);
    additionalDiv.append(doChangesButton);
    additionalDiv.append(additionalDiv2);

    createListButton.addEventListener("click",
        (event) => {
            clearElement(additionalDiv2);
            inputListToElement(additionalDiv2, arr);
        });

    createTableButton.addEventListener("click",
        (event) => {
            clearElement(additionalDiv2);
            buildTable(additionalDiv2, 10, 10);
        })

    doChangesButton.addEventListener("click",
        (event) => {
            doTheHarlemShake(document.getElementById("ulId"));
        })
    //Environment preparation end

    //test array
    const arr = [1, 2, 3, [4, 5], 6, [7, 8, [9, 10], 11, 12], 13];

    function clearElement(where) {
        const collection = where.children;
        if (collection.length > 0) {
            for (let i = 0; i < collection.length; i++) {
                where.removeChild(collection[i]);
            }
        }
    }

    function inputListToElement(where, array) {
        where.append(buildList(array));

        function buildList(arr) {
            const list = document.createElement("ul");
            for (let i = 0; i < arr.length; i++) {
                if (Array.isArray(arr[i])) {
                    list.append(buildList(arr[i]));
                } else {
                    const newLi = document.createElement("li");
                    newLi.innerText = arr[i];
                    list.append(newLi);
                }
            }
            return list;
        }
    }

    function buildTable(where, rows, cols) {
        const table = document.createElement("table");
        let row = document.createElement("tr");

        for (let i = 0; i < rows * cols; i++) {
            if ((i + 1) % cols === 0) {
                let td = document.createElement("td")
                td.innerText = String(i + 1);
                row.append(td);
                table.append(row);
                row = document.createElement("tr");
            } else {
                const td = document.createElement("td");
                td.innerText = String(i + 1);
                row.append(td);
            }
        }
        where.append(table);
    }

    function doTheHarlemShake(where) {
        getAttributesToArray(where);
        updateLiElements(where);

        function getAttributesToArray(where) {
            const arrNames = [];
            const arrValues = [];
            const attributes = where.attributes;

            for (const attribute of attributes) {
                arrNames.push(attribute.name);
                arrValues.push(attribute.value);
            }
            return {
                names: arrNames,
                values: arrValues
            };
        }

        function updateLiElements(where) {
            const firstChild = where.firstElementChild;
            const lastChild = where.lastElementChild;

            firstChild.setAttribute("data-my-name", "Eduard");
            lastChild.innerText = "Hello my name is Eduard"
            if (lastChild.hasAttribute("data-dog-tail")) {
                lastChild.removeAttribute("data-dog-tail");
            }
        }
    }
})();
