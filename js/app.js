'use strict'
let score=0
alert('You are on Munther Abdlrahman  personal page, Welcome! ')

let firstAns=prompt('Do you know me?')

switch (firstAns.toLowerCase()) {
    case 'yes':
    case 'y':
        console.log('Welcome to  my page, my friend..!')
        document.write('Welcome to  my page, my friend..!')
        document.write('You are Welcome' )
        alert('alright, Hi')
        score++;
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
        score++;
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


let fourAns=prompt('Did you know that I am an electrical engineer?')
switch(fourAns.toLowerCase()){
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
          score++;
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




let ansGuss = prompt('Guess that, How many time did I win Gold Medale in Boxing?');
if(ansGuss==5){
  alert('Awesome , you got it from the first time, it was days I am proud of ! '); 
  score++;
 } else{
         alert('NO ,guess one more time!');
        for(let i=0;i<3;i++){
            let ansGuss = prompt('Guess that, How many time did I win Gold Medale in Boxing?');
                        
            if (ansGuss==5){
                alert('Right,correct answer, it was days I am proud of !');
                score++;
        break;
            }else{
                if (i<2){
                alert('Not right!, guess one more time')
                }else{
                   alert('You lost the guesses the answer is 5 ')
                       
               }
        
      }

 }
    }

   
   
   
   
alert('Guess, who is my favorite football plyer?', 'missi , ronaldo, vice , beckham or ronaldino niether nymar'  );
let Player=prompt(['nymar','beckhame','ronaldo','vice','ronaldino','embaby','missi','kareem' ] );

 switch(Player.toLocaleLowerCase()){
    case 'missi':
    case 'm':
        alert('Sure, missi is legend , you seems like me on this point..');
        score++;
        break;
    case'nymar':
    case 'n':
    case'ronaldo':
    case 'r':
    case 'beckhame':
    case 'b':
    case 'vice':
    case 'v':
    case 'ronaldino':
    case 'r':
    case 'embaby':
    case 'e':
    case'kareem':
    case 'k':
        alert('I do not think so, guess one more time!');

        for(let i=0;i<5;){ 
            //alert('Guess, who is my favorite football plyer?', 'missi , ronaldo, vice , beckham or ronaldino niether nymar'  );
            let Player=prompt(['nymar','beckhame','ronaldo','vice','ronaldino','embaby','missi','kareem' ] );
            
            switch(Player.toLocaleLowerCase()){
                
                case'nymar':
                case 'n':
                    case'ronaldo':
                    case 'r':
                        case 'beckhame':
                            case 'b':
                                case 'vice':
                                    case 'v':
                                        case 'ronaldino':
                                            case 'r':
                                                case 'embaby':
                                                    case 'e':
                                                        case'kareem':
                                                        case 'k':
                                                            alert('I do not think so, guess one more time!');
                                                            i++;
                                                            break;
                                                            
                                                            
                                                            
                                                            case 'missi': 
                                                            case 'm':
                                                                alert('Sure, missi is legend, but you not guessed from the first time!!');
                                                                i=7
                                                                score++;
                                                                break;
                                                                
                                                                
                                                            }
                                                            
                                                            
                                                        }
                                                        
                                                        
                                                        
                                                        
                                                        break;}
    




                                                        alert('your score is'+score)


        
        
        
         
    
            

        
    
    

 
