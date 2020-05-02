class Dragon {
    constructor(name, rider, color, hungry, miam = "0"){
        this._name = name
        this._rider = rider || "Eragon"
        this._color = color
        this._hungry = true
        this._miam = miam

    }
    get name(){
        return this._name 
    }
    get rider(){
        return this._rider
    }
    get color(){
        return this._color
    }
    isBlue(){
        return this._color ==="blue";
    }
    get hungry(){
        return this._hungry 
    }
    eat(){
        this._miam++
        if(this._miam >= 3){
            return this._hungry = false;
        }
    }
}
module.exports = Dragon