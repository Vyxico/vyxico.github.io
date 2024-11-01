const cells = document.querySelectorAll(".cell");
const restart_button = document.querySelector("#restart_button");
const player_score_text = document.querySelector("#player_score");
const computer_score_text = document.querySelector("#computer_score");
let player_score = 0;
let computer_score = 0;
const win_conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
let current_turn = "X";

function switch_turns() {
    if (current_turn == "X") { current_turn = "O"; }
    else { current_turn = "X"; }
}

function cell_clicked(index) {
    let cell = cells.item(index);
    if (cell.textContent != "") { return; }
    cell.textContent = current_turn;
    if (get_won() == true) {
        if (current_turn == "X") { player_score++; player_score_text.textContent = player_score; }
        if (current_turn == "O") { computer_score++; computer_score_text.textContent = computer_score; }
        restart();
        return;
    }
    if (get_draw() == true) {
        restart();
        return;
    }
    switch_turns();
}

function get_won() {
    let won = false;
    win_conditions.forEach((condition) => {
        if (cells[condition[0]].textContent == "X" && cells[condition[1]].textContent == "X" && cells[condition[2]].textContent == "X") {
            won = true;
        }
        if (cells[condition[0]].textContent == "O" && cells[condition[1]].textContent == "O" && cells[condition[2]].textContent == "O") {
            won = true;
        }
    });
    return won;
}

function get_draw() {
    let is_draw = true;
    cells.forEach((cell) => {
        if (cell.textContent == "") { is_draw = false; }
    });

    return is_draw;
}

function restart() {
    cells.forEach((cell) => {
        cell.textContent = "";
    });
    current_turn = "X";
}

function reset() {
    restart();
    computer_score = 0;
    player_score = 0;
    player_score_text.textContent = player_score;
    computer_score_text.textContent = computer_score;
}