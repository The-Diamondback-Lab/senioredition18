//react imports
import React, { Component } from 'react';

//jquery import
import $ from 'jquery';

//component imports
import * as Icons from './Icons.jsx';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.icon = <Icons.OpenBook color="white" />;
    this.text = 'Read More';
  }

  onClick = e => {
    let block = $('#story-block-' + this.props.id);
    let blurb = $(
      '#story-block-' + this.props.id + '> #story-block-blurb-' + this.props.id
    );

    if (block.attr('class') === 'story-block preview') {
      block.removeClass('preview');
      block.addClass('full');
      console.log(blurb);
      blurb.html(this.props.blurb);
      this.icon = <Icons.ClosedBook color="white" />;
      this.text = 'Finish Reading';
    } else {
      block.removeClass('full');
      block.addClass('preview');
      blurb.html(this.props.blurb.substring(0, 500) + '...');
      this.icon = <Icons.OpenBook color="white" />;
      this.text = 'Read More';
    }

    this.forceUpdate();
    e.preventDefault();
  };

  render() {
    let style = this.props.style !== undefined ? this.props.style : {};
    let btnStyle = !this.props.icon ? 'btn' : 'btn-icon';
    let btn = !this.props.icon ? (
      <a href={this.props.to} style={style} className={btnStyle}>
        {this.props.children}
      </a>
    ) : (
      <button style={style} className={btnStyle} onClick={this.onClick}>
        {this.icon}
        <p>{this.text}</p>
      </button>
    );
    return btn;
  }
}
