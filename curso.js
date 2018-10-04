var h = document.head;
console.log(h);

var b = document.body;
console.log(b);


if (document.body.nodeType === document.ELEMENT_NODE) {
    console.log("Body es un nodo elemento (etiqueta de html como div, p, h1, etc)");
} else {
    console.log("Body es un nodo de texto");
}

