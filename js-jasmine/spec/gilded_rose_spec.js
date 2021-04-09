
describe("Gilded Rose", function() {
  describe("In Date Items", function(){
    it("should update values for REGULAR ITEMS - still in date", function() {
      const gildedRose = new Shop([ new Item("regularItem", 20, 50) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).toEqual("regularItem");
      expect(items[0].sellIn).toEqual(19);
      expect(items[0].quality).toEqual(49);
    });

    it("should update values for CONJURED ITEMS - still in date", function() {
      const gildedRose = new Shop([ new Item("Conjured Item", 20, 50) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(19);
      expect(items[0].quality).toEqual(48);
    });

    it("should update values for BACKSTAGE PASSES - above 10 days left", function() {
     const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 11, 20) ]);
     const items = gildedRose.updateQuality();
     expect(items[0].sellIn).toEqual(10);
     expect(items[0].quality).toEqual(21);
    });

    it("should update values for BACKSTAGE PASSES - above 5 days left", function() {
      const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 6, 20) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(5);
      expect(items[0].quality).toEqual(22);
     });

     it("should update values for BACKSTAGE PASSES - less than 5 days left", function() {
      const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 1, 20) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(0);
      expect(items[0].quality).toEqual(23);
     });

     it("should update values for AGED BRIE - still in date", function() {
       const gildedRose = new Shop([ new Item("Aged Brie", 1, 20) ]);
       const items = gildedRose.updateQuality(); 
       expect(items[0].sellIn).toEqual(0);
       expect(items[0].quality).toEqual(21);
     })
  });

  describe("legendary Items", function() {
    it("should do nothing to LEGENDAY ITEMS", function(){
      const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 10, 50) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(10);
    });
  });

  describe("Items out of date", function() {
    it("should update values for REGULAR ITEMS & quality 2x - out of date", function() {
      const gildedRose = new Shop([ new Item("regularItem", 0, 10) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(-1);
      expect(items[0].quality).toEqual(8)
    });

    it("should update values for CONJURED ITEMS & quality 2x - out of date", function() {
      const gildedRose = new Shop([ new Item("Conjured Item", 0, 10) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(-1);
      expect(items[0].quality).toEqual(6)
    })

    it("should update values of BACKSTAGE PASSES to 0  - out of date", function() {
      const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20) ]);
      const items = gildedRose.updateQuality(); 
      expect(items[0].sellIn).toEqual(-1);
      expect(items[0].quality).toEqual(0);
    })

    it("should update values for AGED BRIE & quality 2x - out of date", function() {
      const gildedRose = new Shop([ new Item("Aged Brie", 0, 10) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(-1);
      expect(items[0].quality).toEqual(12);
    });
  });

  describe("edge cases", function() {
    it("cannot let quality go below 0", function() {
      const gildedRose = new Shop([ 
        new Item("regularItem", 5, 0),
        new Item("Backstage passes to a TAFKAL80ETC concert", 0, 0 ), 
        new Item("Conjured Item", 5, 1)
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(0);
      expect(items[1].quality).toEqual(0);
      expect(items[2].quality).toEqual(0);
    });

    it("cannot let quality go above 50 - while still in date", function() {
      const gildedRose = new Shop([
        new Item("Backstage passes to a TAFKAL80ETC concert", 5, 50 ), 
        new Item("Aged Brie",5, 50)
      ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(50);
      expect(items[1].quality).toEqual(50);
    })

    it("cannot let quality go above 50 - while out of date", function() {
      const gildedRose = new Shop([ new Item("Aged Brie", 0, 50) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(50);
    })
  });

});
