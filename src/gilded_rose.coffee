Item = (name, sellIn, quality) ->
  @name = name
  @sellIn = sellIn
  @quality = quality

GildedRose = ->
  GildedRose.updateQuality [
    new Item("+5 Dexterity Vest", 10, 20)
    new Item("Aged Brie", 2, 0)
    new Item("Elixir of the Mongoose", 5, 7)
    new Item("Sulfuras, Hand of Ragnaros", 0, 80)
    new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20)
    new Item("Conjured Mana Cake", 3, 6)
  ]

GildedRose.updateQuality = (items) ->
  items.forEach(GildedRose.updateItem)
  items

GildedRose.updateItem = (item) ->
  i = ImprovedItemFactory.create(item)
  i.update()
  i.item

class ImprovedItemFactory
  @create: (item) ->
    switch item.name
      when "Aged Brie" then return new AgedItem(item)
      when "Backstage passes to a TAFKAL80ETC concert" then return new BackstagePassItem(item)
      when "Sulfuras, Hand of Ragnaros" then return new SulfurasItem(item)
      else return new DefaultItem(item)

class ImprovedItem
  MAX_QUALITY = 50
  MIN_QUALITY = 0
  constructor: (@item) ->
  increaseQuality: -> @item.quality++
  decreaseQuality: -> @item.quality--
  resetQuality: -> @item.quality = 0
  isQualityBelowMax: -> @item.quality < MAX_QUALITY
  isQualityOverMin: -> @item.quality > MIN_QUALITY
  decreaseShellIn: -> @item.sellIn--
  isShellInLowerThan: (num) -> @item.sellIn < num

class AgedItem extends ImprovedItem
  update: ->
    @decreaseShellIn()
    if @isQualityBelowMax()
      @increaseQuality()
      @increaseQuality() if @isShellInLowerThan(0)

class BackstagePassItem extends ImprovedItem
  update: ->
    if @isQualityBelowMax()
      @increaseQuality()
      @increaseQuality() if @isShellInLowerThan(11)
      @increaseQuality() if @isShellInLowerThan(6)
    @decreaseShellIn()
    @resetQuality() if @isShellInLowerThan(0)

class SulfurasItem extends ImprovedItem
  update: -> @decreaseShellIn()

class DefaultItem extends ImprovedItem
  update: ->
    @decreaseShellIn()
    if @isQualityOverMin()
      @decreaseQuality()
      @decreaseQuality() if @isShellInLowerThan(0)