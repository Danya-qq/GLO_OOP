document.addEventListener("DOMContentLoaded", ready);
const container = document.querySelector('.container');
console.log(container);

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
        elem = document.createElement('div');
        elem.setAttribute('id', this.selector.slice(1));
        console.log(elem);
    } else return;
   
    container.append(elem);
    // let props = `${this.height}; ${this.bg}; ${this.width}; ${this.fontSize}`;  
    // elem.setAttribute('style', props);
    elem.style.cssText = `${this.height}; ${this.width}; ${this.bg}; ${this.fontSize}`;
    elem.innerHTML = text; 
}; 

let element1 = new DomElement('.block', 'height: 30px', 'width: 560px', 'background-color: green', 'font-size: 20px');

let element2 = new DomElement('.block', 'height: 50px', 'width: 200px', 'background-color: yellow', 'font-size: 40px');
 
element1.addElem('aaaa');
element2.addElem();






