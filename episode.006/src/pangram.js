export default function pangram(pangram) {

    const set1 = new Set();
    const lowerText = pangram.toLowerCase();  

    for (let i=0; i<lowerText.length; i++) {
        var re = /[a-z]/;
        if (lowerText[i].match(re)){
            set1.add(lowerText[i])
        }
    }

 if (set1.size === 26){
     return true;
 }
 return false;
    
}



