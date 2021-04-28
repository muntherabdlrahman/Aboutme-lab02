'use strict'

let score = 0
alert('You are on Munther Abdlrahman  personal page, Welcome! ')
let firstAns = prompt('Do you know me?')

function answer1(aa) {
    switch (aa.toLowerCase()) {
        case 'yes':
        case 'y':
            console.log('Welcome to  my page, my friend..!')
            document.write('Welcome to  my page, my friend..!')
            document.write('You are Welcome')
            alert('alright, Hi')
            score++;
            break;

        case 'no':
        case 'n':
            console.log('Nice to see you , all honor to know you!')
            document.write('Nice to see you , all honor to know you!')
            document.write('Happy opportunity to get to know you!')
            alert('I hope I can make friendship with you')
            break;
        default:
            console.log('welcome');
            document.write('welcome :)')
    }

}
answer1(firstAns);





let secAns = prompt('Do you want to know where I live?')


function answer2(bb) {

    switch (bb.toUpperCase()) {
        case 'YES':
        case 'Y':
            console.log('I Hope that you can visit me soon *_* ')
            document.write('I Hope that you can visit me soon *_*                                                                                                                                                                              ')
            alert('i live in zarqa')
            score++;
            break;
        case 'NO':
        case 'N':
            console.log('smoedays i will host you to my home with my pleasure :)')
            document.write('Jordan-Zarqa; smoedays i will host you to my home with my pleasure :)                                                                                                                                                  ')
            alert('Hmm, my bad I didnt tell you!')
            alert('Jordan-Zarqa; smoedays i will host you to my home with my pleasure :)                                                                                                                                                  ')

            break;


        default:
            console.log('See you soon')
    }

}
answer2(secAns);



let thirdANS = prompt('Do you know where Zarqa is ??')

function answer3(cc) {
    switch (cc.toLowerCase()) {
        case 'yes':
        case 'y':
            console.log('perfect')
            document.write('Yup it is the same city that my uinversity is                                                                                                                                                                     ')
            alert('perfect!')
            score++;
            break;
        case 'no':
        case 'n':
            console.log(' Really :(  you should know it!')
            document.write('Zarqa (Arabic: الزرقاء‎) is the capital of Zarqa Governorate in Jordan. Its name means "the blue (city)". It had a population of 635,160 inhabitants in 2015, and is the most populous city in Jordan after Amman.')
            alert('No, I will tell you! soon')
        default:
            console.log('welcome :( ')

    }
}

answer3(thirdANS);




let fourAns = prompt('Did you know that I am an electrical engineer?')

function answer4(dd) {
    switch (dd.toLowerCase()) {
        case 'yes':
        case 'y':
            console.log('dont be surprised ! ')
            document.write('Graduated from Hashemite University in Aug,2018 and my major field is Power Electrical                                                                                                                                             ')
            alert('Nice, that is right')
            score++;
            break;
        case 'no':
        case 'n':
            console.log('OK, should I intreduce myself :)')
            document.write('I am an electrical engineer graduated from Hashemite University in Aug,2018 and my major field is Power electrical, My studies was general electrical engineering so i studied power, electronics; and telecommunications. ')
            alert('no :( I will tell you')
            alert('I am an electrical engineer graduated from Hashemite University in Aug,2018 and my major field is Power electrical, My studies was general electrical engineering so i studied power, electronics; and telecommunications. ')

            break;
        default:
            console.log('dont wanna knOW me?')
    }

}
answer4(fourAns);






let fiveAns = prompt('Guess what!, do you like Shawerma??');


function answer5(ee) {
    switch (ee.toLowerCase()) {
        case 'yes':
        case 'y':
            console.log('That is your chance to eat Shawerma from my hand hhhh :)')
            alert('Cool! ,I worked as a Shawerma maker and i have a 2 years experiance with that work you should try my Shawerma ! so Delecious!')
            score++;
            break;
        case 'no':
        case 'n':
            console.log('Hmm; so weird  ')
            alert('No!! ,You should try it from my hand!')
            break;
        default:
            console.log('Just try it')


    }
}
answer5(fiveAns);




let ansGuss = prompt('Guess that, How many time did I win Gold Medale in Boxing?');

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

let plaYer= ['missi' , 'beckham' , 'm' , 'b'];
let question = prompt('Guess, who is my favorite football player?', 'missi , ronaldo, vice , beckham or ronaldino', 'neither imbabe');
plaYer = plaYer.toLocaleLowerCase();

function answer7(gg){

    for (let j = 0; j < 6; j++) {

        for (let i = 0; i < gg.length; i++) {
            if (question == gg[i]) {
                alert('Awesome!! you have the same opinion');
                score++;
                correct = true;
                j = 7;
                break;

            }
            else {
                alert('guess again');
                gg = prompt('try again choose one of these missi , ronaldo, vice , beckham or ronaldino');
            }

        }
    }

answer7(plaYer);

}