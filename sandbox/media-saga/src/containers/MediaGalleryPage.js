import React, {Component} from 'react';
import {flickrImages, shutterStockVideos} from '../Api/api.js';
import { connect } from 'react-redux';
import { searchMediaAction } from '../actions/mediaActions';

class MediaGalleryPage extends Component {
  
  componentDidMount() {
    this.props.dispatch(searchMediaAction('rain'));
  }

  render() {
    console.log(this.props.images, 'Images');
    console.log(this.props.videos, 'Videos');
    console.log(this.props.selecteImage, 'SelectedImage');
    console.log(this.props.selectedVideo, 'SelectedVideo');
    return (
      <div></div>
    );
  }
}

MediaGalleryPage.propTypes = {
// Define your PropTypes here
};

 // Subscribe component to redux store and merge the state into 
 // component's props
const mapStateToProps = ({ images, videos }) => ({
  images: images[0],
  selectedImage: images.selectedImage,
  videos: videos[0],
  selectedVideo: videos.selectedVideo
});

// connect method from react-router connects the component with redux store
export default connect(mapStateToProps)(MediaGalleryPage);