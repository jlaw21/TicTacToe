playerTurn = "X";

let createTable = function(){

    let box1 = document.createElement("TD");
    let box2 = document.createElement("TD");
    let box3 = document.createElement("TD");
    let box4 = document.createElement("TD");
    let box5 = document.createElement("TD");
    let box6 = document.createElement("TD");
    let box7 = document.createElement("TD");
    let box8 = document.createElement("TD");
    let box9 = document.createElement("TD");

    let row1 = document.createElement("TR");
    let row2 = document.createElement("TR");
    let row3 = document.createElement("TR");

    let table = document.createElement("TABLE");

    let image = document.createElement("IMG");
    image.onmouseover=function(){showHover(this)};
    image.onmouseout=function(){showOut(this)};
    image.onclick=function(){placeToken(this)};
    image.src="black-square.gif";

    let image2 = document.createElement("IMG");
    image2.onmouseover=function(){showHover(this)};
    image2.onmouseout=function(){showOut(this)};
    image2.onclick=function(){placeToken(this)};
    image2.src="black-square.gif";

    let image3 = document.createElement("IMG");
    image3.onmouseover=function(){showHover(this)};
    image3.onmouseout=function(){showOut(this)};
    image3.onclick=function(){placeToken(this)};
    image3.src="black-square.gif";

    let image4 = document.createElement("IMG");
    image4.onmouseover=function(){showHover(this)};
    image4.onmouseout=function(){showOut(this)};
    image4.onclick=function(){placeToken(this)};
    image4.src="black-square.gif";

    let image5 = document.createElement("IMG");
    image5.onmouseover=function(){showHover(this)};
    image5.onmouseout=function(){showOut(this)};
    image5.onclick=function(){placeToken(this)};
    image5.src="black-square.gif";

    let image6 = document.createElement("IMG");
    image6.onmouseover=function(){showHover(this)};
    image6.onmouseout=function(){showOut(this)};
    image6.onclick=function(){placeToken(this)};
    image6.src="black-square.gif";

    let image7 = document.createElement("IMG");
    image7.onmouseover=function(){showHover(this)};
    image7.onmouseout=function(){showOut(this)};
    image7.onclick=function(){placeToken(this)};
    image7.src="black-square.gif";

    let image8 = document.createElement("IMG");
    image8.onmouseover=function(){showHover(this)};
    image8.onmouseout=function(){showOut(this)};
    image8.onclick=function(){placeToken(this)};
    image8.src="black-square.gif";

    let image9 = document.createElement("IMG");
    image9.onmouseover=function(){showHover(this)};
    image9.onmouseout=function(){showOut(this)};
    image9.onclick=function(){placeToken(this)};
    image9.src="black-square.gif";

    box1.appendChild(image);
    box2.appendChild(image2);
    box3.appendChild(image3);
    box4.appendChild(image4);
    box5.appendChild(image5);
    box6.appendChild(image6);
    box7.appendChild(image7);
    box8.appendChild(image8);
    box9.appendChild(image9);

    row1.appendChild(box1);
    row1.appendChild(box2);
    row1.appendChild(box3);

    row2.appendChild(box4);
    row2.appendChild(box5);
    row2.appendChild(box6);

    row3.appendChild(box7);
    row3.appendChild(box8);
    row3.appendChild(box9);

    table.appendChild(row1);
    table.appendChild(row2);
    table.appendChild(row3);

    let content = document.getElementById("content");

    content.appendChild(table);

};

let showHover = function(id){
    if(playerTurn === "X"){
        id.src="x-image.jpg";
    }else
        id.src="0-image.jpg";
};

let showOut = function(id){
    id.src="black-square.gif";
};

let placeToken = function(id){
    if(playerTurn === "X"){
        id.src="x-image.jpg";
        id.onmouseover = "";
        id.onmouseout = "";
        playerTurn = "O";
    }else{
        id.src="0-image.jpg";
        id.onmouseover = "";
        id.onmouseout = "";
        playerTurn = "X";
    }
};
