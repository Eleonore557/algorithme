export default function strToMatrix(strToMatrix){
        
    var rows = 0;
    var columns = 0;
    
    for(let lg=0;lg<tab.length;lg++){ 
     var lignes = tab[lg];
    
     for(let el=0;el<lignes.length;el++){ 
        rows += ligne[el];
     }
    
     for(let col=0;col<tab.length;col++){ 
        column += tab[col][lg];
     }
    }
    
    if(rows == column){ 
     return true;
    }
    else{
     return false;
    }
   }
    
    