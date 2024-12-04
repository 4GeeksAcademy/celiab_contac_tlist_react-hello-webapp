import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { useState, useContext } from "react";





const CreateNewContact = () => {


    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")

    const { store, actions } = useContext(Context)

    const navigate = useNavigate();

    return (


        <div className="m-5">
            <form>
                <div className="form-group pt-2">
                    <label for="formGroupExampleInput">Full Name</label>
                    <input type="text" className="form-control" id="fullName" placeholder="Full Name" value={name}
                        onChange={(e) => { setName(e.target.value) }} />
                </div>
                <div className="form-group pt-2">
                    <label for="formGroupExampleInput2">Email</label>
                    <input type="text" className="form-control" id="email" placeholder="Email" value={email}
                        onChange={(e) => { setEmail(e.target.value) }} />
                </div>
                <div className="form-group pt-2">
                    <label for="formGroupExampleInput">Phone Number</label>
                    <input type="text" className="form-control" id="phoneNumber" placeholder="Phone Number" value={phone}
                        onChange={(e) => { setPhone(e.target.value) }} />
                </div>
                <div className="form-group pt-2">
                    <label for="formGroupExampleInput2">Address</label>
                    <input type="text" className="form-control" id="address" placeholder="Address" value={address}
                        onChange={(e) => { setAddress(e.target.value) }} />
                </div>
            </form>

            <div className="py-3">

                <button type="button" className="btn btn-success"
                    onClick={() => {
                        const newContact = { name: name, email: email, phone: phone, address: address }
                        actions.newContact(newContact)
                        setName("")
                        setPhone("")
                        setEmail("")
                        setAddress("")
                        navigate('/')
                    }
                    }
                >Create New Contact</button>

            </div>

            <div className="p-2">
                <Link to="/">
                    Take me back home
                </Link>
            </div>
        </div>
    );
};


export default CreateNewContact