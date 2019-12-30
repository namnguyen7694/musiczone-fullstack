import React from 'react';
import { Link } from 'react-router';
import { changeAlias } from '../../../utils/func';
import LazyloadImage from '../../LazyloadImage';
import './artist_card.sass';

const ArtistCard = (props) => {
  const link = props.link.replace('/nghe-si', '');
  const url = `/artist${link}`;
  
  return (
    <div className="artist-card">
      <Link to={url}>
        <LazyloadImage className="artist-image" src={props.thumb} />
      </Link>
      <div className="artist-detail">
        <div className="artist-title">
          <Link to={url}>{props.name}</Link>
        </div>
      </div>
    </div>
  );
};

export default ArtistCard;