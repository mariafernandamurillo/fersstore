import "./payment.css"
import { Link } from "react-router-dom";

function Payment() {


    return (
        <div className="payment-main">
            <h1>Almost yours!</h1>

            <form className="form-payment">
                <label className="lbl-subtitle">Enter yout payment details</label>

                <div className="form-item">
                    <label className="lbl-item">Name on card </label>
                    <input className="ip-search ip-long" name="category" type="text" placeholder="Ex. Alex Karev " />
                </div>

                <div className="form-item">
                    <label className="lbl-item">Card number </label>
                    <input className="ip-search" name="title" type="number" placeholder="1234 5678 9012 3456" />
                </div>

                <div className="expery-security">
                    <div className="form-item expiry">
                        <label className="lbl-item">Expiry date </label>
                        <input className="ip-search" name="price" type="text" placeholder="MM/YY" />
                    </div>

                    <div className="form-item">
                        <label className="lbl-item">Security code </label>
                        <input className="ip-search" name="price" type="password" placeholder="123" />
                    </div>
                </div>

                <div className="buttons">
                    <Link to={"/cart"}><button className="btn-primary cancel" type="button">Cancel</button></Link>
                    <button className="btn-primary next" type="button">Next</button>
                </div>

            </form>

        </div>
    );
}

export default Payment;