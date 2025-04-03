import React from 'react';
import './accountPage.css';

const AccountPage = () => {
    const imageSrcPlaceholder = 'https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=';

    return(
        <div className="wrapper">
            <div className="account-page">
                <header className="header">Account Page</header>

                <div className="main-content">
                    <div className="left-column">
                        <div className="pfp">
                        <img className ="userpfp" src ={imageSrcPlaceholder} alt="Profile Picture" />
                        </div>

                        <div className="user-info">
                            <div className = "profile-inputs">Full Name</div>
                            <div className ="profile-inputs"> Username</div>
                            <div className = "profile-inputs"> Email Address</div>
                            <div className ="profile-inputs"> Phone Number</div>
                            <div className ="profile-inputs"> Age</div>
                            <div className ="profile-inputs"> School</div>
                        </div>
                    </div>

                    {/* biography section */}
                    <div className="right-column">
                        <div className="bio-section">
                            <form>
                                <label className="bio-title">Biography</label>
                                <textarea className="biographyTextArea"></textarea>
                                <button className="changeBiographyBtn">Change</button>
                                <button type='submit' className="submitBtn">Submit</button>
                            </form>
                        </div>
                    </div>

                    {/* friends section */}


                </div>
            </div>


        </div>
    );
};



export default AccountPage;