import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/Contacts/ContactSlice";


export default function Contact({ contact }) {
    const dispatch = useDispatch();
    return (
        <div className={css.container}>
            <div className={css.usercontainer}> 
                <p>{contact.name}</p>
                <p>{contact.number}</p>
            </div>
            <button className={css.deletebutton} onClick={() => {dispatch(deleteContact(contact.id));}}>Delete</button>
        </div>
    )
}