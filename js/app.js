/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания
'use strict';

for (let i = 0; i < 1; i++){
    const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
if (numberOfFilms != null && numberOfFilms != '') {
    console.log("не нажал отмену, все ок");    
}
else {
    console.log("нажал отмену!");
    +prompt('Сколько фильмов вы уже посмотрели?','');
    i--;
    console.log(i);
}


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (personalMovieDB.count <10) {
    console.log('просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >10 && personalMovieDB.count <30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >30) {
    console.log('Вы киноман');
} else {
    console.log('error');
}
for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?',''),
          b = prompt('На сколько оцените его?','');
    
    if (a != null && b != null && a != '' && b != '') {
        personalMovieDB.movies[a] = b;
        console.log("ответил на следующие вопросы");
    } else {
        console.log("не ответил!!!");
        i--;
    }
}
console.log(personalMovieDB);
}
// цикл: пока i < 2 будет выполняться цикл - 
// сначала задается вопрос 0 (const a) 
// потом вопрос 1 (const b)
// далее в объект "personalMovieDB" во вложенный оъект "movies" 
// мы передаем свойство [a] и присваеваем значение [b]



