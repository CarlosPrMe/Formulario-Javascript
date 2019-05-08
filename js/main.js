window.addEventListener('load', init);


/*  let vhtml = `<div class="summary">
                <div class="top">
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="409" height="409" viewbox="0 0 409 409">
                        <path
                            d="M204.583 216.671c50.664 0 91.74-48.075 91.74-107.378 0-82.237-41.074-107.377-91.74-107.377-50.668 0-91.74 25.14-91.74 107.377.001 59.303 41.073 107.378 91.74 107.378zm202.581 158.046L360.88 270.454c-2.117-4.771-5.836-8.728-10.465-11.138l-71.83-37.392c-1.584-.823-3.502-.663-4.926.415-20.316 15.366-44.203 23.488-69.076 23.488-24.877 0-48.762-8.122-69.078-23.488-1.428-1.078-3.346-1.238-4.93-.415L58.75 259.316c-4.631 2.41-8.346 6.365-10.465 11.138L2.001 374.717c-3.191 7.188-2.537 15.412 1.75 22.005 4.285 6.592 11.537 10.526 19.4 10.526h362.861c7.863 0 15.117-3.936 19.402-10.527 4.285-6.592 4.941-14.819 1.75-22.004z" />
                    </svg> 
                </div>
                <div class="container-data">
                    <address class="container-data__address">
                        <span class="container-data__header"></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <button class="btn btn--sm">Borrar</button>
                    </address>
                </div>
            </div>`;  */

let svg = `<svg class="icon" xmlns="http://www.w3.org/2000/svg" width="409" height="409" viewbox="0 0 409 409">
    <path
        d="M204.583 216.671c50.664 0 91.74-48.075 91.74-107.378 0-82.237-41.074-107.377-91.74-107.377-50.668 0-91.74 25.14-91.74 107.377.001 59.303 41.073 107.378 91.74 107.378zm202.581 158.046L360.88 270.454c-2.117-4.771-5.836-8.728-10.465-11.138l-71.83-37.392c-1.584-.823-3.502-.663-4.926.415-20.316 15.366-44.203 23.488-69.076 23.488-24.877 0-48.762-8.122-69.078-23.488-1.428-1.078-3.346-1.238-4.93-.415L58.75 259.316c-4.631 2.41-8.346 6.365-10.465 11.138L2.001 374.717c-3.191 7.188-2.537 15.412 1.75 22.005 4.285 6.592 11.537 10.526 19.4 10.526h362.861c7.863 0 15.117-3.936 19.402-10.527 4.285-6.592 4.941-14.819 1.75-22.004z" />
</svg>`;
let vhtml2 = $('<div></div>').addClass('summary');
let vtop = $('<div></div>').addClass('top');
vhtml2.append(vtop.append(svg));
//vtop.append(svg);
let containerData = $('<div></div>').addClass('container-data');
let span = $('<span></span>');
let button = $('<button></button>').addClass('btn btn--sm').text('Borrar');
let address = $('<address></address>').addClass('container-data__address');
address.append(span)
    .prepend($('<span></span>'))
    .prepend($('<span></span>'))
    .prepend($('<span></span>')
    .addClass('container-data__header'))
    .append(button);
containerData.append(address);
vhtml2.append(containerData);


console.log(vhtml2);


let vform = {
    campo1: {
        labelText: 'Nombre',
        labelClass: 'form__label',
        labelFor: 'name',
        inputType: 'text',
        inputClass: 'form__control',
        inputId: 'name',
    },
    campo2: {
        labelText: 'Apellidos',
        labelClass: 'form__label',
        labelFor: 'surname',
        inputType: 'text',
        inputClass: 'form__control',
        inputId: 'surname',
    },
    campo3: {
        labelText: 'Teléfono',
        labelClass: 'form__label',
        labelFor: 'phone',
        inputType: 'tel',
        inputClass: 'form__control',
        inputId: 'phone',
    },
    campo4: {
        labelText: 'Dirección',
        labelClass: 'form__label',
        labelFor: 'address',
        inputType: 'text',
        inputClass: 'form__control',
        inputId: 'address',
    },
    campo5: {
        labelText: 'Código Postal',
        labelClass: 'form__label',
        labelFor: 'postal-code',
        inputType: 'text',
        inputClass: 'form__control',
        inputId: 'postal-code',
    },
    campo6: {
        labelText: 'Ciudad',
        labelClass: 'form__label',
        labelFor: 'city',
        inputType: 'text',
        inputClass: 'form__control',
        inputId: 'city',
    },

};

function createForm(form) {

    const buttons = $('.buttons');

    for (let vformGroup in form) {
        let vdiv = $('<div class="form__group"></div>');
        let vlabel = $('<label></label>');
        let vinput = $('<input>');
        vlabel.addClass(form[vformGroup].labelClass);
        vlabel.attr('for', form[vformGroup].labelFor);
        vlabel.text(form[vformGroup].labelText);
        vdiv.append(vlabel);
        vinput.addClass(form[vformGroup].inputClass);
        vinput.attr('id', form[vformGroup].inputId);
        vinput.attr('type', form[vformGroup].inputType);
        vdiv.append(vinput);
        buttons.before(vdiv);

    }

}




function init() {

    createForm(vform);
    $('.general').append(vhtml2);

    $('.form:first').on('submit', submit)

    $('.container-data .btn:first').on('click', function () {
        let mediaquery = window.matchMedia('(max-width:767px)');
        if (mediaquery.matches) {
            $('.summary:first').addClass('show');
            $('.summary:first').addClass('hide');
        }
        $('.container-data__header').text('');
        $('.container-data__address span:nth-child(2)').text('');
        $('.container-data__address span:nth-child(3)').text('');
        $('.container-data__address span:last').text('');
    })

    $('.btn--sm:first').on('click', function () {
        $(this).css('display', 'none');
    })
}

function submit(e) {
    e.preventDefault();
    let mediaquery = window.matchMedia('(max-width:767px)');
    let nombre = $('.form__control:first').val();
    let apellidos = $('.form__group:nth-of-type(2) input').val();
    let telefono = $('.form__group:nth-of-type(3) input').val();
    let direccion = $('.form__group:nth-of-type(4) input').val();
    let postal = $('.form__group:nth-of-type(5) input').val();
    let ciudad = $('.form__group:nth-of-type(6) input').val();
    $('.container-data__header').text(`${nombre} ${apellidos}`);
    $('.container-data__address span:nth-of-type(2)').text(`Tel: ${telefono}`);
    $('.container-data__address span:nth-of-type(3)').text(`${direccion}`);
    $('.container-data__address span:nth-of-type(4)').text(`${postal} ${ciudad}`);

    if (mediaquery.matches) {
        $('.summary').addClass('show');
        $('.summary').removeClass('hide');
    }

    $('.btn--sm').css('display', 'inline-block');

}