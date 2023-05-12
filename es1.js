let numero = 1;
let stringa = "Stringa";
let booleano = true;
let oggetto = null;
let indefinito = undefined;
let funzione = () =>{};

    
const carrello = {
    prodotti: [
        {
            id: 1,
            nome: "Il file del Pitone",
            prezzo: 650,
            quantita: 5
        },

        {
            id: 2,
            nome: "Un altro file",
            prezzo: 350,
            quantita: 5
        }
    ],
    getTotale(){
        let totale = 0; 
        for (let i=0; i<this.prodotti.length; i++){
            const prodotto = this.prodotti[i];
            totale += prodotto.prezzo * prodotto.quantita;         
        }
        totale = 0; 

        for(prodotto of this.prodotti){
            totale += prodotto.prezzo * prodotto.quantita;         
        }

        totale = 0;

        for (index in this.prodotti){
            const prodotto = this.prodotti[index];
            totale += prodotto.prezzo * prodotto.quantita;            
        }

        totale = 0; 
        let i = 0;

        while (i<this.prodotti.length){
            const prodotto = this.prodotti[i];
            totale += prodotto.prezzo * prodotto.quantita;           
            i++;
        }
        return "Totale: "+totale;
    }
}

console.log(
    typeof numero,
    typeof stringa,
    typeof booleano,
    typeof oggetto,
    typeof indefinito,
    typeof funzione,
    "Get Totale di Carrello: "+carrello.getTotale()
)