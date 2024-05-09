// Utils
import { useState } from "react";

// Components
import Header from "./Header";
import LogIn from "./Login";
import SignIn from "./SignIn";

export default function Landing(){
    const [ logSign, setLogSign ] = useState("log")

    function changeForm(select: string){
        if (select !== logSign){
            setLogSign(select)
        }
    }
    return (
        <>
            <Header/>
            <main>
                <div className="divider centered">
                    <section className="hero">
                        <h1>Bye Bye Decision Paralysis</h1>
                        <p>Have you ever been fluestered by an excess of options?</p>
                        <p>Maybe you have too much on your plate and don't know where to start?</p>
                        <p>DecisionMaker is for you!</p>
                    </section>
                    <section className="extra">
                        <button className="signlog sign" onClick={() => changeForm("sign")}>Sign In</button>
                        <button className="signlog log" onClick={() => changeForm("log")}>Login</button>
                        {
                            logSign === "sign" ?
                            <SignIn/>
                            :
                            <LogIn/>
                        }
                    </section>
                </div>
            </main>
        </>
    )
}