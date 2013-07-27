
describe("GildedRose", function() {
  var expectQualityToBe, expectSellInToBe, update;
  update = function(item) {
    return GildedRose.updateQuality([item])[0];
  };
  expectQualityToBe = function(item, quality) {
    return expect(item.quality).to.be.eql(quality);
  };
  expectSellInToBe = function(item, sellIn) {
    return expect(item.sellIn).to.be.eql(sellIn);
  };
  it("decreases default item quality by 1", function() {
    var item;
    item = update(new Item("Default", 10, 20));
    return expectQualityToBe(item, 19);
  });
  it("decreases default item quality by 2", function() {
    var item;
    item = update(new Item("Default", 0, 10));
    return expectQualityToBe(item, 8);
  });
  it("decreases default item sellin by 1", function() {
    var item;
    item = update(new Item("Default", 5, 20));
    return expectSellInToBe(item, 4);
  });
  it("increases aged item quality by 1", function() {
    var item;
    item = update(new Item("Aged Brie", 12, 20));
    return expectQualityToBe(item, 21);
  });
  it("resets aged item quality to 0", function() {
    var item;
    item = update(new Item("Aged Brie", 0, 20));
    return expectQualityToBe(item, 22);
  });
  it("decreases aged item sellin by 1", function() {
    var item;
    item = update(new Item("Aged Brie", 5, 20));
    return expectSellInToBe(item, 4);
  });
  it("increases backstage item quality by 1", function() {
    var item;
    item = update(new Item("Backstage passes to a TAFKAL80ETC concert", 12, 20));
    return expectQualityToBe(item, 21);
  });
  it("increases backstage item quality by 2", function() {
    var item;
    item = update(new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20));
    return expectQualityToBe(item, 22);
  });
  it("increases backstage item quality by 3", function() {
    var item;
    item = update(new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20));
    return expectQualityToBe(item, 23);
  });
  it("decreases backstage item sellin by 1", function() {
    var item;
    item = update(new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20));
    return expectSellInToBe(item, 4);
  });
  return it("resets backstage item quality to 0", function() {
    var item;
    item = update(new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20));
    return expectQualityToBe(item, 0);
  });
});
