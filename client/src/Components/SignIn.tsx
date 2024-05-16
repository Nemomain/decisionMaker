export default function SignIn() {
  return (
    // <form action="">
    //     <input type="text" name="username" placeholder="Username"/>
    //     <input type="text" name="other_info" placeholder=""/>
    //     <input type="text" name="password" placeholder="Password"/>
    //     <input type="password" name="confirm_password" placeholder="Password Confirmation"/>
    //     <button type="submit" value="Sign In">Sign in</button>
    // </form>

    <form className="form" action="">
      <input className="form__input" type="text" name="username" id="username" placeholder="Username" required />
      <label className="form__label" htmlFor="username" >Username:</label>

      <input className="form__input" type="text" name="other_info" id="other_info" placeholder="Other Information" />
      <label className="form__label" htmlFor="other_info" >Other Information:</label>

      <input className="form__input" type="password" name="password" id="password" placeholder="Password" required />
      <label className="form__label" htmlFor="password" >Password:</label>

      <input className="form__input" type="password" name="confirm_password" id="confirm_password" placeholder="Confirm Password" required />
      <label className="form__label" htmlFor="confirm_password" >Confirm Password:</label>

      <button className="button-52" type="submit">Submit</button>
    </form>
  )
}