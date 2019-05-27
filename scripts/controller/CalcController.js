class CalcController {
    constructor(){
        this._displayCalcEl =  document.querySelector("#display");
        this._dateEl =  document.querySelector("#data");
        this._timeEl =  document.querySelector("#hora");
        this._currentDate;
        this.initialize();
    }

    initialize(){
      

    
    }

    get displayTime(){
        return this._timeEl.innerHTML;
    }

    set displayTime(){
        return this._timeEl.innerHTML;
    }

    get displayDate(){
        return this._dateEl.innerHTML;
    }

    set displayDate(value) {
        return this._dateEl.innerHTML = value;
    }

    get displayCalc(){
        return this.displayCalcEl.innerHTML;
    }

    set displayCalc(value){
        this.displayCalcEl.innerHTML = value;
    }

    get currentDat(){
        return new Date();
    }

    set dataAtual(valeu){
        this.currentDate = value;
    }
}