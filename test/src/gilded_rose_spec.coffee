describe "GildedRose", ->

  update = (item) ->
    GildedRose.updateQuality([item])[0]

  expectQualityToBe = (item, quality) ->
    expect(item.quality).to.be.eql(quality)

  expectSellInToBe = (item, sellIn) ->
    expect(item.sellIn).to.be.eql(sellIn)

  it "decreases default item quality by 1", ->
    item = update(new Item("Default", 10, 20))
    expectQualityToBe(item, 19)

  it "decreases default item quality by 2", ->
    item = update(new Item("Default", 0, 10))
    expectQualityToBe(item, 8)

  it "decreases default item sellin by 1", ->
    item = update(new Item("Default", 5, 20))
    expectSellInToBe(item, 4)

  it "increases aged item quality by 1", ->
    item = update(new Item("Aged Brie", 12, 20))
    expectQualityToBe(item, 21)

  it "resets aged item quality to 0", ->
    item = update(new Item("Aged Brie", 0, 20))
    expectQualityToBe(item, 22)

  it "decreases aged item sellin by 1", ->
    item = update(new Item("Aged Brie", 5, 20))
    expectSellInToBe(item, 4)

  it "increases backstage item quality by 1", ->
    item = update(new Item("Backstage passes to a TAFKAL80ETC concert", 12, 20))
    expectQualityToBe(item, 21)

  it "increases backstage item quality by 2", ->
    item = update(new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20))
    expectQualityToBe(item, 22)

  it "increases backstage item quality by 3", ->
    item = update(new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20))
    expectQualityToBe(item, 23)

  it "decreases backstage item sellin by 1", ->
    item = update(new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20))
    expectSellInToBe(item, 4)

  it "resets backstage item quality to 0", ->
    item = update(new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20))
    expectQualityToBe(item, 0)