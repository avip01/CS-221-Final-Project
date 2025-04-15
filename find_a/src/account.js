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
                        <img className ="userPfp" src ={imageSrcPlaceholder} alt="Profile Picture" />
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
                </div>

                    {/* friends section */}
                    <div className="friends-section">
                        <h2 className="friends-title">Friends</h2>
                            <div className="friend-grid">
                                {friends.map(friend =>(
                                    <FriendCard
                                    key={friend.id}
                                    name={friend.name}
                                    username={friend.username}
                                    bio={friend.bio}
                                    imageSrc={imageSrcPlaceholder}
                                    />
                                ))}
                            </div>
                    </div>
            </div>
        </div>
    );
};

{/*friend card component */}
const FriendCard = ({name, username, bio, imageSrc}) =>{
    return(
        <div className="friend-card">
            <div className="friend-pic-container">
                <img className="friend-pic" src={imageSrc} alt={`${name}'s profile`} />
            </div>
            <div className="friend-name">{name}</div>
            <div className="friend-username">{username}</div>
            <div className="friend-bio">{bio}</div>
        </div>
    );
};

{/*mock data for friends */}
const friends = [
    {id: 1, name: 'Name', username: 'Username', bio: 'Bio'},
    {id: 2, name: 'Name', username: 'Username', bio: 'Bio'},
    {id: 3, name: 'Name', username: 'Username', bio: 'Bio'},
    {id: 4, name: 'Name', username: 'Username', bio: 'Bio'},
    {id: 5, name: 'Name', username: 'Username', bio: 'Bio'},
    {id: 6, name: 'Name', username: 'Username', bio: 'Bio'},
    ];

    const maximumWordCount = 500;
    const textArea = document.querySelector('biographyTextArea');
    if(textArea) {
        textArea.addEventListener('input', function (e) {
            const inputText = e.target.value;
            const wordsArray = inputText.split(' ').filter(word => word.length > 0);
            if (wordsArray.length > maximumWordCount) {
                const trimmedWords = wordsArray.slice(maximumWordCount);
                const newText = trimmedWords.join(' ');
                e.target.value = newText;
            }
        });
    }



export default AccountPage;