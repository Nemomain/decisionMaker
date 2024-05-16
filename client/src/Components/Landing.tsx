// Utils
import { useState } from "react";


// Components
import Header from "./Header";
import LogIn from "./Login";
import SignIn from "./SignIn";

export default function Landing() {
  const [logSign, setLogSign] = useState<string>("log")

  function changeForm(select: string) {
    if (select !== logSign) {
      setLogSign(select)
    }
  }
  return (
    <>
      <Header />
      <main>
        <div className="divider centered">
          <section className="hero">
            <h1>Bye Bye Decision Paralysis</h1>
            <p>Have you ever been fluestered by an excess of options?</p>
            <p>Maybe you have too much on your plate and don't know where to start?</p>
            <p>DecisionMaker is for you!</p>
          </section>
          <section className="extra">
            <div className="extra-btns">
              <button id="sign-up" className="button-52"  onClick={() => changeForm("sign")}>Sign Up</button>
              <button id="login" className="button-52" onClick={() => changeForm("log")}>Login</button>
            </div>
            {
              logSign === "sign" ?
                <SignIn />
                :
                <LogIn />
            }
          </section>
        </div>

      </main>
      <section className="payment">
        <script async
          src="https://js.stripe.com/v3/buy-button.js">
        </script>
        <stripe-buy-button
          buy-button-id="buy_btn_1PGHLPAEr8yRclawj9Zl1QCo"
          publishable-key="pk_test_51Ox73PAEr8yRclaw8vqOjlTHYuBzmYSt0QsT1XFpSi5y776T71sgXAUa7gmldfXS0mQslLx50Teppdq1VlJt9A5e003EskoOfb"
        >
        </stripe-buy-button>
      </section>

      
    </>
  )
}