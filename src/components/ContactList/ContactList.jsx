import Contact from '../Contact/Contact';
import css from './ContactList.module.css'
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/Contacts/SelectContacts";
import { selectFilter } from "../../redux/Filters/SelectFilters";


export default function ContactList() {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);

    const filteredData = contacts.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase()));

    return (
        <>
          <ul className={css.container}>{
            filteredData.map( contact =>
            (<li key={contact.id}>
                <Contact contact={contact} />
                </li>
                )

            )
        }
            </ul>
        </>
    )
}