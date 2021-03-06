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
  };

//this is the only tier 1 method, that updates the shop items through the tier 2 methods and returns the results

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      this.regularItemUpdate(i);
      this.brieUpdate(i);
      this.ticketsUpdate(i)
      this.conjuredItemUpdate(i);
    }
    return this.items;
  }

// the follwing 4 are tier 2 methods, they update the item properties sorting items with the tier 3 methods 
  //also, the following 3 methods perform the functionality of the exisitng code, ie they do NOT cover 'conjured items' 

  regularItemUpdate(i) {
    if (this.isARegularItem(i) && this.isOutOfDate(i)) {
      this.items[i].quality = this.items[i].quality - 2;
      this.items[i].sellIn = this.items[i].sellIn - 1; 
    } if (this.isARegularItem(i) && this.isNotOutOfDate(i)) {
      this.items[i].quality = this.items[i].quality - 1;
      this.items[i].sellIn = this.items[i].sellIn - 1; 
    } if (this.isARegularItem(i) && this.hasQualityBelowZero(i)) {
      this.items[i].quality = 0;
    };
  };

  ticketsUpdate(i){
    if (this.isATicket(i) && this.isOutOfDate(i)) {
      this.items[i].quality = 0
      this.items[i].sellIn = this.items[i].sellIn - 1; 
    } if (this.isATicket(i) && this.hasLessThanSixDaysLeft(i) && this.isNotOutOfDate(i)) {
      this.items[i].quality = this.items[i].quality + 3;
      this.items[i].sellIn = this.items[i].sellIn - 1; 
    } if (this.isATicket(i) && this.hasLessThanElevenDaysLeft(i) && this.hasSixOrMoreDaysLeft(i)) {
      this.items[i].quality = this.items[i].quality + 2;
      this.items[i].sellIn = this.items[i].sellIn - 1; 
    } if (this.isATicket(i) && this.hasElevenOrMoreDaysLeft(i)) {
      this.items[i].quality = this.items[i].quality + 1;
      this.items[i].sellIn = this.items[i].sellIn - 1; 
    } if (this.isATicket(i) && this.hasQualityAboveFifty(i)) {
      this.items[i].quality = 50
    }
  };

  brieUpdate(i) {
    if (this.isAgedBrie(i) && this.isOutOfDate(i)) {
      this.items[i].quality = this.items[i].quality + 2; 
      this.items[i].sellIn = this.items[i].sellIn - 1; 
    } if(this.isAgedBrie(i) && this.isNotOutOfDate(i) > 0){
      this.items[i].quality = this.items[i].quality + 1; 
      this.items[i].sellIn = this.items[i].sellIn - 1; 
    } if(this.isAgedBrie(i) && this.hasQualityAboveFifty(i)) {
      this.items[i].quality = 50 ;
    };
  };

  //this method is the newly added functionality of the app, it is the latest teir 2 method. 

  conjuredItemUpdate(i) {
    if (this.isAConjuredItem(i) && this.isOutOfDate(i)) {
      this.items[i].quality = this.items[i].quality - 4;
      this.items[i].sellIn = this.items[i].sellIn - 1; 
    } if (this.isAConjuredItem(i) && this.isNotOutOfDate(i)) {
      this.items[i].quality = this.items[i].quality - 2;
      this.items[i].sellIn = this.items[i].sellIn - 1; 
    } if (this.isAConjuredItem(i) && this.hasQualityBelowZero(i)){
      this.items[i].quality = 0;
    }
  };

// the remainder are tier 3 methods. They help sort the items based on their 3 properties, name, sellIn or quality. 
  // the following 4 are name sorting methods

  isARegularItem(i) {
    if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert' && this.items[i].name != 'Sulfuras, Hand of Ragnaros' && this.items[i].name != 'Conjured Item') {
      return true;
    };
  }; 

  isAgedBrie(i) {
    if (this.items[i].name === "Aged Brie") {
      return true;
    };
  };

  isATicket(i) {
    if(this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert') {
      return true;
    };
  };

  isAConjuredItem(i) {
    if(this.items[i].name === 'Conjured Item') {
      return true;
    };
  };

  //the follwing are quality sorting methods

  hasQualityAboveFifty(i) {
    if (this.items[i].quality > 50) {
      return true;
    };
  };

  hasQualityBelowZero(i) {
    if (this.items[i].quality < 0) {
      return true;
    };
  };

  //the following are sellin sorting methods

  isOutOfDate(i) {
    if (this.items[i].sellIn <= 0) {
      return true;
    };
  };

  isNotOutOfDate(i) {
    if (this.items[i].sellIn > 0) {
      return true;
    };
  };

  hasLessThanSixDaysLeft(i) {
    if(this.items[i].sellIn < 6) {
      return true;
    };
  };

  hasSixOrMoreDaysLeft(i) {
    if(this.items[i].sellIn >= 6) {
      return true;
    };
  };

  hasLessThanElevenDaysLeft(i) {
    if(this.items[i].sellIn < 11) {
      return true;
    };
  };

  hasElevenOrMoreDaysLeft(i) {
    if(this.items[i].sellIn >= 11) {
      return true;
    };
  };

}
module.exports = {
  Item,
  Shop
}
