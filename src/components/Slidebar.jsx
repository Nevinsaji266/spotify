import React from 'react';
import './Slidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faGlobe, faPlay } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

function Slidebar() {
  return (
    <div className='main md'>
      <div className='slidebar-container'> {/* New container for columns */}
        <div className='box1 md'>
          {/* Your Library Header */}
          <div className='library-header'>
            <p>Your Library</p>
            <FontAwesomeIcon icon={faPlus} style={{ color: "#888" }} />
          </div>

          {/* Create Playlist Section */}
          <div className='firstplaylist'>
            <h4>Create your first playlist</h4>
            <p>It's easy, we will help you.</p>
            <div className="user-controls">
              <button className="crp">Create playlist</button>
            </div>
          </div>

          {/* Podcasts Section */}
          <div className='podcasts'>
            <h4>Let's find some podcasts to follow</h4>
            <p>We will keep you updated on new episodes.</p>
            <div className="user-controls">
              <button className="crp">Browse podcasts</button>
            </div>
          </div>

          {/* Legal Section */}
          <div className='legal'>
            <div className='legal-row'>
              <h5>Legal</h5>
              <h6>Safety & Privacy Center</h6>
              <h6>Privacy Policy</h6>
            </div>
            <div className='legal-row'>
              <h5>Cookies</h5>
              <h6>About Ads</h6>
              <h6>Accessibility</h6>
            </div>
            <div className='legal-row'>
              <h5>Cookies</h5>
            </div>
          </div>

          {/* Language Selection Button */}
          <div className="signuppp">
            <button className="btn signup">
              <FontAwesomeIcon icon={faGlobe} style={{ color: "#f5f9ff" }} /> English
            </button>
          </div>
        </div>

        {/* Box2 - Content Area */}
        <div className='box2'>
          <h2>Popular artist</h2>
          <p className='show1'>Show all</p>
          <div className='first md'>
            <div className='boxxxx1'>
              <img src="https://i.scdn.co/image/ab6761610000e5ebcb6926f44f620555ba444fca" alt="" className='circular-image' />
              <h5>Pritam</h5>
              <p className='pa'>Artist</p>
              <div className="play-button">
                <FontAwesomeIcon icon={faPlay} className="fa-play" />
              </div>
            </div>
            <div className='boxxxx1'>
              <img src="https://i.scdn.co/image/ab6761610000e5ebb19af0ea736c6228d6eb539c" alt="" className='circular-image' />
              <h5>A.R. Rahman</h5>
              <p className='pa'>Artist</p>
              <div className="play-button">
                <FontAwesomeIcon icon={faPlay} className="fa-play" />
              </div>
            </div>
            <div className='boxxxx1'>
            <img src="https://i.scdn.co/image/ab6761610000e5eb5ba2d75eb08a2d672f9b69b7" alt="" className='circular-image' />
            <h5>Arijit Singh</h5>
            <p className='pa'>Artist</p>
            <div className="play-button">
            <FontAwesomeIcon icon={faPlay} className="fa-play" />
          </div>
          </div>
          <div className='boxxxx'>
            <img src="https://i.scdn.co/image/ab676161000051740f0be2054fe9594026a6b843" alt="" className='circular-image' />
            <h5>Anirudh</h5>
            <p className='pa'>Artist</p>
            <div className="play-button">
            <FontAwesomeIcon icon={faPlay} className="fa-play" />
          </div>
          </div>
          <div className='boxxxx'>
            <img src="https://i.scdn.co/image/ab6761610000e5ebc40600e02356cc86f0debe84" alt="" className='circular-image' />
            <h5>Atif aslam</h5>
            <p className='pa'>Artist</p>
            <div className="play-button">
            <FontAwesomeIcon icon={faPlay} className="fa-play" />
          </div>
          </div>
          <div className='boxxxx'>
            <img src="https://i.scdn.co/image/ab676161000051746c13e8b89efbc084311c963c" alt="" className='circular-image' />
            <h5>Sushin Shyam</h5>
            <p className='pa'>Artist</p>
            <div className="play-button">
            <FontAwesomeIcon icon={faPlay} className="fa-play" />
          </div>
          </div>
            {/* Other artist boxes ... */}
          </div>
          <h2>Popular albums</h2>
          <p className='show1'>Show all</p>
          <div className='first'>
            <div className='boxxxx1'>
              <img src="https://i.scdn.co/image/ab67616d0000b273aad3f4b601ae8763b3fc4e88" alt="" className='square-image' />
              <h5>Glory</h5>
              <p className='pa'>yo yo honey singh</p>
              <div className="play-button">
                <FontAwesomeIcon icon={faPlay} className="fa-play" />
              </div>
            </div>
            <div className='boxxxx1'>
            <img src="https://i.scdn.co/image/ab67616d0000b2736404721c1943d5069f0805f3" alt="" className='square-image' />
            <h5>Ashique 2</h5>
            <p className='pa'>mithoon,ankit tiwary,jeet gangui</p>
            <div className="play-button">
            <FontAwesomeIcon icon={faPlay} className="fa-play" />
          </div>
          </div>
          <div className='boxxxx1'>
            <img src="https://i.scdn.co/image/ab67616d0000b27372a77d038887cdc425f5ee55" alt="" className='square-image' />
            <h5>Jo tum mera ho</h5>
            <p className='pa'>Anuv Jain</p>
            <div className="play-button">
            <FontAwesomeIcon icon={faPlay} className="fa-play" />
          </div>
          </div>
          <div className='boxxxx'>
            <img src="https://i.scdn.co/image/ab67616d0000b273bb25239324c4e16ae01fda36" alt="" className='square-image' />
            <h5>Making Memories</h5>
            <p className='pa'>karan Aujala,ikky</p>
            <div className="play-button">
            <FontAwesomeIcon icon={faPlay} className="fa-play" />
          </div>
          </div>
          <div className='boxxxx'>
            <img src="https://i.scdn.co/image/ab67616d0000b2735e16168f7e8ff4fb8aace6cf" alt="" className='square-image' />
            <h5>Aaj ki Raat</h5>
            <p className='pa'>Sachin-Jigar</p>
            <div className="play-button">
            <FontAwesomeIcon icon={faPlay} className="fa-play" />
          </div>
          </div>
          <div className='boxxxx'>
            <img src="https://i.scdn.co/image/ab67616d0000b273707ea5b8023ac77d31756ed4" alt="" className='square-image' />
            <h5>Yeh Jawaani Hai Deewani</h5>
            <p className='pa'>Pritam</p>
            <div className="play-button">
            <FontAwesomeIcon icon={faPlay} className="fa-play" />
          </div>
          </div>
            {/* Other album boxes ... */}
          </div>
          <h2>Popular radio</h2>
          <p className='show1'>Show all</p>
          <div className='first'>
            <div className='boxxxx1'>
              <img src="https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/4YRxDV8wJFPHPTeXepOstw/en-GB" alt="" className='square-image' />
              <p className='pa'>with Sachin-Jigar and Atif Aslam</p>
              <div className="play-button">
                <FontAwesomeIcon icon={faPlay} className="fa-play" />
              </div>
            </div>
            <div className='boxxxx1'>
            <img src="https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/2FKWNmZWDBZR4dE5KX4plR/de" alt="" className='square-image' />
          
            <p className='pa'>With Karan Aujala,shuba</p>
            <div className="play-button">
            <FontAwesomeIcon icon={faPlay} className="fa-play" />
          </div>
          </div>
          <div className='boxxxx1'>
            <img src="https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/70B80Lwx2sxti0M1Ng9e8K/en" alt="" className='square-image' />
        
            <p className='pa'>with Uttam singh  and Ravinandha</p>
            <div className="play-button">
            <FontAwesomeIcon icon={faPlay} className="fa-play" />
          </div>
          </div>
          <div className='boxxxx'>
            <img src="https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/4fEkbug6kZzzJ8eYX6Kbbp/de" alt="" className='square-image' />
         
            <p className='pa'>with Pritam and mohit chahuan</p>
            <div className="play-button">
            <FontAwesomeIcon icon={faPlay} className="fa-play" />
          </div>
          </div>
          <div className='boxxxx'>
            <img src="https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/1mYsTxnqsietFxj1OgoGbG/de" alt="" className='square-image' />
           
            <p className='pa'>with Harris Jayraja and Anirudh</p>
            <div className="play-button">
            <FontAwesomeIcon icon={faPlay} className="fa-play" />
          </div>
          </div>
          <div className='boxxxx'>
            <img src="https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/0oOet2f43PA68X5RxKobEy/en" alt="" className='square-image' />
          
            <p className='pa'>with Pritam and Rahman</p>
            <div className="play-button">
            <FontAwesomeIcon icon={faPlay} className="fa-play" />
          </div>
          </div>
         
            {/* Other radio boxes ... */}
          </div>
          <h2>Featured Charts</h2>
          <p className='show1'>Show all</p>
          <div className='first'>
            <div className='boxxxx1'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGLlBu6U1jfDUnXRCLefd3NBreENIgyowtcw&s" alt="" className='square-image' />
              <p className='pa'>Your weekly update of the most played songs</p>
              <div className="play-button">
                <FontAwesomeIcon icon={faPlay} className="fa-play" />
              </div>
            </div>
            <div className='boxxxx1'>
            <img src="https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_us_default.jpg" alt="" className='square-image' />
            <p className='pa'>Your weekly update of the most played songs</p>
            <div className="play-button">
            <FontAwesomeIcon icon={faPlay} className="fa-play" />
          </div>
          </div>
          <div className='boxxxx1'>
            <img src="https://charts-images.scdn.co/assets/locale_en/regional/daily/region_global_default.jpg" alt="" className='square-image' />
            <p className='pa'>Your weekly update of the most played songs</p>
            <div className="play-button">
            <FontAwesomeIcon icon={faPlay} className="fa-play" />
          </div>
          </div>
          <div className='boxxxx'>
            <img src="https://charts-images.scdn.co/assets/locale_en/regional/daily/region_us_default.jpg" alt="" className='square-image' />
            <p className='pa'>Your weekly update of the most played songs</p>
            <div className="play-button">
            <FontAwesomeIcon icon={faPlay} className="fa-play" />
          </div>
          </div>
          <div className='boxxxx'>
            <img src="https://charts-images.scdn.co/assets/locale_en/viral/daily/region_global_default.jpg" alt="" className='square-image' />
            <p className='pa'>Your weekly update of the most played songs</p>
            <div className="play-button">
            <FontAwesomeIcon icon={faPlay} className="fa-play" />
          </div>
          </div>
          <div className='boxxxx'>
            <img src="https://charts-images.scdn.co/assets/locale_en/viral/daily/region_us_default.jpg" alt="" className='square-image' />
            <p className='pa'>Your weekly update of the most played songs</p>
            <div className="play-button">
            <FontAwesomeIcon icon={faPlay} className="fa-play" />
          </div>
          </div>
            {/* Other chart boxes ... */}
          </div>
          <h2>Spotify Playlist</h2>
          <p className='show1'>Show all</p>
          <div className='first'>
            <div className='boxxxx1'>
              <img src="https://i.scdn.co/image/ab67706f00000002640aa944e9d545e4dff348c1" alt="" className='square-image' />
              <p className='pa'>lazy slow lofi beats for laid back moments</p>
              <div className="play-button">
                <FontAwesomeIcon icon={faPlay} className="fa-play" />
              </div>
            </div>
            <div className='boxxxx1'>
            <img src="https://i.scdn.co/image/ab67706f00000002d6710ea346fec48e89d77dba" alt="" className='square-image' />
            <p className='pa'>The biggest song of the 1980s cover:Bruce</p>
            <div className="play-button">
            <FontAwesomeIcon icon={faPlay} className="fa-play" />
          </div>
          </div>
          <div className='boxxxx1'>
            <img src="https://i.scdn.co/image/ab67706f000000029385ce8e365c6b8ba3f70d4b" alt="" className='square-image' />
            <p className='pa'>Just lean back and enjoy relased beats.</p>
            <div className="play-button">
            <FontAwesomeIcon icon={faPlay} className="fa-play" />
          </div>
          </div>
          <div className='boxxxx'>
            <img src="https://i.scdn.co/image/ab67706f00000002b43eac9f01f8b865662b5c29" alt="" className='square-image' />
            <p className='pa'>The biggest song of the 2020s cover:Doja cat</p>
            <div className="play-button">
            <FontAwesomeIcon icon={faPlay} className="fa-play" />
          </div>
          </div>
          <div className='boxxxx'>
            <img src="https://i.scdn.co/image/ab67706f0000000255be59b7be2929112e7ac927" alt="" className='square-image' />
            <p className='pa'>Chill beats, lofi vibe ,new tracks every week</p>
            <div className="play-button">
            <FontAwesomeIcon icon={faPlay} className="fa-play" />
          </div>
          </div>
          <div className='boxxxx'>
            <img src="https://i.scdn.co/image/ab67706f00000002472120b92edea982b5feb264" alt="" className='square-image' />
            <p className='pa'>soft instrument Jazz for all your activiies</p>
            <div className="play-button">
            <FontAwesomeIcon icon={faPlay} className="fa-play" />
          </div>
          </div>
            {/* Other playlist boxes ... */}
          </div>
          <div className='verth'>
          <h2>Try something else</h2>
       
          </div>

          <div className='first2'>
            <div className='boxxxx5'>
              <img src="https://i.scdn.co/image/ab67706f000000023f4f36968da7e3418881f5b8" alt="" className='square-image' />
              <p className='pa'>Sid sriram,vijay yesudas ,sam cs,vishnu vijay</p>
              <div className="play-button">
                <FontAwesomeIcon icon={faPlay} className="fa-play" />
              </div>
            </div>
            <div className='boxxxx5'>
            <img src="https://i.scdn.co/image/ab67706f00000002f21cff33277dae67bdad776b" alt="" className='square-image' />
            <p className='pa'>Shankar Mahadevan ,Gopi sundar,shan...</p>
            <div className="play-button">
            <FontAwesomeIcon icon={faPlay} className="fa-play" />
          </div>
          </div>
          <div className='boxxxx5'>
            <img src="https://i.scdn.co/image/ab67706f0000000277ede2a3bba3060652445007" alt="" className='square-image' />
            <p className='pa'>Sid Sriram,Anirudh...</p>
            <div className="play-button">
            <FontAwesomeIcon icon={faPlay} className="fa-play" />
          </div>
          </div>
         
          
         
            {/* Other playlist boxes ... */}
          </div>
          <div className='verth'>
          <h2>Today biggest Hits</h2>
       
          </div>
         
          <div className='first2'>
            <div>
         
            </div>
            <div className='boxxxx5'>
              <img src="https://i.scdn.co/image/ab67706f00000002f4caf116bd60e783f94363c3" alt="" className='square-image' />
              <p className='pa'>Sushin Shyam ,Dibu ninan Thomas,jakesbijioy...</p>
              <div className="play-button">
                <FontAwesomeIcon icon={faPlay} className="fa-play" />
              </div>
            </div>
            <div className='boxxxx5'>
            <img src="https://i.scdn.co/image/ab67706f00000002dda381d6e4b5ebc246bada8a" alt="" className='square-image' />
            <p className='pa'>Sid Sriram,Anirudh,g v prakash,harris...</p>
            <div className="play-button">
            <FontAwesomeIcon icon={faPlay} className="fa-play" />
          </div>
          </div>
          <div className='boxxxx5'>
            <img src="https://i.scdn.co/image/ab67706f00000002e7539699ca90a70a12a92c36" alt="" className='square-image' />
            <p className='pa'>Sushin Shyam ,Dibu ninan Thomas...</p>
            <div className="play-button">
            <FontAwesomeIcon icon={faPlay} className="fa-play" />
          </div>
          </div>
         
          
         
            {/* Other playlist boxes ... */}
          </div>
       
          <div className='first'>
            <div className='bo'>
              <h4>Company</h4>
              <p className='paa mt-3 '>About</p>
              <p className='paa'>jobs</p>
              <p className='paa '>For the record</p>
            </div>
            <div className='boxy'>
              <h4>Communities</h4>
              <p className='paa mt-3 '>For artists</p>
              <p className='paa'>Devlopers</p>
              <p className='paa '>Advertising</p>
              <p className='paa'>Investors</p>
              <p className='paa '>vendors</p>
            </div>
            <div className='boxy'>
              <h4>Useful links</h4>
              <p className='paa mt-3 '>Support</p>
              <p className='paa'>Free mobile app</p>
            </div>
            <div className='boxy'>
              <h4>Spotify plans</h4>
              <p className='paa mt-3 '>Premium individual</p>
              <p className='paa'>Premium Duo</p>
              <p className='paa '>Premium family</p>
              <p className='paa'>Premium student</p>
              <p className='paa '>Spotify free</p>
            </div>
            <div className='undericon'>
              <FontAwesomeIcon icon={faInstagram} className="fa-2x" />
            </div>
            <div className='undericon2'>
              <FontAwesomeIcon icon={faTwitter} className="fa-2x" />
            </div>
            <div className='undericon2'>
              <FontAwesomeIcon icon={faFacebook} className="fa-2x" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slidebar;
