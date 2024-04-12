import { Input } from "../Form/styled";
import {
  useQueryParameter,
  useReplaceQueryParameter,
} from "../queryParameters";
import searchQueryParameter from "../searchQueryParameter";

const Search = () => {
  const query = useQueryParameter(searchQueryParameter);
  const replaceQueryParameter = useReplaceQueryParameter();
  const onInputChange = ({ target }) => {
    replaceQueryParameter({
      key: searchQueryParameter,
      value: target.value.trim() !== "" ? target.value : undefined,
    });
  };

  return (
    <Input placeholder="Filtruj" value={query || ""} onChange={onInputChange} />
  );
};

export default Search;
