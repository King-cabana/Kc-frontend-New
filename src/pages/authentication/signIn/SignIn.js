import React, {useState} from 'react';
import ForgotPassword from "../forgotPassword/ForgotPassword";
import { Link } from 'react-router-dom';



const SignIn = () => {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }
    
    if(modal){
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }
    
   
  

    return (
        <div>
                <div>
                    <button onClick={toggleModal}>Login</button>
                </div>

                {modal && (
                    <div className="modal">
                        <Link to="/forgotPassword"><ForgotPassword modalState={modal} setModalState={setModal} /></Link>
                    </div>
                )}

            </div>

    
    );
};

export default SignIn;