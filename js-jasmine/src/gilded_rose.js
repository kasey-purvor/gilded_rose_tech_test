class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  
  regularItemUpdate(i) {
    if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert' && this.items[i].name != 'Sulfuras, Hand of Ragnaros' && this.items[i].quality > 1 && this.items[i].sellIn <= 0) {
      this.items[i].quality = this.items[i].quality - 2;
      this.items[i].sellIn = this.items[i].sellIn - 1; 
    } if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert' && this.items[i].name != 'Sulfuras, Hand of Ragnaros' && this.items[i].quality > 0 && this.items[i].sellIn > 0) {
      this.items[i].quality = this.items[i].quality - 1;
      this.items[i].sellIn = this.items[i].sellIn - 1; 
    } ;
  };

  brieUpdate(i) {
    if (this.items[i].name === "Aged Brie" && this.items[i].sellIn <= 0){
      this.items[i].quality = this.items[i].quality + 2; 
      this.items[i].sellIn = this.items[i].sellIn - 1; 
    } if(this.items[i].name === "Aged Brie" && this.items[i].sellIn > 0){
      this.items[i].quality = this.items[i].quality + 1; 
      this.items[i].sellIn = this.items[i].sellIn - 1; 
    } if(this.items[i].name === "Aged Brie" && this.items[i].quality > 50){
      this.items[i].quality = 50 ;
    }
  };
 
  ticketsUpdate(i){
    if (this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert' && this.items[i].sellIn <= 0) {
      this.items[i].quality = 0
      this.items[i].sellIn = this.items[i].sellIn - 1; 
    } if (this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert' && this.items[i].sellIn < 6 && this.items[i].sellIn > 0) {
      this.items[i].quality = this.items[i].quality + 3;
      this.items[i].sellIn = this.items[i].sellIn - 1; 
    } if (this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert' && this.items[i].sellIn < 11 && this.items[i].sellIn >= 6) {
      this.items[i].quality = this.items[i].quality + 2;
      this.items[i].sellIn = this.items[i].sellIn - 1; 
    } if (this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert' && this.items[i].sellIn >= 11) {
      this.items[i].quality = this.items[i].quality + 1;
      this.items[i].sellIn = this.items[i].sellIn - 1; 
    } if (this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert' && this.items[i].quality > 50){
      this.items[i].quality = 50
    }
  };


  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
     
      this.regularItemUpdate(i);
      this.brieUpdate(i);
      this.ticketsUpdate(i)


      // if (this.items[i].quality < 50) {
      //   // this line is for the brie and tickets as both increase in quality 
      //     this.items[i].quality = this.items[i].quality + 1; 
  
      //     // this section is concerned with tickets only. And adds the quality multipliers that depend on Sellin
      //     if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
      //       if (this.items[i].sellIn < 11) {
      //         if (this.items[i].quality < 50) {
      //           this.items[i].quality = this.items[i].quality + 1;
      //         }
      //       }
      //       // adds one further quality point making a total of 3. hence the 3x multiplier. 
      //       if (this.items[i].sellIn < 6) {
      //         if (this.items[i].quality < 50) {
      //           this.items[i].quality = this.items[i].quality + 1;
      //         }
      //       }
      //     }
      //   }
      
      // // this line deal with the sellIn values of all items exept legendary ones . very simple 
      // if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
      //   this.items[i].sellIn = this.items[i].sellIn - 1;
      // }
      // // this section now deals with the same items with SellIns below 0. This repeats the same steps causing the 2x quality degredation. 
      // if (this.items[i].sellIn < 0) {
      //   if (this.items[i].name != 'Aged Brie') {
      //     if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
      //       if (this.items[i].quality > 0) {
      //         if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
      //           this.items[i].quality = this.items[i].quality - 1;
      //         }
      //       }
      //       // this line decreases the ticket value to 0 
      //     } else {
      //       
      //     }
      //   } else {
      //     // this block doubles up the brie quality increase 
      //     if (this.items[i].quality < 50) {
      //       this.items[i].quality = this.items[i].quality + 1;
      //     }
      //   }
      // }
    }

    return this.items;
  }
}
module.exports = {
  Item,
  Shop
}
