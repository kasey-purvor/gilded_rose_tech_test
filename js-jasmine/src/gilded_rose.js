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
    if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert' && this.items[i].name != 'Sulfuras, Hand of Ragnaros' && this.items[i].name != 'Conjured Item' && this.items[i].sellIn <= 0) {
      this.items[i].quality = this.items[i].quality - 2;
      this.items[i].sellIn = this.items[i].sellIn - 1; 
    } if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert' && this.items[i].name != 'Sulfuras, Hand of Ragnaros' && this.items[i].name != 'Conjured Item' && this.items[i].sellIn > 0) {
      this.items[i].quality = this.items[i].quality - 1;
      this.items[i].sellIn = this.items[i].sellIn - 1; 
    } if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert' && this.items[i].name != 'Sulfuras, Hand of Ragnaros' && this.items[i].name != 'Conjured Item' && this.items[i].quality < 0){
      this.items[i].quality = 0;
    }
  };

  conjuredItemUpdate(i) {
    if (this.items[i].name === 'Conjured Item' && this.items[i].sellIn <= 0) {
      this.items[i].quality = this.items[i].quality - 4;
      this.items[i].sellIn = this.items[i].sellIn - 1; 
    } if (this.items[i].name === 'Conjured Item' && this.items[i].sellIn > 0) {
      this.items[i].quality = this.items[i].quality - 2;
      this.items[i].sellIn = this.items[i].sellIn - 1; 
    } if (this.items[i].name === 'Conjured Item' && this.items[i].quality < 0){
      this.items[i].quality = 0;
    }
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
      this.conjuredItemUpdate(i);

    }

    return this.items;
  }
}
module.exports = {
  Item,
  Shop
}
