import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";

export default function ContactList({ contactsList, onDelete }) {
  const contacts = useSelector((state) => state.filters.name);
  return (
    <div className={css.wrap}>
      <ul className={css.listContact}>
        {contactsList.map((contact) => (
          <li key={contact.id} className={css.itemBorder}>
            <Contact data={contact} onDelete={onDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
}
