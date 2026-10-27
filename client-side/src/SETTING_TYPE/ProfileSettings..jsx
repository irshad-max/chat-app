
import { useState } from "react";

const defaultAvatar =
    "https://ui-avatars.com/api/?name=Mustafa&background=3446c7&color=fff&size=256";

const ProfileSettings = () => {
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
                            src={defaultAvatar}
                            alt="Profile preview"
                        />

                        <h2 className="profile-preview-name">
                            {"Your name"}
                            <span className="profile-online-indicator">
                                {" "}●
                            </span>
                        </h2>

                        <p className="profile-preview-bio">
                            {"Add a bio to introduce yourself"}
                        </p>

                        <div className="profile-online-badge">
                            Online
                        </div>
                    </div>

                    <div className="profile-preview-details">
                        <p className="profile-detail-item">
                            <span className="profile-detail-icon">✉</span>
                            <span>{"irshad@gmail.com"}</span>
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
                                Last seen: {"12:54pm"}
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
                                src={defaultAvatar}
                                alt="Current profile"
                            />

                            <label className="profile-button profile-primary-button profile-upload-button">
                                Change Photo

                                <input
                                    className="profile-file-input"
                                    type="file"
                                    accept="image/*"
                                    onChange={"hiii"}
                                />
                            </label>

                            <button
                                className="profile-button profile-secondary-button"
                                type="button"
                                onClick={"hii"}
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
                            value={"hii"}
                            maxLength={50}
                            onChange={(e) =>
                                updateProfile("name", e.target.value)
                            }
                            placeholder="Enter your name"
                        />

                        <p className="profile-character-count">
                            {6}/50
                        </p>
                    </div>

                    {/* Bio */}
                    <div className="profile-form-group">
                        <label className="profile-label">
                            Bio
                        </label>

                        <textarea
                            className="profile-input profile-textarea"
                            value={"ii"}
                            maxLength={150}
                            rows={4}
                            onChange={(e) =>
                                updateProfile("bio", e.target.value)
                            }
                            placeholder="Tell people something about yourself..."
                        />

                        <p className="profile-character-count">
                            {9}/150
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
                            value={"hii"}
                            readOnly
                        />

                        <p className="profile-help-text">
                            Email cannot be changed here.
                        </p>
                    </div>

                    {/* Privacy Settings */}
                    <div className="profile-privacy-section">
                        <h3 className="profile-section-title">
                            Online Status &amp; Last Seen
                        </h3>

                        <p className="profile-section-description">
                            Choose who can see your activity.
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
