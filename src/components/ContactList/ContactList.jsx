import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);
  return (
    <div className={css.wrap}>
      <ul className={css.listContact}>
        {contacts &&
          contacts.map((contact) => (
            <li key={contact.id} className={css.itemBorder}>
              <Contact data={contact} />
            </li>
          ))}
      </ul>
    </div>
  );
}
