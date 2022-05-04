import React from 'react';
import './mobile_artist_profile.scss';
import photoJR from '../../../assets/images/artists/photo-Jordan-Rakei.png';

function MobileArtistProfile(params) {
	return (
		<div className="mobileartistprofile" style={{ background: '#000' }}>
			<div className="mobileartistprofile__img" style={{ height: '432px' }}>
				<img src={params.artist.pic} alt="" />
			</div>
			<div className="mobileartistprofile__card">
				<div className="mobileartistprofile__date-wrapper">
					<span className="mobileartistprofile__date">{params.artist.date}</span>
					<span className="mobileartistprofile__time">
						{params.artist.time} — {params.artist.time_end}
					</span>
				</div>
				<div className="mobileartistprofile__name">{params.artist.name}</div>
				<div className="mobileartistprofile__description">{params.artist.description}</div>
			</div>
		</div>
	);
}

export default MobileArtistProfile;
