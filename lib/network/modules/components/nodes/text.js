/**
 * Created by Alex on 3/18/2015.
 */
'use strict';

import NodeUtil from './nodeUtil'

class Text extends NodeUtil {
  constructor (options, body, labelModule) {
    super(options, body, labelModule);
  }

  setOptions(options) {
    this.options = options;
  }

  resize(ctx, selected) {
    if (this.width === undefined) {
      var margin = 5;
      var textSize = this.labelModule.getTextSize(ctx,selected);
      this.width = textSize.width + 2 * margin;
      this.height = textSize.height + 2 * margin;
    }
  }

  draw(ctx, x, y, selected, hover) {
    this.resize(ctx, selected || hover);
    this.left = x - this.width / 2;
    this.top = y - this.height / 2;

    this.labelModule.draw(ctx, x, y, selected || hover);

    this.boundingBox.top = this.top;
    this.boundingBox.left = this.left;
    this.boundingBox.right = this.left + this.width;
    this.boundingBox.bottom = this.top + this.height;
  }

  distanceToBorder(ctx, angle) {
    console.log("hererer")
    console.log(this._distanceToBorder(angle))
    this.resize(ctx);
    return this._distanceToBorder(angle);
  }
}

export default Text;