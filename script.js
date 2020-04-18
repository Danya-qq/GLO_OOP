const container = document.querySelector('.container');

function DomElement(selector, height, width, bg, fontSize){
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;

};

DomElement.prototype.addElem = function(text = ''){
    let elem;
    if (this.selector.startsWith('.')) {
        elem = document.createElement('div')
        elem.setAttribute('class', this.selector.slice(1));
        console.log(elem);
    } else if (this.selector.startsWith('#')) {
        elem = document.createElement('p');
        elem.setAttribute('id', this.selector.slice(1));
        console.log(elem);
    } else return;
   
    container.append(elem);

    elem.style.cssText = `${this.height}; ${this.width}; ${this.bg}; ${this.fontSize}`;
    elem.innerHTML = text; 
}; 

let element1 = new DomElement('.block', 'height: 30px', 'width: 560px', 'background-color: green', 'font-size: 20px');
let element2 = new DomElement('#block', 'height: 30px', 'width: 560px', 'background-color: green', 'font-size: 20px');


element1.addElem('aaaa');
element2.addElem('Text')







