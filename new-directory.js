const dirHeaders = Array.from(document.querySelectorAll('.dir-header'));
const dirContWraps = Array.from(document.querySelectorAll('.dir-cont-wrap'));
const allh4 = Array.from(document.querySelectorAll('h4'));
const allDetails = Array.from(document.querySelectorAll(`.cont-details`));

function headerClick(e){
    const sectionNum = this.id[this.id.length - 1];
    const contWrapEl = document.querySelector(`#dir-cont-wrap-${sectionNum}`);

    if(!contWrapEl.classList.contains('open')){
        dirContWraps.forEach(cont => {
            if(cont.id != contWrapEl.id){
                cont.classList.remove("open");
            }
        })
        allDetails.forEach(detail => {
            detail.classList.remove("open");
            detail.style.display="none";
            detail.previousElementSibling.childNodes[1].innerHTML = "+";
        })
        setTimeout(()=> {
            contWrapEl.classList.add("open");
        }
        ,100);
    }
    else {
        contWrapEl.classList.remove("open");
        Array.from(document.querySelectorAll(`.cont${sectionNum}-details`)).forEach(detail => {
            detail.classList.remove("open");
            detail.style.display="none";
            detail.previousElementSibling.childNodes[1].innerHTML = "+";
    })
    }
}

function clickCont(){
    const sectNum = this.id[this.id.length - 2];
    const contNum = this.id[this.id.length - 1];
    const clickedH4 = document.querySelector(`#cont${sectNum}${contNum}`);
    const plus = clickedH4.childNodes[1];
    const details = document.querySelector(`#cont-details${sectNum}${contNum}`);
    const allSectDetails = Array.from(document.querySelectorAll(`.cont${sectNum}-details`));

    if(details.style.display != "flex"){
        details.style.display = "flex";
        setTimeout(()=>details.classList.add('open'),100);
        plus.innerHTML = "-";
    }
    else{
        details.classList.remove('open');
        plus.innerHTML = "+";
        setTimeout(()=>details.style.display="none",500);
    }
    allSectDetails.forEach(detail => {
        if(detail.id != details.id && detail.style.display == "flex"){
            detail.style.display = "none";
            detail.classList.remove('open');
            detail.previousElementSibling.childNodes[1].innerHTML = "+";
        }
    })
}

dirHeaders.forEach(dirHeader => dirHeader.addEventListener('click',headerClick));
allh4.forEach(h4 => h4.addEventListener('click',clickCont));
