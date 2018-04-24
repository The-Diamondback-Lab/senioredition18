//react imports
import React, { Component } from 'react';

//component imports
import Button from './Button.jsx';

export default class StoryBlock extends Component {
  constructor(props) {
    super(props);
    this.id = 'story-block-' + this.props.id;
    this.story = this.props.story;
  }
  render() {
    return (
      <figure id={this.id} className="story-block preview">
        <div className="img-container">
          <img src={this.story.images[0].url} alt="" />
        </div>
        <figcaption>
          <h3 className="story-block-heading">{this.story.heading}</h3>
          <h4 className="story-block-author">{this.story.author}</h4>

          <p
            className="story-block-blurb"
            id={'story-block-blurb-' + this.props.id}
            dangerouslySetInnerHTML={{
              __html: this.story.blurb,
            }}
          />

          <Button icon id={this.props.id} blurb={this.story.blurb} />
        </figcaption>
      </figure>
    );
  }
}
