$(document).on('ready',iniciar);
var enlace;
function iniciar(){
	$('#tabla2 div img').on('click',copiar);//Copia la imagen de la tabla 2	
}


function copiar(){
	enlace=$(this).attr('src');
	//Llama a un atributo src en este caso la direccion del enlace src	
	$('#tabla1 div img').on('click', pegar);	
	
}

function pegar(){
	$(this).attr('src', enlace);
	
	
   var array_img = new Array();
    
	var ruta1 = document.av1.src;
	var ruta2 = document.av2.src;
	var ruta3 = document.av3.src;
	var ruta4 = document.av4.src;
	var ruta5 = document.av5.src;
	var ruta6 = document.av6.src;
	var ruta7 = document.av7.src;
	var ruta8 = document.av8.src;
	
	
    array_img[0] = ruta1;
	array_img[1] = ruta2;
	array_img[2] = ruta3;
	array_img[3] = ruta4;
	array_img[4] = ruta5;
	array_img[5] = ruta6;
	array_img[6] = ruta7;
	array_img[7] = ruta8;
	
	var array_img1 = new Array();
	
	var ruta11 = document.avi1.src;
	var ruta22 = document.avi2.src;
	var ruta33 = document.avi3.src;
	var ruta44 = document.avi4.src;
	var ruta55 = document.avi5.src;
	var ruta66 = document.avi6.src;
	var ruta77 = document.avi7.src;
	var ruta88 = document.avi8.src;
	
	
    array_img1[0] = ruta11;
	array_img1[1] = ruta22;
	array_img1[2] = ruta33;
	array_img1[3] = ruta44;
	array_img1[4] = ruta55;
	array_img1[5] = ruta66;
	array_img1[6] = ruta77;
	array_img1[7] = ruta88;
	
	
        
    $g=this;
    var c=0;
	
    for (var z=0; z<8; z++) {
		
        if(array_img[z]==array_img1[z]){
        c++;
		}else{
		break;	
		}
		
		if(c==8){
			alertify.alert("Felicitaciones!!! Has completado el rompecabezas.");
			$g.onWin();	
		}
    }	
}




