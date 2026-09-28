


export default function MainForm() {

    async function createUser(formData) {
        const response = await fetch("http://localhost:8000/api/auth/createUser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: formData.get('UserName'),
                email: formData.get('UserEmail'),
                password: formData.get('UserPassword')
            })
        });

        if (!response.ok) {
            return;
        }

        const data = await response.json();

        showLoggedInUser(data.username);
    }

    return (
        <form action={createUser} className="main-form" id="main-form">
            <h2 className="create-acc">Create Account</h2>
            <label className="main-label" htmlFor="UserName">
                Create Username
            </label>
            <input type="text"
                    name="UserName"
                    id="UserName"
                    className="main-form-input"
                    required
                    maxLength="10"
                    minLength="3"
                    pattern="[a-zA-Z0-9]+" />

            <div className="email-field" id="email-field">
                <label className="main-label" htmlFor="UserEmail">
                    Enter Email
                </label>
                <input type="email"
                        name="UserEmail"
                        id="UserEmail"
                        className="main-form-input"
                        required />
            </div>

            <label className="main-label" htmlFor="UserPassword">
                Create Password
            </label>
            <input type="password"
                    name="UserPassword"
                    id="UserPassword"
                    minLength="6"
                    className="main-form-input"
                    required />

            <button className="form-btn submit-btn" id="form-submit-btn" type="submit">Register</button>
            <button className="form-btn" id="already-registered-btn" type="button">Already Registered?</button>
        </form>
    )}