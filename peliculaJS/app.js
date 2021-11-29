//Array Movies
const movies = [];

movies.push(new Movie("Indiana Jones and the Kingdom of the Crystal Skull", { name: "Jorge", surname: "Lucas" }, "2008"));
movies.push(new Movie("E.T", { name: "Steven", surname: "Spileberg" }, "1982"));
movies.push(new Movie("Star Wars", { name: "Jorge", surname: "Lucas" }, "1977"));
movies.push(new Movie("Poltergeist", { name: "Steven", surname: "Spileberg" }, "1982"));
movies.push(new Movie("Saving Private Ryan", { name: "Steven", surname: "Spileberg" }, "1998"));
movies.push(new Movie("Indiana Jones and the Temple of Doom", { name: "Jorge", surname: "Lucas" }, "1984"));
movies.push(new Movie("Indiana Jones and the Last Crusade", { name: "Jorge", surname: "Lucas" }, "1989"));

//Todas las peliculas
console.log("//Todas las peliculas");
movies.forEach(e => console.log(e.sumary_movie()));

//Todas las peliculas del año 1982
console.log("//Todas las peliculas del año 1982");
movies
    .filter(e => e.anyo == 1982)
    .forEach(e => console.log(e.sumary_movie()));

//Todas las peliculas del director Steven Spileberg
console.log("//Todas las peliculas del director Steven Spileberg");
movies
    .filter(e => e.director.isDirector({ name: "Steven", surname: "Spileberg" }))
    .forEach(e => console.log(e.sumary_movie()));


// Todas las peliculas de "Indiana Jones"
console.log('//Todas las peliculas de "Indiana Jones"');
movies
    .filter((e) => e.title.includes("Indiana Jones"))
    .forEach(e => console.log(e.sumary_movie()));


// Ordenar por año
console.log("// Ordenar por año");
movies
    .sort((a, b) => a.anyo - b.anyo)
    .forEach(e => console.log(e.sumary_movie()));


// Eliminar "Saving Private Ryan"
console.log('// Eliminar "Saving Private Ryan"');
movies.splice(movies.findIndex((e) => e.title == "Saving Private Ryan"),1);
movies.forEach(e => console.log(e.sumary_movie()));