class GamblerSimulation{
   
    constructor(win, lose){
	this.Stake = 100;
	this.betamount = 1 ;
       	this.win = 0;
       	this.lose = 0;
	this.totalDays = 0;
        this.totalAmount = 0;
	this.luckiestDay = 0;
        this.unluckiestDay = 0;
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
	if (this.Stake == 150) {
        this.luckiestDay += 1;
    	}
    	if (this.Stake == 50) {
       	this.unluckiestDay += 1;
    	}
       }
    }
	resultAfter30Days() {
        	try {
            	while (this.totalDays < 30) {
                this.GamblerWinOrLoose();          
                console.log("Earned: " + this.Stake);
                this.totalAmount = this.totalAmount + this.Stake;
                this.Stake = 100;
                this.totalDays++;
                console.log("Day: " + this.totalDays); 
                console.log(" Total amount: " + this.totalAmount);
            }
            console.log("Total Days: " + this.totalDays + " Total amount: " + this.totalAmount);
        }
        catch (e) {
            console.log("Exception: " + e);
        }
    }
}
   module.exports = new GamblerSimulation();
