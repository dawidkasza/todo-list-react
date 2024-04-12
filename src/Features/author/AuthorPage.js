import Header from "../../common/Header";
import Section from "../../common/Section";

function AuthorPage() {
  return (
    <>
      <Header title="O autorze" />
      <Section
        title="Dawid Kasza"
        body={
          <>
            Jestem automatykiem z trzyletnim stażem, pragnącym przenieść swoje
            umiejętności i pasję do świata IT. Zdobytą wiedzę w obszarze
            Javascript, HTML i CSS wykorzystałem do stworzenia prostych, lecz
            stale rozbudowywanych, aplikacji webowych takich jak kalkulator
            walut czy lista zadań. Ciągle staram się rozwijać swoją wiedzę o
            nowe technologie takie jak React.js czy Node.js
          </>
        }
      />
    </>
  );
}

export default AuthorPage;
