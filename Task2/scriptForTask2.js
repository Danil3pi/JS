/**
     * Позиционирует элемент elem относительно элемента anchor в соответствии со значением position.
     *
     * @param {Node} anchor     элемент, около которого позиционируется другой элемент
     * @param {string} position одно из: top/right/bottom
     * @param {Node} elem       элемент, который позиционируется
     *
     * Оба элемента elem и anchor должны присутствовать в документе
     */
// function positionAt(anchor, position, elem) {
//     let anchorBlock = anchor.getBoundingClientRect();
//     let elemBlock = elem.getBoundingClientRect();
//     console.log(anchorBlock);
//     elem.style.position = 'fixed';

//     //* можно было не создавать elemBlock, ведь получить ширину и высоту 
//     //* можно с помощью offsetWidth and offsetHeight

//     switch(position){
//         case 'top' : {
//             //elem.style.top = anchorBlock.top - elemBlock.height +'px';
//             //* Вот о чем те два коммента
//             elem.style.top = anchorBlock.top - elem.offsetHeight +'px';
//             elem.style.left = anchorBlock.left  + 'px';
//         }; break;
//         case 'right' : {
//             elem.style.left = anchorBlock.right + 'px';
//             elem.style.top = anchorBlock.top + 'px';
//         }; break;
//         case 'bottom' : {
//             elem.style.top = anchorBlock.bottom + 'px';
//             elem.style.left = anchorBlock.left + 'px';
//         }; break;
//         case 'left' : {
//             elem.style.left = anchorBlock.left - elem.offsetWidth +'px';
//             //elem.style.left = anchorBlock.left - elemBlock.width + 'px';
//             elem.style.top = anchorBlock.top + 'px';
//         }; break;
//         default: break;
//     }
// }

function getCoordsRelativeDocument(elem) {
    return {
        top: elem.top + pageYOffset,
        right: elem.right + pageXOffset,
        bottom: elem.bottom + pageYOffset,
        left: elem.left + pageXOffset,

        middleHeight: elem.top + pageYOffset + (elem.height / 2),
        middleWidth: elem.left + pageXOffset + (elem.width / 2),
    }
}

// function positionAt(anchor, position, elem) {
//     let anchorBlock = anchor.getBoundingClientRect();
//     //let elemBlock = elem.getBoundingClientRect();
//     elem.style.position = 'absolute';

//     //* можно было не создавать elemBlock, ведь получить ширину и высоту 
//     //* можно с помощью offsetWidth and offsetHeight
//     let anchorCoords = getCoordsRelativeDocument(anchorBlock);

//     switch(position){
//         case 'top' : {
//             //elem.style.top = anchorBlock.top - elemBlock.height +'px';
//             //* Вот о чем те два коммента
//             elem.style.top = anchorCoords.top - elem.offsetHeight +'px';
//             elem.style.left = anchorCoords.left + 'px';
//         }; break;
//         case 'right' : {
//             elem.style.left = anchorCoords.right + 'px';
//             elem.style.top = anchorCoords.top + 'px';
//         }; break;
//         case 'bottom' : {
//             elem.style.top = anchorCoords.bottom + 'px';
//             elem.style.left = anchorCoords.left + 'px';
//         }; break;
//         case 'left' : {
//             elem.style.left = anchorCoords.left - elem.offsetWidth +'px';
//             //elem.style.left = anchorBlock.left - elemBlock.width + 'px';
//             elem.style.top = anchorCoords.top + 'px';
//         }; break;
//         default: break;
//     }
// }

function positionAt(anchor, position, elem) {
    let anchorBlock = anchor.getBoundingClientRect();
    elem.style.position = 'absolute';

    //* можно было не создавать elemBlock, ведь получить ширину и высоту 
    //* можно с помощью offsetWidth and offsetHeight
    let anchorCoords = getCoordsRelativeDocument(anchorBlock);

    switch(position){
        case 'top-out' : {
            //elem.style.top = anchorBlock.top - elemBlock.height +'px';
            //* Вот о чем те два коммента
            elem.style.top = anchorCoords.top - elem.offsetHeight +'px';
            elem.style.left = anchorCoords.left + 'px';
        }; break;
        case 'right-out' : {
            elem.style.left = anchorCoords.right + 'px';
            elem.style.top = anchorCoords.top + 'px';
        }; break;
        case 'bottom-out' : {
            elem.style.top = anchorCoords.bottom + 'px';
            elem.style.left = anchorCoords.left + 'px';
        }; break;
        case 'left-out' : {
            elem.style.left = anchorCoords.left - elem.offsetWidth +'px';
            //elem.style.left = anchorBlock.left - elemBlock.width + 'px';
            elem.style.top = anchorCoords.top + 'px';
        }; break;
        //!--------------------------------------------------------------------
        case 'top-in' : {
            //elem.style.top = anchorBlock.top - elemBlock.height +'px';
            //* Вот о чем те два коммента
            elem.style.top = anchorCoords.top +'px';
            elem.style.left = anchorCoords.middleWidth - (elem.offsetWidth / 2) + 'px';
        }; break;
        case 'right-in' : {
            elem.style.left = anchorCoords.right - elem.offsetWidth + 'px';
            elem.style.top = anchorCoords.middleHeight - (elem.offsetHeight/2) +'px';
        }; break;
        case 'bottom-in' : {
            elem.style.top = anchorCoords.bottom - elem.offsetHeight + 'px';
            elem.style.left =  anchorCoords.middleWidth - (elem.offsetWidth / 2) + 'px';
        }; break;
        case 'left-in' : {
            elem.style.left = anchorCoords.left +'px';
            //elem.style.left = anchorBlock.left - elemBlock.width + 'px';
            elem.style.top = anchorCoords.middleHeight - (elem.offsetHeight/2) +'px';
        }; break;
        default: break;
    }
}


/**
 * Показывает заметку с заданным содержимым на заданной позиции
 * относительно элемента anchor.
 */
function showNote(anchor, position, html) {
    let note = document.createElement('div');
    note.className = "note";
    note.innerHTML = html;
    document.body.append(note);

    positionAt(anchor, position, note);
}

// test it
let blockquote = document.querySelector('blockquote');
blockquote.style.cssText = 'position: relative;'
showNote(blockquote, "top-in", "note above-in");
showNote(blockquote, "right-in", "note at the right-in");
showNote(blockquote, "left-in", "note at the left-in");
showNote(blockquote, "bottom-in", "note below-in");

showNote(blockquote, "top-out", "note above-out");
showNote(blockquote, "right-out", "note at the right-out");
showNote(blockquote, "left-out", "note at the left-out");
showNote(blockquote, "bottom-out", "note below-out");