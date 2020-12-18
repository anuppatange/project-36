//my project
class Food {
   constructor(){
       //this.button=createButton("PLAY");
       this.image=loadImage("Milk.png");
       this.foodS;
       this.lastFed;
       this.foodStock=0;
   }
getFoodStock(){
    return this.foodStock;
}
updateFoodStock(foodStock){
    this.foodStock=foodStock;
   }
deductFood(){
    if (this.foodStock>0){

   // this.button.mousePressed(()=>{
    //this.button.hide(),

    this.foodStock = this.foodStock-1
//})    
    }
}
getFeedTime(lastFed){
    this.lastFed=lastFed;
}

display(){
    var x=80, y=100;
    imageMode(CENTER);
    image(this.image, 100, 470, 70, 70);
    image(this.image, 650, 140, 70, 70);
    if (this.foodStock!==0){
        for(var i=0; i<this.foodStock; i++){
            if (i % 10 === 0){
                x=80;
                y=y+50;
            }
            image(this.image, x, y, 50,50);
            x=x+30;

        }
    }
}


}

