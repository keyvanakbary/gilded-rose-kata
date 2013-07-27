Item = (name, sellIn, quality) ->
  @name = name
  @sellIn = sellIn
  @quality = quality

GildedRose = ->
  console.log "OMGHAI!"
  items = []
  items.push new Item("+5 Dexterity Vest", 10, 20)
  items.push new Item("Aged Brie", 2, 0)
  items.push new Item("Elixir of the Mongoose", 5, 7)
  items.push new Item("Sulfuras, Hand of Ragnaros", 0, 80)
  items.push new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20)
  items.push new Item("Conjured Mana Cake", 3, 6)
  GildedRose.updateQuality(items)

GildedRose.updateQuality = (items) ->
  i = 0
  while i < items.length
    if ("Aged Brie" isnt items[i].name and "Backstage passes to a TAFKAL80ETC concert" isnt items[i].name)
      if (items[i].quality > 0)
        if ("Sulfuras, Hand of Ragnaros" isnt items[i].name)
          items[i].quality = items[i].quality - 1
    else
      if (items[i].quality < 50)
        items[i].quality = items[i].quality + 1
        if ("Backstage passes to a TAFKAL80ETC concert" == items[i].name)
          if (items[i].sellIn < 11)
            if (items[i].quality < 50)
              items[i].quality = items[i].quality + 1
          if (items[i].sellIn < 6)
            if (items[i].quality < 50)
              items[i].quality = items[i].quality + 1

    if ("Sulfuras, Hand of Ragnaros" isnt items[i].name)
      items[i].sellIn = items[i].sellIn - 1

    if (items[i].sellIn < 0)
      if ("Aged Brie" isnt items[i].name)
        if ("Backstage passes to a TAFKAL80ETC concert" isnt items[i].name)
          if (items[i].quality > 0)
            if ("Sulfuras, Hand of Ragnaros" isnt items[i].name)
              items[i].quality = items[i].quality - 1
        else
          items[i].quality = items[i].quality - items[i].quality
      else
        if (items[i].quality < 50)
          items[i].quality = items[i].quality + 1
    i++
  items