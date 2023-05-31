function changeColor() {
    var button = document.getElementById("myButton");
    if (button.classList.contains("green")) {
        button.classList.remove("green");
        button.classList.add("blue");
    } else {
        button.classList.remove("blue");
        button.classList.add("green");
    }
}