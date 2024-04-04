import { StyleContainer } from "./styled";

const Container = (props) => (
  <StyleContainer className="container">{props.children}</StyleContainer>
);

export default Container;
