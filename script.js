var input = document.getElementById("userinput");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");

function toggle(){
        li.addEventListener("click", function(){
        this.classList.toggle("done");
    });
    };

function inputLength(){
    return input.value.length;
}

function addNewItem(){
    var li = document.createElement("li");
    var btnRm = document.createElement("button");
    
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);

    li.addEventListener("click", function(){
        this.classList.toggle("done");
    });
    
    btnRm.appendChild(document.createTextNode("remove"));
    li.appendChild(btnRm);

    btnRm.addEventListener("click", function(){
        this.parentElement.remove();
    });

    input.value = "";
}

function addAfterClick(){
    if (inputLength() > 0) {
        addNewItem();
    }
}

function addAfterKeypress(e){
    if (inputLength() > 0 && e.which === 13) {
        addNewItem();
    }
}

button.addEventListener("click", addAfterClick);
input.addEventListener("keypress", addAfterKeypress);