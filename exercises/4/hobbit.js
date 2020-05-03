class Hobbit{
    constructor(name, disposition, age = 0, adult, short){
    this._name = name ||"Bilbo" ||"Fredo"
    this._disposition = disposition || "homebody"  
    this._age = age
    this._adult = adult
    this._isShort = short 

   
    
}
get name(){
    return this._name
}
get disposition(){
    return this._disposition
}
get age(){
    return this._age

}
get adult(){
    return this._adult
}

celebrateBirthday(){
    this._age++;
    if(this._age <= 32){
        return this._adult = false;
    
    }else if(this._age >=33){
        return this._adult = true;
    }
}
 get isShort(){
     return this._isShort = true

}
get old(){
    if (this._age > 100) {
        return this._old = true
    } else {
        return this._old = false
    }
}
get hasRing(){
    if (this._name === 'Frodo'){
        return this._hasRing = true
    }else{
        return this._hasRing = false
    }
}
}
module.exports = Hobbit;