//DEFINIMOS VARIABLES GLOBALES//

let usuario, clave, operar, aEliminar, indice, idEliminar
let falloAutenticacion = "Los datos ingresados son incorrectos"
let accesoDenegado = "Usted alcanzo el número de intentos permitidos"
let intentos = 0
const miLista = []




//DEFINIMOS LOS OBJETOS//

const video1 = new Contenido(1,"Talentos ocultos","Película","Drama","Video")
const video2 = new Contenido(2,"Encanto","Película","Animados","Video")
const video3 = new Contenido(3,"El jardín de bronce","Serie","Policial","Video")
const video4 = new Contenido(4,"ChicagoPD","Serie","Policial","Video")
const video5 = new Contenido(5,"El Tigre Verón","Serie","Policial","Video")
const video6 = new Contenido(6,"Padre no hay más que uno","Película","Comedia","Video")
const video7 = new Contenido(7,"Secretos de las ballenas","Serie","Documental","Video")
const video8 = new Contenido(8,"Planeta hostil","Serie","Documental","Video")
const video9 = new Contenido(9,"Secreto en los océanos","Serie","Documental","Video")
 
const Admin1 = new Administrador(1,"Admin1","Admin01")

const user1 = new Usuario(1,"user1","user01")


//DEFINIMOS ARRAYS//

const videos = [video1,video2,video3,video4,video5,video6,video7,video8,video9]

//COLOCAMOS UNA BIFURCACION PARA SEPARAR LO QUE PUEDE HACER UN USUARIO DE UN ADMINISTRADOR//

while(intentos<3){//Utilizamos el while para proporcionar un número de intentos al individuo que necesita ingresar//
    usuario = prompt("Ingrese su usuario: ")
    clave = prompt("Ingrese su clave: ")
    if(usuario == "Admin1" && clave == "Admin01"){//Con este condicional comprobamos los datos ingresados, y generamos la bifurcación//
        console.table(videos)
        operar = prompt("Desea agregar o eliminar contenido: ").toLocaleLowerCase()//Con esta variable el administrador decidira que acción realizar
        switch(operar){
            case "agregar"://En este segmento agregamos contenido a la plataforma
                const video = new Contenido(parseInt(prompt("Ingrese el id: ")), prompt("Ingrese el nombre: "), prompt("ingrese la categoria: "), prompt("Ingrese el genero: "), prompt("Ingrese el tipo: "))
                video.agregarContenido(videos,video)//Llamamos al metodo para agregar contenido
                break
            case "eliminar"://En este segmento eliminamos contenido de la plataforma
                aEliminar = prompt("Ingrese el Id del contenido a eliminar")
                const contenido=(videos.find(video => video.id == aEliminar))
                contenido.eliminarContenido(videos,contenido) 
                break
        }
        continue//Con el continue generamos un bucle que cada vez que resolvemos algo correctamente nos permite volver al inicio de seción
    }else if(usuario == "user1" && clave == "user01"){//Segmento del usuario
        operar = prompt("Si desea agregar seleccione '1' o eliminar seleccione '2': ")//Al usuario le damos la facilidad de operar con números
        switch(operar){//Verificamos que opción se eligió
            case "1":
                const contenidos = videos.map((contenido)=>contenido.obtenerContenido(videos)).join('\n')//Con este constante generamos la informacion que le será mostrada al usuario en el prompt
                const id = prompt(contenidos +"\n ingrese el Id que quiere agregar a su lista: ")//Obtenemos el Id 
                const contenido=(videos.find(video => video.id == id))//Genero la busqueda del id en el array de videos
                miLista.push(contenido)//agrego a la lista
                console.table(miLista)//Muestro una tabla
                break
            case "2":
                const elemento = miLista.map((contenido)=>contenido.obtenerContenido()).join('\n')//Con este constante generamos la informacion que le será mostrada al usuario en el prompt
                idEliminar = prompt(elemento +"\n ingrese el Id que quiere eliminar de su lista: ")//Obtenemos el Id 
                const contenidoEliminar=(miLista.find(video => video.id == idEliminar))//Genero la busqueda del id en el array de miLista
                indice = miLista.indexOf(contenidoEliminar)//Con esta acción identifico el indice de mi elemento
                miLista.splice(indice,1)//Elimino el elemento por indice
                console.table(miLista)
                break
        }
        continue//Con el continue generamos un bucle que cada vez que resolvemos algo correctamente nos permite volver al inicio de seción
    }else{
        console.log(falloAutenticacion)//Leyenda que se actualiza en la cabecera del script
    }
    intentos += 1//Acumulador de intendos
}
//Evita que cuando se sierra un ciclo aparezca el mensaje de acceso denegado por pantalla
if(intentos ==3){
    console.log(accesoDenegado)
}
