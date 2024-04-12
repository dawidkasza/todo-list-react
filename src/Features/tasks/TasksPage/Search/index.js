import { useLocation } from "react-router-dom/cjs/react-router-dom";
import Input from "../Input";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import searchQueryParamName from "../searchQueryParamName";

export default () => {
  const location = useLocation();
  const history = useHistory();
  const query = new URLSearchParams(location.search).get(searchQueryParamName);

  const onInputChange = ({ target }) => {
    const serachParams = new URLSearchParams(location.search);

    if (target.value.trim() === "") {
      serachParams.delete(searchQueryParamName);
    } else {
      serachParams.set(searchQueryParamName, target.value);
    }

    history.push(`${location.pathname}?${serachParams.toString()}`);
  };

  return (
    <Input
      placeholder="Filtruj zadania"
      value={query || ""}
      onChange={onInputChange}
    />
  );
};
