export default function spaceAge(planet, number) {
    this.planet = planet;
    this.number = number; 
}
var planet1 = new spaceAge('Jupiter',901876382);
var planet2 = new spaceAge('Earth',1000000000);
var planet3 = new spaceAge('Mercury',2134835688);
var planet4 = new spaceAge('Venus',189839836);
var planet5 = new spaceAge('Mars',2329871239);
var planet6 = new spaceAge('Saturn',3000000000);
var planet7 = new spaceAge('Uranus',3210123456);
var planet8 = new spaceAge('Neptune',8210123456);

var time = `${this.planet}` + `${this.number}` * 31.69 / 1000000000;
{

}