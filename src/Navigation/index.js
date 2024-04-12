import { toAuthor, toTasks } from "../routes";
import { List, Item, StyledNavLink } from "./styled";

export default () => {
  return (
    <nav>
      <List>
        <Item>
          <StyledNavLink to={toTasks()}>Zadania</StyledNavLink>
        </Item>
        <Item>
          <StyledNavLink to={toAuthor()}>O Autorze</StyledNavLink>
        </Item>
      </List>
    </nav>
  );
};
