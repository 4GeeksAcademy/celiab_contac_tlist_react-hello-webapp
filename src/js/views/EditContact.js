import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { useEffect, useState, useContext } from "react";

const EditContact = () => {

    const params = useParams()

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")

    const { store, actions } = useContext(Context)

    const navigate = useNavigate();


    useEffect(() => {
        const filteredContacts = store.contacts.map((value) => {
            if (value.id == params.contactId) {
                setName(value.name)
                setAddress(value.address)
                setPhone(value.phone)
                setEmail(value.email)
            }
        })
        console.log(filteredContacts)

    }, [])

    return (

        <div className="m-5">
            <form>
                <div className="form-group pt-2">
                    <h1>{params.contactId}</h1>
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
                        const updateContact = { name: name, email: email, phone: phone, address: address }

                        actions.updateContact(updateContact, params.contactId)
                        setName("")
                        setPhone("")
                        setEmail("")
                        setAddress("")
                        navigate("/")
                    }
                    }
                >Edit Contact</button>
            </div>

            <div className="p-2">
                <Link to="/">
                    Take me back home
                </Link>
            </div>
        </div>
    );

}

export default EditContact