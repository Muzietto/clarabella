import React, {Component} from 'react';
import {flickrImages, shutterStockVideos} from '../Api/api.js';

class MediaGalleryPage extends Component {
  
  componentDidMount() {
    flickrImages('rain').then(images => console.log(images, 'Images'));
    shutterStockVideos('rain').then(videos => console.log(videos, 'Videos'));
  }

  render() {
    return (
      <div></div>
    );
  }
}

export default MediaGalleryPage;
