window.addEventListener('load', function () {
    console.log('Cargado');

    document.getElementsByClassName('form')[0].addEventListener('submit', function (e) {
        e.preventDefault();
        let mediaquery = window.matchMedia('(max-width:767px)');
        let nombre = document.getElementsByClassName('form__control')[0].value;
        let apellidos = document.getElementsByClassName('form__control')[1].value;
        let telefono = document.getElementsByClassName('form__control')[2].value;
        let direccion = document.getElementsByClassName('form__control')[3].value;
        let postal = document.getElementsByClassName('form__control')[4].value;
        let ciudad = document.getElementsByClassName('form__control')[5].value;
        console.log('click', nombre);
        document.getElementsByClassName('container-data__header')[0].innerText = `${nombre} ${apellidos}`;
        document.getElementsByClassName('container-data__address')[0].getElementsByTagName('span')[1].innerText = `Tel: ${telefono}`;
        document.getElementsByClassName('container-data__address')[0].getElementsByTagName('span')[2].innerText = `${direccion}`;
        document.getElementsByClassName('container-data__address')[0].getElementsByTagName('span')[3].innerText = `${postal} ${ciudad}`;

        if (mediaquery.matches) {
            document.getElementsByClassName('summary')[0].classList.add('show');
            document.getElementsByClassName('summary')[0].classList.remove('hide');
        }

        document.getElementsByClassName('btn--sm')[0].style.display='inline-block';

    })

    document.getElementsByClassName('container-data')[0].getElementsByClassName('btn')[0].addEventListener('click', function () {
        let mediaquery = window.matchMedia('(max-width:767px)');
        if (mediaquery.matches) {
            document.getElementsByClassName('summary')[0].classList.remove('show');
            document.getElementsByClassName('summary')[0].classList.add('hide');
        }
        document.getElementsByClassName('container-data__header')[0].innerText = '';
        document.getElementsByClassName('container-data__address')[0].getElementsByTagName('span')[1].innerText = '';
        document.getElementsByClassName('container-data__address')[0].getElementsByTagName('span')[2].innerText = '';
        document.getElementsByClassName('container-data__address')[0].getElementsByTagName('span')[3].innerText = '';
    })

    document.getElementsByClassName('btn--sm')[0].addEventListener('click', function(){
        this.style.display='none';
    })
})