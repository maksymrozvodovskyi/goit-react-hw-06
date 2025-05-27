import css from "./Contact.module.css";
import { deleteContact } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";

export default function Contact({ data: { id, name, number }, onDelete }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteContact());
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
        onClick={handleClick}
      >
        Delete
      </button>
    </div>
  );
}
