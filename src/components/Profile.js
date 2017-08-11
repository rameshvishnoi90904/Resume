import React from 'react';

const Profile = props => {
    const profileObj = props.profileData;
    return  <div>
                  <div className="profileImg"><img role="presentation" className="img-circle center-block" src={profileObj.picture} width="200" /></div>
                  <h1 className="text-center">{profileObj.name}</h1>
                  <h2 className="text-center">{profileObj.label}</h2>
                  <div className="divider"></div>
                  <ul className="list-unstyled contact-links text-center">
                    <li><i className="fa fa-lg right-spacing fa-location-arrow"></i>{profileObj.location.city}, {profileObj.location.countryCode}</li>
                    <li><i className="fa fa-lg right-spacing fa-envelope"></i><a href={`mailto:${profileObj.email}`}>{profileObj.email}</a></li>
                  </ul>
                  <div className="divider"></div>
                  <ul className="profileLinks list-inline text-center">
                    <li><a className="fa fa-github fa-2x" href={'https://github.com/'+profileObj.profiles[0].username} target="_blank"></a></li>
                    <li><a className="fa fa-linkedin fa-2x" href={profileObj.profiles[1].url+profileObj.profiles[1].username} target="_blank"></a></li>
                    <li><a className="fa fa-stack-overflow fa-2x" href={profileObj.profiles[2].url+profileObj.profiles[2].username} target="_blank"></a></li>


                  </ul>
                {/*  <div className="divider"></div>
                  <p>I built this site with <a href="https://facebook.github.io/react/">React</a> components and a <a href="https://jsonresume.org/schema/">JSON Resume Schema</a>. The full source code can be found in <a href="https://github.com/freaksauce/React-Resume-ES6">my Github repo</a>.</p>*/}
            </div>
};

export default Profile;
