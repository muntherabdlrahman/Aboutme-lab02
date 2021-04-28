'use strict'

let score = 0
alert('You are on Munther Abdlrahman  personal page, Welcome! ')
let firstAns = prompt('Guess what, am I like web design?')

function answer1(aa) {
    switch (aa.toLowerCase()) {
        case 'yes':
        case 'y':
            alert('Right, welcome to  my  website, my friend..!')
            score++;
            break;

        case 'no':
        case 'n':
            console.log('No, I really like it so much, it is so fun!')
            alert('No, I really like it so much, it is so fun!')
            break;
        default:
            alert('welcome');
            
    }

}
answer1(firstAns);





let secAns = prompt('guess, am I like sports??')


function answer2(bb) {

    switch (bb.toUpperCase()) {
        case 'YES':
        case 'Y':
            console.log(' Perfect, I love sports too but more than web design ')
            alert('Perfect, I love sports too but more than web design')
            break;
            case 'NO':
                case 'N':
                    console.log('No, not right, I love sports too but more than web design')
                    alert('No, not right, I love sports too but more than web design')
                    score++;
            break;


        default:
            alert('The sport is the life to me!!')
    }

}
answer2(secAns);



let thirdANS = prompt('Do you think that I am not like eating?')

function answer3(cc) {
    switch (cc.toLowerCase()) {
        case 'yes':
        case 'y':
            console.log(' Really :(  , what you think, I like eating more than sports and design')
            alert(' Really :(  , what you think, I like eating more than sports and design')
            score++;
            break;
        case 'no':
        case 'n':
            console.log('perfect!, it is more important than sport to me Hhhhhh!')
            alert('Perfect!, it is more important than sport to me Hhhhhh!')
        default:
            alert('welcome :( ')

    }
}

answer3(thirdANS);




let fourAns = prompt('Did you know that I am an electrical engineer?')

function answer4(dd) {
    switch (dd.toLowerCase()) {
        case 'yes':
        case 'y':
            console.log('dont be surprised ! ')
            alert('Graduated from Hashemite University in Aug,2018 and my major field is Power Electrical')
            score++;
            break;
        case 'no':
        case 'n':
            console.log('OK, should I intreduce myself :)')
            alert('no :( I will tell you')
            alert('I am an electrical engineer graduated from Hashemite University in Aug,2018 and my major field is Power electrica.')

            break;
        default:
            alert('dont wanna knOW me?!')
    }

}
answer4(fourAns);






let fiveAns = prompt('Guess what!, do you like Shawerma??');


function answer5(ee) {
    switch (ee.toLowerCase()) {
        case 'yes':
        case 'y':
            console.log('That is your chance to eat Shawerma from my hand hhhh :)')
            alert('Cool! ,I worked as a Shawerma maker and I have a 2 years experiance with that work you should try my Shawerma ! so Delecious!')
            score++;
            break;
        case 'no':
        case 'n':
            console.log('Hmm; so weird  ')
            alert('No!! ,You should try it from my hand!, because I am Shawerma meker!')
            break;
        default:
            alert('Just try it')


    }
}
answer5(fiveAns);




let ansGuss = prompt('Guess that, How many time did I win Gold Medale in Boxing?,','From0-5');

function answer6(ff) {
    if (ff == 5) {
        alert('Awesome , you got it from the first time, it was days I am proud of ! ');
        score++;
    } else {
        alert('NO ,guess one more time!');
        for (let i = 0; i < 3; i++) {
            let ff = prompt('Guess that, How many time did I win Gold Medale in Boxing?');

            if (ff == 5) {
                alert('Right,correct answer, it was days I am proud of !');
                score++;
                break;
            } else {
                if (i < 2) {
                    alert('Not right!, guess one more time')
                } else {
                    alert('You lost the guesses the answer is 5 ')

                }

            }

        }
    }

}
answer6(ansGuss);






//Question seven 7


let plaYer = ['missi', 'm', 'ibrahemovice', 'i'];
function answer7(gg){
    for (let j = 0; j < 6; j++) {

    let question = prompt('whats my fav football player', 'ex: ronaldo, ibrahemovice, missi, marsillo, piqe,swariz');

    for (let i = 0; i < gg.length; i++) {
        if (question == gg[i]) {
            alert('Awesome, we are agree with this point he is legend');
            score++;
            correct = true;
             j = 7;
            break;
        }

    }
   
    }



}

answer7(plaYer);
