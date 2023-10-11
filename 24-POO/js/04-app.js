//clas declaration
class Cliente {
    #nombre;



    setNombre(nombre){
        this.#nombre = nombre;
    }
    getNombre(){
        return this.#nombre;
    }
}


const jerson = new Cliente ();
jerson.setNombre('jerson');
console.log(jerson.getNombre());

//console.log(jerson.#nombre); no se puede acceder por que es privada