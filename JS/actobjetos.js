//ejercicio 1

// let movie = {
//     title: "E.T.",
//     director:{ name: "Steven",
//               surname: "Spielberg"
//     }
// }
// console.log(movie.title);
// console.log(movie.director);

//ejercicio 2, 3 y (4 error) 
// let movies = [];
// movies.push(movie);
// movies.forEach((ce)=>console.log(ce.title));
// let movie = {
//     title: "E.T.",
//     director:{ name: "Steven",
//               surname: "Spielberg",
//     }
// }

// movies.push(movie);
// movies.forEach((ce)=>console.log(ce.title));
// let movie = {
//     title: "Star Wars",
//     director:{ name: "Jorge",
//               surname: "Lucas",
//     }
// }

// console.log(movie.title);
// console.log(movie.director);

//ejercicio 6
// let movies = [];

// movies.forEach((ce)=>console.log(ce.title));
// let movie = {
//     title: "E.T.",
//     director:{ name: "Steven",
//               surname: "Spielberg",
//     }
// }
// a = newMovie(),
// movies.push(a);
// console.log(movie.title);

// //ejercicio 7

// //ejercicio 8
// //!!_______________________RESPUESTAS MOOODLE______________________________!!

// //ejercicios segunda parte

// //funcion constructora 
// class Director {
//     this.director (name, surname);
//     this.title
//     this. 

// }
// class Movie {
// constructor(title, name, surname,anyo) {
//     this.title=title;
//     this.director={name:name, surname:surname};
//     this.anyo=anyo;
//  }
// //
//     this.sumary_movie = () => {
//      return `el director de ${ this.title} es de ${ Object.values(this.director). join("")}, año de estreno ${ this.anyo}`;
//      };
//      this.equalsDirector = (newDirector) => {
//             JSON.stringify(this.director) === JSON.stringify(newDirector);
//      }
//  }
// }
// let steven = new director ("Steven","Spilberg");
// let lucas = new director ("Jorge","Lucas");

// let array1= []
//  movies.push(new movie("E.T","Steven","Spileberg","1982"));
//  movies.push(new movie("Indiana Jones and the Kingdom of the Crystal Skull","Jorge","Lucas","2008"));
//  movies.push(new movie("Star Wars","Jorge","Lucas","1977"));
//  movies.push(new movie("Poltergeist","Steven","Spileberg","1982"));
//  movies.push(new movie("Saving Private Ryan","Steven","Spileberg","1998"));
//  movies.push(new movie("Indiana Jones and the Temple of Doom","Jorge","Lucas","1984"));
//  movies.push(new movie("Indiana Jones and the Last Crusade","Jorge","Lucas","1989"));
 
 //todas las peliculas
//  console.log("//todas las peliculas");
//  movies.forEach(e => console.log(e.sumary_movie()));

 //todas las peliculas del 1982
//  console.log("//todas las peliculas del 1982");
//  movies.forEach(e => {if (e.anyo == 1982){
//     console.log(e.sumary_movie())
//  }});

 //!!!!!!!!!!!puede ser lo mismo usando el paradigma funcional!!!!!!!!!!!!!!!!!!!1
// movies
//   .filter(e => anyo ==1982)
//   .forEach(e => console.log(e.sumary_movie()));

 //todas las peliculas del director Steven Spilberg
//  movies
//     .filter(e => director.name == "Steven" && e.director.surname == "Spileberg")
//     .forEach(e => console.log(e.sumary_movie()));

 //Todas las peliculas de Indiana Jones
//  movies
//     .filter(e => title.search == "Indiana Jones")
//     .forEach(e => console.log(e.sumary_movie()));
 
