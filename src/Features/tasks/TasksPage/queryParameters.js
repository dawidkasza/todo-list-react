import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";

export const useQueryParameter = (key) => {
  const location = useLocation();
  const serachParams = new URLSearchParams(location.search);
  return serachParams.get(key);
};

export const useReplaceQueryParameter = () => {
  const location = useLocation();
  const history = useHistory();

  return ({ key, value }) => {
    const serachParams = new URLSearchParams(location.search);

    if (value === undefined) {
      serachParams.delete(key);
    } else {
      serachParams.set(key, value);
    }

    const newSearch = serachParams.toString();
    history.push(`${location.pathname}?${newSearch}`);
  };
};
