class Movie {
    constructor(title, objDirector, anyo) {
        this.title = title;
        this.director = new Director(objDirector);//{ name: name, surname: surname };
        this.anyo = anyo;
    };

    sumary_movie() {
        return `El director de ${this.title} es de ${this.director.sumary_director()}, año de estreno ${this.anyo}`;
    }
    // this.equalsDirector = (newDirector) => {
    //     JSON.stringify(this.director) === JSON.stringify(newDirector);
    // }
}