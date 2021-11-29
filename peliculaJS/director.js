
const movies = [];

class Director {
    constructor(objDirector) {
        this.name = objDirector.name;
        this.surname = objDirector.surname;
    };

    sumary_director() {
        return `${this.name} ${this.surname}`
    };

    isDirector(b) {
        return this.name === b.name && this.surname === b.surname;
    }

};


