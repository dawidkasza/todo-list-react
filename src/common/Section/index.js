import { StyleSection, Header, Title, Container } from "./styled";

const Section = ({ title, body, exampleTasks, extraHeaderContent }) => (
  <StyleSection>
    <Header>
      <Title>{title}</Title>
      {exampleTasks}
      {extraHeaderContent}
    </Header>
    <Container>{body}</Container>
  </StyleSection>
);

export default Section;
