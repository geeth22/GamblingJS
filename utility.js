class GamblerSimulation{
    Stake = 100
    betamount = 1
   
    constructor(win, lose){
       this.win = win;
       this.lose = lose;
   }
   checkWinOrLoose(){
       return Math.floor(Math.random() * Math.floor(2));
   }
   GamblerWinOrLoose(){

       let result = this.checkWinOrLoose();
       if (result == 1) {
           this.win += 1;
           this.Stake += 1;
           console.log( "You won 1 dollar")
       }
       if (result == 0) {
           this.lose += 1;
           this.Stake -= 1;
           console.log("You lost 1 dollar")
       }
    }
   }
   module.exports = new GamblerSimulation();
