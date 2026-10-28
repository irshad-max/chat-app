
import { useEffect, useState } from "react";
import axios from "axios";

const ProfileSettings = () => {
    const token = localStorage.getItem("token")
    const [userInfo, setuserInfo] = useState({})
    const [name, setname] = useState("")
    const [bio, setbio] = useState("")
    useEffect(() => {
        async function getInfo() {
            try {
                const res = await axios.post("http://localhost:3001/getinfo", {}, {
                    headers: {
                        Authorization: `bearer ${token}`
                    }
                })
                console.log(res.data)
                setuserInfo(res.data)
            }
            catch (e) { console.log("error", e) }
        }
        getInfo()
    }, [token])

    const changeProfile = function (e) {
        const file = e.target.files?.[0]
        if (!file) {
            console.log("file nhi mila")
            return
        }
        console.log(file)
    }
    return (
        <div className="profile-settings">
            <div className="profile-settings-layout">
                {/* Live profile preview */}
                <section className="profile-card profile-preview-card">
                    <h2 className="profile-card-title">
                        Profile Preview
                    </h2>

                    <div className="profile-preview-content">
                        <img
                            className="profile-preview-avatar"
                            src={userInfo.profileImage || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqE3e9RIK09-ejpr7BwnvNb4TpTjmXHGgrTTNc00vdtA&s=10"}
                            alt="Profile preview"
                        />

                        <h2 className="profile-preview-name">
                            {userInfo.name}
                            <span className="profile-online-indicator">
                                {" "}●
                            </span>
                        </h2>

                        <p className="profile-preview-bio">
                            {userInfo?.notes || "Add a bio to introduce yourself"}
                        </p>

                        <div className="profile-online-badge">
                            Online
                        </div>
                    </div>

                    <div className="profile-preview-details">
                        <p className="profile-detail-item">
                            <span className="profile-detail-icon">✉</span>
                            <span>{userInfo.email}</span>
                        </p>

                        <p className="profile-detail-item">
                            <span className="profile-detail-icon">●</span>
                            <span>
                                Online status: {"online"}
                            </span>
                        </p>

                        <p className="profile-detail-item">
                            <span className="profile-detail-icon">◷</span>
                            <span>
                                Connected to Baatchit on: {userInfo.joinAt?.slice(0, 10)}
                            </span>
                        </p>
                    </div>
                </section>

                {/* Profile editor */}
                <section className="profile-card profile-editor-card">
                    <h2 className="profile-card-title">
                        Edit Profile
                    </h2>

                    {/* Profile Photo */}
                    <div className="profile-form-group profile-photo-group">
                        <label className="profile-label">
                            Profile Photo
                        </label>

                        <div className="profile-photo-controls">
                            <img
                                className="profile-current-avatar"
                                src={userInfo.profileImage || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqE3e9RIK09-ejpr7BwnvNb4TpTjmXHGgrTTNc00vdtA&s=10"}
                                alt="Current profile"
                            />

                            <label className="profile-button profile-primary-button profile-upload-button">
                                Change Photo
                                <input
                                    className="profile-file-input"
                                    type="file"
                                    accept="image/*"
                                    onChange={changeProfile}
                                />
                            </label>

                            <button
                                className="profile-button profile-secondary-button"
                                type="button"
                            >
                                Remove
                            </button>
                        </div>

                        <p className="profile-help-text">
                            JPG, PNG or WebP. Maximum 5 MB.
                        </p>
                    </div>

                    {/* Name */}
                    <div className="profile-form-group">
                        <label className="profile-label">
                            Name
                        </label>

                        <input
                            className="profile-input"
                            type="text"
                            value={userInfo.name}
                            maxLength={50}
                            onChange={(e) => setname(e.target.value)}
                            placeholder="Enter your name"
                        />

                        <p className="profile-character-count">
                            {userInfo.name?.length}/50
                        </p>
                    </div>

                    {/* Bio */}
                    <div className="profile-form-group">
                        <label className="profile-label">
                            Bio
                        </label>

                        <textarea
                            className="profile-input profile-textarea"
                            value={userInfo.notes || "Tell people something about yourself..."}
                            maxLength={150}
                            rows={4}
                            onChange={(e) => setbio(e.target.value)}
                        />

                        <p className="profile-character-count">
                            {userInfo.notes?.length}/150
                        </p>
                    </div>

                    {/* Email */}
                    <div className="profile-form-group profile-email-group">
                        <label className="profile-label">
                            Email
                        </label>

                        <input
                            className="profile-input profile-email-input"
                            type="email"
                            value={userInfo.email}
                            readOnly
                        />

                        <p className="profile-help-text">
                            Email cannot be changed here.
                        </p>
                    </div>
                    {/* Save Changes */}
                    <button
                        className="profile-button profile-primary-button profile-save-button"
                        type="button"
                    >
                        {"hii" ? "✓ Changes ready to save" : "Save Changes"}
                    </button>
                </section>
            </div>
        </div>
    );
};

export default ProfileSettings;
