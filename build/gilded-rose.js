var AgedItem, BackstagePassItem, DefaultItem, GildedRose, ImprovedItem, ImprovedItemFactory, Item, SulfurasItem,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Item = function(name, sellIn, quality) {
  this.name = name;
  this.sellIn = sellIn;
  return this.quality = quality;
};

GildedRose = function() {
  return GildedRose.updateQuality([new Item("+5 Dexterity Vest", 10, 20), new Item("Aged Brie", 2, 0), new Item("Elixir of the Mongoose", 5, 7), new Item("Sulfuras, Hand of Ragnaros", 0, 80), new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20), new Item("Conjured Mana Cake", 3, 6)]);
};

GildedRose.updateQuality = function(items) {
  items.forEach(GildedRose.updateItem);
  return items;
};

GildedRose.updateItem = function(item) {
  var i;
  i = ImprovedItemFactory.create(item);
  i.update();
  return i.item;
};

ImprovedItemFactory = (function() {

  function ImprovedItemFactory() {}

  ImprovedItemFactory.create = function(item) {
    switch (item.name) {
      case "Aged Brie":
        return new AgedItem(item);
      case "Backstage passes to a TAFKAL80ETC concert":
        return new BackstagePassItem(item);
      case "Sulfuras, Hand of Ragnaros":
        return new SulfurasItem(item);
      default:
        return new DefaultItem(item);
    }
  };

  return ImprovedItemFactory;

})();

ImprovedItem = (function() {
  var MAX_QUALITY, MIN_QUALITY;

  MAX_QUALITY = 50;

  MIN_QUALITY = 0;

  function ImprovedItem(item) {
    this.item = item;
  }

  ImprovedItem.prototype.increaseQuality = function() {
    return this.item.quality++;
  };

  ImprovedItem.prototype.decreaseQuality = function() {
    return this.item.quality--;
  };

  ImprovedItem.prototype.resetQuality = function() {
    return this.item.quality = 0;
  };

  ImprovedItem.prototype.isQualityBelowMax = function() {
    return this.item.quality < MAX_QUALITY;
  };

  ImprovedItem.prototype.isQualityOverMin = function() {
    return this.item.quality > MIN_QUALITY;
  };

  ImprovedItem.prototype.decreaseShellIn = function() {
    return this.item.sellIn--;
  };

  ImprovedItem.prototype.isShellInLowerThan = function(num) {
    return this.item.sellIn < num;
  };

  return ImprovedItem;

})();

AgedItem = (function(_super) {

  __extends(AgedItem, _super);

  function AgedItem() {
    return AgedItem.__super__.constructor.apply(this, arguments);
  }

  AgedItem.prototype.update = function() {
    this.decreaseShellIn();
    if (this.isQualityBelowMax()) {
      this.increaseQuality();
      if (this.isShellInLowerThan(0)) {
        return this.increaseQuality();
      }
    }
  };

  return AgedItem;

})(ImprovedItem);

BackstagePassItem = (function(_super) {

  __extends(BackstagePassItem, _super);

  function BackstagePassItem() {
    return BackstagePassItem.__super__.constructor.apply(this, arguments);
  }

  BackstagePassItem.prototype.update = function() {
    if (this.isQualityBelowMax()) {
      this.increaseQuality();
      if (this.isShellInLowerThan(11)) {
        this.increaseQuality();
      }
      if (this.isShellInLowerThan(6)) {
        this.increaseQuality();
      }
    }
    this.decreaseShellIn();
    if (this.isShellInLowerThan(0)) {
      return this.resetQuality();
    }
  };

  return BackstagePassItem;

})(ImprovedItem);

SulfurasItem = (function(_super) {

  __extends(SulfurasItem, _super);

  function SulfurasItem() {
    return SulfurasItem.__super__.constructor.apply(this, arguments);
  }

  SulfurasItem.prototype.update = function() {
    return this.decreaseShellIn();
  };

  return SulfurasItem;

})(ImprovedItem);

DefaultItem = (function(_super) {

  __extends(DefaultItem, _super);

  function DefaultItem() {
    return DefaultItem.__super__.constructor.apply(this, arguments);
  }

  DefaultItem.prototype.update = function() {
    this.decreaseShellIn();
    if (this.isQualityOverMin()) {
      this.decreaseQuality();
      if (this.isShellInLowerThan(0)) {
        return this.decreaseQuality();
      }
    }
  };

  return DefaultItem;

})(ImprovedItem);
