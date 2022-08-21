


function encryptInputValue(){
    var matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    var textArea = document.querySelector("textarea").value.toLocaleLowerCase();

    var Section2 = document.querySelector(".Section2");
    var Section2_fullMessage = document.querySelector(".Section2-fullMessage");
    var Section2_text = document.querySelector(".Section2-text");
    var Section2_img = document.querySelector(".Section2-img");


    for (let index = 0; index < matrizCodigo.length; index++) {
        if (textArea.includes(matrizCodigo[index][0])) {
            textArea = textArea.replaceAll(matrizCodigo[index][0], matrizCodigo[index][1]);
        }
    }
    Section2.style.display = "block";
    Section2_text.style.display = "none";
    Section2_img.style.display = "none";
    Section2_fullMessage.style.display = "flex";
    document.getElementById("MessageParagraph").textContent = textArea;
}

function decryptMessageValue(){
    var matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    var textArea = document.querySelector("textarea").value.toLocaleLowerCase();

    var Section2 = document.querySelector(".Section2");
    var Section2_fullMessage = document.querySelector(".Section2-fullMessage");
    var Section2_text = document.querySelector(".Section2-text");
    var Section2_img = document.querySelector(".Section2-img");


    for (let index = 0; index < matrizCodigo.length; index++) {
        if (textArea.includes(matrizCodigo[index][1])) {
            textArea = textArea.replaceAll(matrizCodigo[index][1], matrizCodigo[index][0]);
        }
    }
    Section2.style.display = "block";
    Section2_text.style.display = "none";
    Section2_img.style.display = "none";
    Section2_fullMessage.style.display = "flex";
    document.getElementById("MessageParagraph").textContent = textArea;
}

function copyMessage() {
    var mensaje = document.querySelector("#MessageParagraph");
    navigator.clipboard.writeText(mensaje.innerHTML);

}