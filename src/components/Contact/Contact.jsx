import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Contact({ data: { id, name, number } }) {
  const contact = useSelector((state) => state.contacts.items);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.contactWrap}>
      <div className={css.text}>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button
        className={css.btn}
        // onClick={() => onDelete(id)}
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
}

// const deleteContact = (contactId) => {
//   setContacts((prevContacts) => {
//     return prevContacts.filter((contact) => contact.id !== contactId);
//   });
// };
