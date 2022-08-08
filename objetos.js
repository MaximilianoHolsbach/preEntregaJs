//DEFINIMOS CLASES PADRES//

class Persona{
    constructor(id,nombre){//Generamos la clase padre para todos las personas que interactuen con la app
        this.id = id
        this.nombre = nombre
    }
}

class Contenido{
    constructor(id,nombre,categoria,genero,tipo){
        this.id = id
        this.nombre = nombre
        this.categoria = categoria
        this.genero = genero
        this.tipo = tipo
    }
    agregarContenido(videos,video){//Mentodo utilizado por el Admin
        videos.push(video)
        console.table(videos)
    }
    eliminarContenido(videos,contenido){//Mentodo utilizado por el Admin, y usuario
        indice = videos.indexOf(contenido, 1)
        videos.splice(indice,1)
        console.table(videos)
    }
    obtenerContenido(){//Mentodo utilizado por el usuario
        return `ID: ${this.id} | ${this.nombre} | ${this.categoria} | ${this.genero}`
    }
}

//DEFINIMOS LAS CLASES HIJAS//

class Administrador extends Persona{
    constructor(id,nombre,pass){
        super(id,nombre)//Tenemos la herencia de Persona
        this.pass = pass
    }
}

class Usuario extends Persona{
    constructor(id,nombre,pass){
        super(id,nombre)
        this.pass = pass
    }
}
