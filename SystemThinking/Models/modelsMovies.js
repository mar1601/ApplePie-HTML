import movies from "../Data/movies.js";

class MoviesModels{
    allMovies(){
    return movies;
    }

    getMovieId(id){
    return movies.find(e =>e.id==id);
    }

    createMovie(newMovie){
    movies.push(newMovie);
    return movies;
    }

    deleteMovie(id){
    movies.splice (movies.findIndex((e) => e.id == id),1);
    return movies;
    }
    
    updateMovie(req){
        let i = movies.findIndex(e =>e.id==req.id);
        movies[i] = req;
        return movies;
    }

    yearorder(){
        movies.sort(function(a, b) {
            return a.year - b.year;
        });
        return movies;
    }

    searchmovies(objeto){
        movies.sort(function(a,b){
        
        });
        return id ; 
    }


}

export default new MoviesModels();   