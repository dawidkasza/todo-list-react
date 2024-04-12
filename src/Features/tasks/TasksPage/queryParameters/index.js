import { useLocation, useHistory } from "react-router-dom";

export const useQueryParameter = (key) => {
  const location = useLocation();
  const serchParams = new URLSearchParams(location.search);
  return serchParams.get(key);
};

export const useReplaceQueryParameter = () => {
  const location = useLocation();
  const history = useHistory();

  return ({ key, value }) => {
    const searchParams = new URLSearchParams(location.search);
    if (value === undefined) {
      searchParams.delete(key);
    } else {
      searchParams.set(key, value);
    }
    const newSearch = searchParams.toString();
    history.push(`${location.pathname}?${newSearch}`);
  };
};
