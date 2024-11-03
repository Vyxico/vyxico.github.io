const cells = document.querySelectorAll(".cell");
const columns = document.querySelectorAll(".cell_column");
const container = document.querySelector("#cell_container")

let current_turn = 0;

function switch_turns() {
    if (current_turn == 0) { current_turn = 1; }
    else { current_turn = 0; }
}

function set_cell_color(cell) {
    if (current_turn == 0) {
        cell.setAttribute("style", "background-color: rgb(252, 249, 80)");
    } else {
        cell.setAttribute("style", "background-color: rgb(252, 53, 53)");
    }
}

function place_coin(column_index) {
    const column = Array.from(container.children)[column_index];
    const column_children = Array.from(column.children);

    // Inverse the list of cells
    let column_children_inversed = new Array(column_children.length);
    for (i = 0; i < column_children.length; i++) {
        column_children_inversed[i] = column_children[column_children.length - 1 - i];
    }

    let placed_coin = false;
    column_children_inversed.forEach((cell) => {
        if (placed_coin == true) return;

        if (cell.getAttribute("coin_color") != 0 && cell.getAttribute("coin_color") != 1) {
            cell.setAttribute("coin_color", current_turn);
            set_cell_color(cell);
            switch_turns();
            placed_coin = true;
        }
    });
}