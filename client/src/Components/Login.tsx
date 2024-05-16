
export default function LogIn(){
    return (
        // <form action="">
        //     <input type="text" name="username" placeholder="Username"/>
        //     <input type="password" name="password" placeholder="Password"/>
        //     <button type="submit" value="Log In">Log in</button>
        // </form>
        <form className="form" action="">
        <input className="form__input" type="text" name="username" placeholder="Username"/>
        <label className="form__label" htmlFor="username">Username:</label>
      
        <input className="form__input" type="password" name="password" placeholder="Password"/>
        <label className="form__label" htmlFor="password">Password:</label>
      
        <button className="button-52" type="submit" value="Log In">Submit</button>
      </form>

    )
}