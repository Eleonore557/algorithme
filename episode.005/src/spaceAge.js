export default function spaceAge(planet, number){ 

    if  (planet === 'Earth'){
        return parseFloat((number / 31557600).toFixed(2)); 
    }
    if  (planet === 'Mercury'){
        return parseFloat((number / 31557600 / 0.2408467).toFixed(2)); 
    } 
    if  (planet === 'Venus'){
        return parseFloat((number / 31557600 / 0.61519726).toFixed(2));
    }
    if  (planet === 'Mars'){
        return parseFloat((number / 31557600 / 1.8808158).toFixed(2));
    }
     if  (planet === 'Jupiter'){
        return parseFloat((number / 31557600 / 11.862615).toFixed(2));
    }
     if  (planet === 'Saturn'){
        return parseFloat((number / 31557600 / 29.447498).toFixed(2));
    }
     if  (planet === 'Uranus'){
        return parseFloat((number / 31557600 / 84.016846).toFixed(2));
    }
     if  (planet === 'Neptune'){
        return parseFloat((number / 31557600 / 164.79132).toFixed(2));
    }
return spaceAge()

} 