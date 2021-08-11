import css from './Signup.module.css'

export function Signup() {
    return (
        <div className={css.signup}>
            <div className={css.signup_left}>
                <div className={css.logo}>
                    <img src="./img/logo.png" alt="" />
                    <img src="./img/why.png" alt="" />
                </div>
                <div className={css.box1}>
                    <img src="./img/location.png" alt="" />
                    <p>Learn about location.</p>
                    <img src="./img/house.png" alt="" />
                    <P>Find out the value of your house free of charge.</P>
                </div>
                <div className={css.box2}>
                    <img src="./img/quality.png" alt="" />
                    <p>Discover houses that will improve your life quality.</p>
                    <img src="/img/newproject.png" alt="" />
                    <p>Be aware of new projects.</p>
                </div>
            </div>
            <div className={css.signup_right}>
                <div>
                    <p>Individual Membership</p>
                    <p>Corporate Membership</p>
                    <img src="./img/google.png"/>
                    <button>Connect with Google</button>
                </div>
                <div>
                    <input type ="text" Name and Surname />
                    <input type="e-mail" E-mail/>
                    <input type="password" Password/>
                    <input type="password" Password-Again />
                    <input type="checkbox" I agree to the Membership Terms />
                    <input type="checkbox" I allow Fasthome to contact me via e-mail SMS etc for marketing and promotional purposes />
                    <button>SIGN UP</button>
                    <p>Already a member? <span>Login</span> now!</p>
                </div>
                <div></div>
            </div>
        </div>
    )
}