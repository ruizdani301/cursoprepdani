function sumarLikesDeUsuario(usuario) {
    
    // "usuario" tiene una propiedad llamada "posts" que es un array
    // "posts" es un array de objetos "post"
    // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
    // Suma todos los likes de todos los objetos "post"
    // Devuelve la suma
    // Tu código:
    let suma= 0;
    for ( let i=0; i< usuario.posts.length; i++){
        suma = suma + usuario.posts[i].likes;
    }

		return suma;
}

console.log(sumarLikesDeUsuario({
   "posts": [
            {
                "likes": 10
            },
            {
                "likes": 1
            },
            {
                "likes": 1
            },
            {
                "likes": 20
            }
        ]
  
    }))
  