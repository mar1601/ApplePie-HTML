//Mauricio y Mar            2DAW
/*CRUD
    Create
    Read
    Update
    Delete*/

import movieController from "./Controller/movieController.js"

const newMovie = {
    id: 5,
    title: "Avengers end game",
    poster: "https://i.imgur.com/SuW2ZlC.jpg",
    synopsis: "In 1947",
    genres: [ "Crime", "Drama" ],
    year: 1994,
    director: "Frank Darabont",
    actors: [  "Tim Robbins"]

}


//Imprimir todo
const allMovies = function( req, res){
    res= movieController.allMovies(req, res);
    res.forEach(element => {
        console.log(element);
    });
} ;

//Obtener peli por ID
const getMovieId = function( req, res){
    res= movieController.getMovieId(req, res);
    res.forEach(element => {
        console.log(element);
    });
} ;

//Crear peli
const createMovie = function( req, res){
    res= movieController.createMovie(req, res);
    res.forEach(element => {
        console.log(element);
    });
} ;

// Eliminar una peli segun Id
const deleteMovie = function (req, res){
    res= movieController.deleteMovie(req, res);
    res.forEach(element => {
        console.log(element);
    });
} ;

// Modificar peli
const updateMovie = function (req,res){
    res= movieController.updateMovie(req, res);
    res.forEach(element => {
        console.log(element);
    });
};
//Ordenar por año 
const yearorder = function (req,res){
    res = movieController.yearorder(req, res);
    res.forEach(element => { 
        console.log(element);
    });
};

//Buscar cualquier campo id, year, director...
const searchmovies = function (req,res){
    
} 


try {
    // allMovies({},[]);
    // getMovieId({id:4},[]);
    // createMovie({newMovie},[]);
    // deleteMovie({id:3},[]);
    // updateMovie (newMovie,[]);
    // yearorder({},[]);
    searchmovies({},[]);


} catch {
    console.log("Error");
}