'use strict'

let field = document.getElementById('field');
let field_box = field.getBoundingClientRect();

function getPoint(event) {
    return {
        x: event.clientX,
        y: event.clientY,
    }
}

function showCoordinates(event) {
    let point = getPoint(event);

    console.log(point.x + ':' + point.y);
}

//document.addEventListener('click', showCoordinates);


console.log(`Point_one(${field_box.x}, ${field_box.y})`);
console.log(`Point_three(${field_box.left + field.clientLeft}, ${field_box.top + field.clientTop})`);
console.log(`Point_four(${field_box.right - field.clientLeft}, ${field_box.bottom - field.clientLeft})`);
console.log(`Point_two(${field_box.right}, ${field_box.bottom})`);
// console.log(field_box);
// console.dir(field);