var GildedRose, Item;

Item = function(name, sellIn, quality) {
  this.name = name;
  this.sellIn = sellIn;
  return this.quality = quality;
};

GildedRose = function() {
  var items;
  console.log("OMGHAI!");
  items = [];
  items.push(new Item("+5 Dexterity Vest", 10, 20));
  items.push(new Item("Aged Brie", 2, 0));
  items.push(new Item("Elixir of the Mongoose", 5, 7));
  items.push(new Item("Sulfuras, Hand of Ragnaros", 0, 80));
  items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20));
  items.push(new Item("Conjured Mana Cake", 3, 6));
  return GildedRose.updateQuality(items);
};

GildedRose.updateQuality = function(items) {
  var i;
  i = 0;
  while (i < items.length) {
    if ("Aged Brie" !== items[i].name && "Backstage passes to a TAFKAL80ETC concert" !== items[i].name) {
      if (items[i].quality > 0) {
        if ("Sulfuras, Hand of Ragnaros" !== items[i].name) {
          items[i].quality = items[i].quality - 1;
        }
      }
    } else {
      if (items[i].quality < 50) {
        items[i].quality = items[i].quality + 1;
        if ("Backstage passes to a TAFKAL80ETC concert" === items[i].name) {
          if (items[i].sellIn < 11) {
            if (items[i].quality < 50) {
              items[i].quality = items[i].quality + 1;
            }
          }
          if (items[i].sellIn < 6) {
            if (items[i].quality < 50) {
              items[i].quality = items[i].quality + 1;
            }
          }
        }
      }
    }
    if ("Sulfuras, Hand of Ragnaros" !== items[i].name) {
      items[i].sellIn = items[i].sellIn - 1;
    }
    if (items[i].sellIn < 0) {
      if ("Aged Brie" !== items[i].name) {
        if ("Backstage passes to a TAFKAL80ETC concert" !== items[i].name) {
          if (items[i].quality > 0) {
            if ("Sulfuras, Hand of Ragnaros" !== items[i].name) {
              items[i].quality = items[i].quality - 1;
            }
          }
        } else {
          items[i].quality = items[i].quality - items[i].quality;
        }
      } else {
        if (items[i].quality < 50) {
          items[i].quality = items[i].quality + 1;
        }
      }
    }
    i++;
  }
  return items;
};
