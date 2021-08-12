import css from './Signup.module.css'



export function Signup() {
    return (
        <div className={css.grey}>
            <div className={css.x}>
                <img src="./img/x.png" alt="" />
            </div>
        <div className={css.signup}>
            <div className={css.signup_left}>
                <div className={css.logo}>
                    <img src="./img/logo.png" alt="" />
                    <h3>Why should I Join Fasthome?</h3>
                    <p>To have the experience of “property”, “information” and “trust” in the real estate world all together…</p>
                </div>
                <div className={css.box}>
                    <div className={css.boxIn}>
                    <img src="./img/location.png" alt="" />
                    <p>Learn about location.</p>
                    </div>
                    <div className={css.boxIn}>
                    <img src="./img/house.png" alt="" />
                    <p>Find out the value of your house free of charge.</p>
                    </div>
                    <div className={css.boxIn}>
                    <img src="./img/quality.png" alt="" />
                    <p>Discover houses that will improve your life quality.</p>
                    </div>
                    <div className={css.boxIn}>
                    <img src="/img/newproject.png" alt="" />
                    <p>Be aware of new projects.</p>
                    </div>
                </div>
            </div>
            <div className={css.center}></div>
            <div className={css.signup_right}>
                <div className={css.top}>
                    <p className={css.top_left}>Individual Membership</p>
                    <p className={css.top_right}>Corporate Membership</p>
                </div>
                    <div className={css.google}>
                    <img src="./img/google.png"/>
                    <button>Connect with Google</button>
                    </div>
                <form className={css.bottom} required>
                    
                    <input type ="text" placeholder="Name and Surname" />
                    <input type="mail" placeholder="E-mail" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Password (Again)" />
                    <div className={css.checkbox}>
                    <input type="checkbox" />
                    <label for="id">I agree to the Membership Terms</label>
                    </div>
                    <div className={css.checkbox}>
                    <input type="checkbox" />
                    <label for="id">I allow Fasthome to contact me via e-mail, SMS, etc for marketing and promotional purposes.</label>
                    </div>
                    <button>SIGN UP</button>
                    <p>Already a member? <span>Login</span> now!</p>
                </form>
            </div>
        </div>
        </div>
    )
}
