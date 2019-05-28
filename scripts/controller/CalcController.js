class CalcController {
    constructor(){
        this._locale = 'pt-br'; //referencia da data e hora
        this._displayCalcEl =  document.querySelector("#display");
        this._dateEl =  document.querySelector("#data");
        this._timeEl =  document.querySelector("#hora");
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();
    }

    initialize(){
        //chama o metodo para carregar a data e hora.

        this.setDisplayDateTime();

       //Atualiza a data e hora
        setInterval(() => {
            this.setDisplayDateTime();
        }, 1000);
    
    }

    addEventListenerAll(element, events, fn){
        events.split(' ').forEach(event => {
            element.addEventListener(event, fn, false);
        });
    }

    initButtonsEvents(){
       let buttons = document.querySelectorAll("#buttons > g, #parts > g"); 
       buttons.forEach((btn, index) =>{
           this.addEventListenerAll(btn, "click drag", e=>{
            console.log(btn.className.baseVal.replace("btn-",""));
        });

        this.addEventListenerAll(btn, "mouseover mouseup mousedown", e => {
            btn.style.cursor = "pointer";
        });
           
       });
    }

    // carrega a data e hora da calculadora no carregamento da pagina.
    setDisplayDateTime() {
        this.displayDate = this.currentDate.toLocaleDateString(this._locale, {
            day: "2-digit",
            month: "long",
            year: "numeric"

        });
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    get displayTime(){
        return this._timeEl.innerHTML;
    }

    set displayTime(value){
        this._timeEl.innerHTML = value;
    }

    get displayDate(){
        return this._dateEl.innerHTML;
    }

    set displayDate(value) {
        this._dateEl.innerHTML = value;
    }

    get displayCalc(){
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value){
        this._displayCalcEl.innerHTML = value;
    }

    get currentDate(){
        return new Date();
    }

    set dataAtual(value){
        this._currentDate = value;
    }
}