//Formulario
let hoy = new Date();
let diaReserva = document.getElementById('fecha');
diaReserva.value = hoy.toISOString().split('T')[0];
diaReserva.setAttribute('min', diaReserva.value);

let submitBtn = document.querySelector(".submitBtn");
submitBtn.addEventListener("click", fnClick);

let itemForm = document.querySelectorAll(".itemForm");

function fnClick(e) {
    e.preventDefault();

    if( (itemForm[0].value=="")||(itemForm[1].value=="")||(itemForm[2].value=="")||(itemForm[3].value=="")||(itemForm[4].value=="")||(itemForm[5].value=="")|(itemForm[6].value=="")|(itemForm[7].value=="") ){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor, complete todos los datos.',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#202020'
          })
    }else{
        Swal.fire({
            icon: 'success',
            title: 'Reserva Confirmada',
            title: 'Tu reserva se confirmó exitosamente. ¡Nos vemos pronto!',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#202020'
            });
        itemForm.forEach((input) => {
            input.value = "";          
        });
    }
}