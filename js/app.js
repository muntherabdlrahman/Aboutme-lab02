'use strict'

alert('You are on Munther Abdlrahman  personal page, Welcome! ')

let firstAns=prompt('Do you know me?')

switch (firstAns.toLowerCase()) {
    case 'yes':
    case 'y':
        console.log('Welcome to  my page, my friend..!')
        document.write('Welcome to  my page, my friend..!')
        document.write('You are Welcome' )
        alert('alright, Hi')
        break;
      
      case 'no':
      case 'n':
        console.log('Nice to see you , all honor to know you!')
        document.write('Nice to see you , all honor to know you!')
        document.write('Happy opportunity to get to know you!')
        alert ('I hope I can make friendship with you')
        break;
        default:
            console.log('welcome');
            document.write('welcome :)')



}

let secAns=prompt('Do you want to know where I live?')
switch (secAns.toUpperCase()) {
    case 'YES':
    case 'Y':
        console.log('I Hope that you can visit me soon *_* ')
        document.write('I Hope that you can visit me soon *_*                                                                                                                                                                              ')
        alert('alright, you guessed that')
        break;
    case 'NO':
    case 'N':
    console.log('smoedays i will host you to my home with my pleasure :)')
    document.write('Jordan-Zarqa; smoedays i will host you to my home with my pleasure :)                                                                                                                                                  ')
    alert('Hmm, my bad I didnt tell you!')
    alert('Jordan-Zarqa; smoedays i will host you to my home with my pleasure :)                                                                                                                                                  ')

    break;


    default :
    console.log('See you soon')



}


let thirdANS=prompt('Do you know where Zarqa is ??')
switch(thirdANS.toLowerCase()){
    case 'yes':
    case 'y':
        console.log('perfect')
        document.write('Yup it is the same city that my uinversity is                                                                                                                                                                     ')
        alert('perfect!')
        break;
    case 'no':
    case 'n':
        console.log(' Really :(  you should know it!')
        document.write('Zarqa (Arabic: الزرقاء‎) is the capital of Zarqa Governorate in Jordan. Its name means "the blue (city)". It had a population of 635,160 inhabitants in 2015, and is the most populous city in Jordan after Amman.')
        alert('No, I will tell you! soon')         
        default:
            console.log('welcome :( ')
   
    }


let fourAns=prompt('Did you know that I am an electrical engineer?')
switch(fourAns.toLowerCase()){
    case 'yes':
    case 'y':
        console.log('dont be surprised ! ')
        document.write('Graduated from Hashemite University in Aug,2018 and my major field is Power Electrical                                                                                                                                             ')
        alert('Nice, that is right')
        break;
        case 'no':
        case 'n':
        console.log('OK, should I intreduce myself :)')
        document.write('I am an electrical engineer graduated from Hashemite University in Aug,2018 and my major field is Power electrical, My studies was general electrical engineering so i studied power, electronics; and telecommunications. ' )
        alert('no :( I will tell you')
        alert('I am an electrical engineer graduated from Hashemite University in Aug,2018 and my major field is Power electrical, My studies was general electrical engineering so i studied power, electronics; and telecommunications. ' )

        break;
        default:
            console.log('dont wanna knOW me?')

        
}

let fiveAns=prompt('Guess what, did you like Shawerma??');
switch(fiveAns.toLowerCase()){
    case 'yes':
    case 'y':
        console.log('That is your chance to eat Shawerma from my hand hhhh :)')
        alert('Yup ,I worked as a Shawerma maker and i have a 2 years experiance with that work you should try my Shawerma ! so Delecious!                                                                                                               ')

        break;
        case 'no':
        case 'n':
            console.log('Hm; so weird  ')
            alert('No!! ,You should try it from my hand!')
            break;
            default:
                console.log('Just try it')


}







let sixAns=confirm('you will be my friend');
console.log('Best friend!');
alert('Best friend!');


