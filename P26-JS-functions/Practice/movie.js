//Task01
//Все методы, кроме start() в personalMovieDB сделать методами объекта

let numberOfFilms;
start();

const personalMovieDB = {
    count:numberOfFilms,
    movies:{
        toString: function(){   //Object obejct  {titel1: 10, titel2: 9,toString: function}
            let moviesList = '';
            for(let key in this){
                if(typeof this[key] != 'function')
                moviesList += `'${key}': ${this[key]}\n`
            }
            return moviesList;
        }
     },  // {'Titanic': 8.8, 'Hattika' : 9.4}
    genres:[],
    private: false,
    getMovieData: function (filmsNumber){
        for(let i=0; i<filmsNumber; i++){
            const title = prompt('Enter the title of last watched movie'),
                  rate = parseFloat(prompt('How do you rate it?'));
                  console.log(rate)
            if(title != null && title != '' && rate != null && rate !=''&& !isNaN(rate) ){
                this.movies[title] = rate;
            }else{
                alert('write correct data')
                i--;
            }
        }
    },
    getGenre: function (number){
        for (let i = 1; i <= number; i++){
            this.genres[i-1] = prompt(`What is your top-${i} genre?`)
        }
    },
    showMovieDB: function (){
        if(!this.private){
            //console.log(personalMovieDB);
            alert(`You did watched: ${this.count} films`);
            alert('You saved film:\n' + this.movies)
            alert(`You favorite genre: ${this.genres}`);
            alert(this.levelScoreMessage());
        }
    },
    levelScoreMessage: function (){
        if(this.count < 5){
            return 'don\'t like movies?'
        }else if(this.count >=5 && this.count <=15){
            return 'you are classic viewer\u{1F60D}'
        }else if (this.count > 15 && this.count<=30){
            return 'you\'re a movie buff!';
        }else{
           return 'error'
        }
    }
}

personalMovieDB.getMovieData(2);
personalMovieDB.getGenre(1);
personalMovieDB.showMovieDB();

console.log(personalMovieDB.movies.toString())

function start(){
    do{
    numberOfFilms = +prompt('How many films did you watch last month?');
    }while(isNaN(numberOfFilms))
}
