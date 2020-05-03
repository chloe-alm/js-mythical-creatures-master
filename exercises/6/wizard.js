class Wizard{
    constructor({name, bearded = true, isRested = true}){
        this._name = name
        this._bearded = bearded
        this._isRested = isRested
    }
    get name(){
       return this._name
    }
    get bearded(){
        return this._bearded
    }
    get isRested(){
        return this._isRested
    }
    incantation(phrase){
        return phrase.toUpperCase()
    }

    cast(phrase){
        this._count++
        if (this._isRested == false && this._count === 3){
            return phrase.toUpperCase()
        } else {
            return 'MAGIC BULLET'
        }
    }

}
    module.exports = Wizard;