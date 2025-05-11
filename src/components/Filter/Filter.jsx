import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filters/slice";
import { selectFilter } from "../../redux/auth/selectors";
import css from "./Filter.module.css";

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  return (
    <input
      className={css.input}
      type="text"
      value={filter}
      onChange={(e) => dispatch(setFilter(e.target.value))}
      placeholder="Search contacts"
    />
  );
}
