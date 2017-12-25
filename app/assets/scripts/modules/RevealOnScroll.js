import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
  constructor(els, offset) {
    this.itemsToReval = els;
    this.offsetPercentage = offset;
    this.hideInitially();
    this.createWaypoints();
  }

  hideInitially() {
    this.itemsToReval.addClass('reveal-item');
  }

  createWaypoints() {
    var that = this;
    this.itemsToReval.each(function () {
      var currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: function () {
          $(currentItem).addClass('reveal-item--is-visible');
        },
        offset: that.offsetPercentage
      });
    });
  }
}

export default RevealOnScroll;