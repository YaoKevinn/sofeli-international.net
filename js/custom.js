
(function($) {
    'use strict';

    // Main Navigation
    $( '.hamburger-menu' ).on( 'click', function() {
        $(this).toggleClass('open');
        $('.site-navigation').toggleClass('show');
    });

    // Testimonial Slider
    var swiper = new Swiper('.testimonial-slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        effect: 'fade',
        speed: 800,
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        }
    });

    $('.gallery-wrap').masonry({
        itemSelector: '.gallery-grid'
    });

    // Accordion & Toggle
    $('.accordion-wrap.type-accordion').collapsible({
        accordion: true,
        contentOpen: 0,
        arrowRclass: 'arrow-r',
        arrowDclass: 'arrow-d'
    });

    $('.accordion-wrap .entry-title').on('click', function() {
        $('.accordion-wrap .entry-title').removeClass('active');
        $(this).addClass('active');
    });

})(jQuery);


/* ------------------------------ Custom --------------------------------------- */

const todosBtn = document.querySelector('#all-btn a');
const crBtn = document.querySelector('#cr-btn a');
const pBtn = document.querySelector('#p-btn a');
const zBtn = document.querySelector('#z-btn a');
const crSection = document.querySelector('.cr-section');
const pSection = document.querySelector('.p-section');
const zSection = document.querySelector('.z-section');

var crImgArray = ["600","601","701","702","705","801","801-1","802","803","804","2002","2500","2502","2503","2504","2505","2506","2507","2508","2509","2516","10801",
                "102527","F201","F203","F2518","F2519","F2521","F7501","x1"];

var crDescripArray = ["DIMENSIONES: </br></br> Ancho: &nbsp&nbsp&nbsp 19.5&nbsp cm </br> Espesor:&nbsp 6&nbsp mm </br> Largo: &nbsp&nbsp&nbsp 4.5&nbspm y 6&nbspm",
                    "DIMENSIONES: </br></br> Ancho: &nbsp&nbsp&nbsp 19.5&nbsp cm </br> Espesor:&nbsp 6&nbsp mm </br> Largo: &nbsp&nbsp&nbsp 4,5&nbspm y 6&nbspm",
                    "DIMENSIONES: </br></br> Ancho: &nbsp&nbsp&nbsp 20&nbsp cm </br> Espesor:&nbsp 7.5&nbsp mm </br> Largo: &nbsp&nbsp&nbsp 4,5&nbspm y 6&nbspm",
                    "DIMENSIONES: </br></br> Ancho: &nbsp&nbsp&nbsp 20&nbsp cm </br> Espesor:&nbsp 7.5&nbsp mm </br> Largo: &nbsp&nbsp&nbsp 4,5&nbspm y 6&nbspm",
                    "DIMENSIONES: </br></br> Ancho: &nbsp&nbsp&nbsp 20&nbsp cm </br> Espesor:&nbsp 7.5&nbsp mm </br> Largo: &nbsp&nbsp&nbsp 4,5&nbspm y 6&nbspm",
                    "DIMENSIONES: </br></br> Ancho: &nbsp&nbsp&nbsp 20&nbsp cm </br> Espesor:&nbsp 7.5&nbsp mm </br> Largo: &nbsp&nbsp&nbsp 4,5&nbspm y 6&nbspm",
                    "DIMENSIONES: </br></br> Ancho: &nbsp&nbsp&nbsp 25&nbsp cm </br> Espesor:&nbsp 7.5&nbsp mm </br> Largo: &nbsp&nbsp&nbsp 4,5&nbspm y 6&nbspm",
                    "DIMENSIONES: </br></br> Ancho: &nbsp&nbsp&nbsp 20&nbsp cm </br> Espesor:&nbsp 7.5&nbsp mm </br> Largo: &nbsp&nbsp&nbsp 4,5&nbspm y 6&nbspm",
                    "DIMENSIONES: </br></br> Ancho: &nbsp&nbsp&nbsp 20&nbsp cm </br> Espesor:&nbsp 7.5&nbsp mm </br> Largo: &nbsp&nbsp&nbsp 4,5&nbspm y 6&nbspm",
                    "DIMENSIONES: </br></br> Ancho: &nbsp&nbsp&nbsp 20&nbsp cm </br> Espesor:&nbsp 7.5&nbsp mm </br> Largo: &nbsp&nbsp&nbsp 4,5&nbspm y 6&nbspm",
                    "DIMENSIONES: </br></br> Ancho: &nbsp&nbsp&nbsp 25&nbsp cm </br> Espesor:&nbsp 10&nbsp mm </br> Largo: &nbsp&nbsp&nbsp 4,5&nbspm y 6&nbspm",
                    "DIMENSIONES: </br></br> Ancho: &nbsp&nbsp&nbsp 25&nbsp cm </br> Espesor:&nbsp 10&nbsp mm </br> Largo: &nbsp&nbsp&nbsp 4,5&nbspm y 6&nbspm",
                    "DIMENSIONES: </br></br> Ancho: &nbsp&nbsp&nbsp 25&nbsp cm </br> Espesor:&nbsp 7.5&nbsp mm </br> Largo: &nbsp&nbsp&nbsp 4,5&nbspm y 6&nbspm",
                    "DIMENSIONES: </br></br> Ancho: &nbsp&nbsp&nbsp 25&nbsp cm </br> Espesor:&nbsp 7.5&nbsp mm </br> Largo: &nbsp&nbsp&nbsp 4,5&nbspm y 6&nbspm",
                    "DIMENSIONES: </br></br> Ancho: &nbsp&nbsp&nbsp 25&nbsp cm </br> Espesor:&nbsp 7.5&nbsp mm </br> Largo: &nbsp&nbsp&nbsp 4,5&nbspm y 6&nbspm",
                    "DIMENSIONES: </br></br> Ancho: &nbsp&nbsp&nbsp 25&nbsp cm </br> Espesor:&nbsp 10&nbsp mm </br> Largo: &nbsp&nbsp&nbsp 4,5&nbspm y 6&nbspm",
                    "DIMENSIONES: </br></br> Ancho: &nbsp&nbsp&nbsp 25&nbsp cm </br> Espesor:&nbsp 7.5&nbsp mm </br> Largo: &nbsp&nbsp&nbsp 4,5&nbspm y 6&nbspm",
                    "DIMENSIONES: </br></br> Ancho: &nbsp&nbsp&nbsp 25&nbsp cm </br> Espesor:&nbsp 7.5&nbsp mm </br> Largo: &nbsp&nbsp&nbsp 4,5&nbspm y 6&nbspm",
                    "DIMENSIONES: </br></br> Ancho: &nbsp&nbsp&nbsp 25&nbsp cm </br> Espesor:&nbsp 7.5&nbsp mm </br> Largo: &nbsp&nbsp&nbsp 4,5&nbspm y 6&nbspm",
                    "DIMENSIONES: </br></br> Ancho: &nbsp&nbsp&nbsp 25&nbsp cm </br> Espesor:&nbsp 10&nbsp mm </br> Largo: &nbsp&nbsp&nbsp 4,5&nbspm y 6&nbspm",
                    "DIMENSIONES: </br></br> Ancho: &nbsp&nbsp&nbsp 25&nbsp cm </br> Espesor:&nbsp 10&nbsp mm </br> Largo: &nbsp&nbsp&nbsp 4,5&nbspm y 6&nbspm",
                    "DIMENSIONES: </br></br> Ancho: &nbsp&nbsp&nbsp 25&nbsp cm </br> Espesor:&nbsp 10&nbsp mm </br> Largo: &nbsp&nbsp&nbsp 4,5&nbspm y 6&nbspm",
                    "DIMENSIONES: </br></br> Ancho: &nbsp&nbsp&nbsp 25&nbsp cm </br> Espesor:&nbsp 10&nbsp mm </br> Largo: &nbsp&nbsp&nbsp 4,5&nbspm y 6&nbspm",
                    "DIMENSIONES: </br></br> Ancho: &nbsp&nbsp&nbsp 20&nbsp cm </br> Espesor:&nbsp 10&nbsp mm </br> Largo: &nbsp&nbsp&nbsp 4,5&nbspm y 6&nbspm",
                    "DIMENSIONES: </br></br> Ancho: &nbsp&nbsp&nbsp 20&nbsp cm </br> Espesor:&nbsp 10&nbsp mm </br> Largo: &nbsp&nbsp&nbsp 6&nbspm",
                    "DIMENSIONES: </br></br> Ancho: &nbsp&nbsp&nbsp 25&nbsp cm </br> Espesor:&nbsp 10&nbsp mm </br> Largo: &nbsp&nbsp&nbsp 6&nbspm",
                    "DIMENSIONES: </br></br> Ancho: &nbsp&nbsp&nbsp 25&nbsp cm </br> Espesor:&nbsp 10&nbsp mm </br> Largo: &nbsp&nbsp&nbsp 6&nbspm",
                    "DIMENSIONES: </br></br> Ancho: &nbsp&nbsp&nbsp 25&nbsp cm </br> Espesor:&nbsp 10&nbsp mm </br> Largo: &nbsp&nbsp&nbsp 6&nbspm",
                    "DIMENSIONES: </br></br> Ancho: &nbsp&nbsp&nbsp 20&nbsp cm </br> Espesor:&nbsp 7.5&nbsp mm </br> Largo: &nbsp&nbsp&nbsp 6&nbspm",
                    "DIMENSIONES: </br></br> Ancho: &nbsp&nbsp&nbsp 19.5&nbsp cm </br> Espesor:&nbsp 6&nbsp mm </br> Largo: &nbsp&nbsp&nbsp 4,5&nbspm y 6&nbspm"];

var pImgArray = ["F124","FD003","FD004","FD005"];

var pDescripArray = ["DIMENSIONES: </br></br> Ancho: &nbsp&nbsp&nbsp 40&nbsp cm </br> Largo:&nbsp&nbsp&nbsp&nbsp 2.8&nbsp m </br> Altura: &nbsp&nbsp&nbsp 6&nbsp mm",
                    "DIMENSIONES: </br></br> Ancho: &nbsp&nbsp&nbsp 40&nbsp cm </br> Largo:&nbsp&nbsp&nbsp&nbsp 2.8&nbsp m </br> Altura: &nbsp&nbsp&nbsp 6&nbsp mm",
                    "DIMENSIONES: </br></br> Ancho: &nbsp&nbsp&nbsp 40&nbsp cm </br> Largo:&nbsp&nbsp&nbsp&nbsp 2.8&nbsp m </br> Altura: &nbsp&nbsp&nbsp 6&nbsp mm",
                    "DIMENSIONES: </br></br> Ancho: &nbsp&nbsp&nbsp 40&nbsp cm </br> Largo:&nbsp&nbsp&nbsp&nbsp 2.8&nbsp m </br> Altura: &nbsp&nbsp&nbsp 6&nbsp mm"];

var zImgArray = ["101","102","103","104","105","106","107","108","109","110","111","112"];


for (i=0; i<crImgArray.length; i++) {

  //document.write('<div class="single-product"><img class="image" id="'+i+'" src="producto/cielo-raso/'+imgArray[i]+'.png" alt="img'+i+'" style="; width:250px; height: 200px; border-bottom : 2px solid lightgray;" ><h3 style="text-align:center;">COD '+imgArray[i]+'</h3></div>'

  const html = `<div class="card align-item-center">
                    <div id="cr${i}" class="card-img-top" style="background-image:url(producto/cielo-raso/${crImgArray[i]}.png); background-size:contain; background-position-x:-30px;"></div>
                        <div class="card-body">
                            <h5 class="card-title">Cielo Raso ${crImgArray[i]}</h5>
                        </div>
                </div>
                <div class="modal" id="modalcr${i}">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title">Cielo Raso ${crImgArray[i]}</h5>
                                    <button class="close" onclick="modalcr${i}.style.display = 'none'" type="button" name="button">
                                    <span>&times;</span>
                                    </button>
                            </div>
                            <div class="modal-body">
                            ${crDescripArray[i]}
                            </div>
                            <div class="modal-footer">
                            <button class="btn btn-primary" onclick="modalcr${i}.style.display = 'none'" type="button" name="button">Cerrar</button>
                            </div>
                        </div>
                    </div>
                </div>`;

  const div = document.createElement('div');
  div.innerHTML = html;
  div.style.display = "inline-block";
  crSection.appendChild(div);

};

for (i=0; i<pImgArray.length; i++) {

        const html = `<div class="card align-item-center">
                        <div id="p${i}" class="card-img-top" style="background-image:url(producto/pared/${pImgArray[i]}.jpg); background-size:cover; background-position-x:-30px;"></div>
                        <div class="card-body">
                            <h5 class="card-title">Pared ${pImgArray[i]}</h5>
                        </div>
                    </div>
                    <div class="modal" id="modalp${i}">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title">Pared ${pImgArray[i]}</h5>
                                        <button class="close" onclick="modalp${i}.style.display = 'none'" type="button" name="button">
                                        <span>&times;</span>
                                        </button>
                                </div>
                                <div class="modal-body">
                                ${pDescripArray[i]}
                                </div>
                                <div class="modal-footer">
                                <button class="btn btn-primary" onclick="modalp${i}.style.display = 'none'" type="button" name="button">Cerrar</button>
                                </div>
                            </div>
                        </div>
                    </div>`;

        const div = document.createElement('div');
        div.innerHTML = html;
        div.style.display = "inline-block";
        pSection.appendChild(div);

};

for (i=0; i<zImgArray.length; i++) {

        const html = `<div class="card align-item-center">
                        <div id="z${i}" class="card-img-top" style="background-image:url(producto/zocalo/${zImgArray[i]}.jpg); background-size:cover; background-position-x:-30px;"></div>
                        <div class="card-body">
                            <h5 class="card-title">Zocalo ${zImgArray[i]}</h5>
                        </div>
                    </div>
                    <div class="modal" id="modalz${i}">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title">Zocalo ${zImgArray[i]}</h5>
                                        <button class="close" onclick="modalz${i}.style.display = 'none'" type="button" name="button">
                                        <span>&times;</span>
                                        </button>
                                </div>
                                <div class="modal-body">
                                Zocalo ${zImgArray[i]}
                                </div>
                                <div class="modal-footer">
                                <button class="btn btn-primary" onclick="modalz${i}.style.display = 'none'" type="button" name="button">Cerrar</button>
                                </div>
                            </div>
                        </div>
                    </div>`;

        const div = document.createElement('div');
        div.innerHTML = html;
        div.style.display = "inline-block";
        zSection.appendChild(div);
};


const cards = document.querySelectorAll('.card-img-top');

cards.forEach(card => {
    card.addEventListener('click',(e)=>{
        const modal = document.querySelector(`#modal${e.target.id}`);
        modal.style.display = 'inline-block';
        modal.style.marginTop = '15%';
    });
});



function changeActive(btn){
    todosBtn.classList.remove('active');
    crBtn.classList.remove('active');
    pBtn.classList.remove('active');
    zBtn.classList.remove('active');

    btn.classList.add('active');
}
function changeSection(section){
    crSection.style.display = "none";
    pSection.style.display = "none";
    zSection.style.display = "none";

    section.style.display = "block";
}

todosBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    crSection.style.display = "block";
    pSection.style.display = "block";
    zSection.style.display = "block";
    changeActive(e.target);
});

crBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    changeSection(crSection);
    changeActive(e.target);
});

pBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    changeSection(pSection);
    changeActive(e.target);
});

zBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    changeSection(zSection);
    changeActive(e.target);
});






















//
