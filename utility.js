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

       while (this.Stake < 150 && this.Stake > 50) {

       let result = this.checkWinOrLoose();
 
      if (result == 1) {
           this.win += 1;
           this.Stake += 1;
       }

       if (result == 0) {
           this.lose += 1;
           this.Stake -= 1;
	}
       }
    }
   }
   module.exports = new GamblerSimulation();
