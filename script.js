function addTodo(){



    var s = document.getElementById("text_field").value;
    document.getElementById("text_field").value = "";

    if(s != ""){
        
        // Show the new todo on the screen

        var ol = document.getElementById("main_list");
        var li = document.createElement("li");

        li.appendChild(document.createTextNode(s));
        

        ol.appendChild(li);
    }
}

function removeLast(){
    var ol = document.getElementById("main_list");

    ol.removeChild(ol.lastChild);
}

function removeAll(){

    document.getElementById("text_field").value = "";

    document.getElementById("main_list").innerHTML = "";

}

