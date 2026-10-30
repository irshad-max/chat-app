function WelcomeScreen() {
    return (
        <div className="welcome-screen">

            <div className="welcome-illustration">
                <div className="floating-bubble bubble-1">💬</div>
                <div className="floating-bubble bubble-2">❤️</div>

                <div className="main-bubble">
                    💬
                </div>

                <div className="floating-bubble bubble-3">✨</div>
            </div>

            <h1>Welcome to Baatchit</h1>

            <p>
                Your conversations deserve a beautiful space.
                Select a friend and start chatting!
            </p>

            <div className="welcome-security">
                🔒 Your conversations are your private space.
            </div>

        </div>
    );
}

export default WelcomeScreen;
