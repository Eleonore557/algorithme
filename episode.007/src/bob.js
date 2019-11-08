export default function bob(bob) {
 var expr = '';
 switch (bob) {
     case 'How are you ?' : 
     expr = 'Sure';
     break;
     case 'Hey !' : 
     expr = 'Whoa, chill out!';
     break;
     case 'Bob' : 
     expr = 'Fine. Be that way!';
     break;
     default:
     expr = 'Whatever';

 }
   return expr
}

