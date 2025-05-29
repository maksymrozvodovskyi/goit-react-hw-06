import css from "./App.module.css";
import { useState, useEffect, useMemo } from "react";
import { useDebounce } from "use-debounce";

import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";

export default function App() {
  const [contacts, setContacts] = useState([]);

  const [filter, setFilter] = useState("");
  const [debouncedInputValue] = useDebounce(filter, 300);

  const visibileContacts = useMemo(() => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(debouncedInputValue.toLowerCase())
    );
  }, [debouncedInputValue, contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

// 1. Створити стор ( стан )
// 2. Підв'язати компоненти на стан (useSelector)
// 3. Відправити екшени (useDispatch)
// 4. Обробити екшн
