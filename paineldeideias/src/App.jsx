import { useState } from "react";
import "./index.css";

function App() {
  const [ideias, setIdeias] = useState([]);
  const [novaIdeia, setNovaIdeia] = useState("");
  const [erro, setErro] = useState("");

  function aoAdicionar(event) {
    event.preventDefault();

    const texto = novaIdeia.trim();

    if (texto === "") {
      setErro("Digite sua ideia antes de adicionar.");
      return;
    }

    const ideia = {
      id: Date.now(),
      texto: texto,
      feita: false,
    };

    setIdeias((atual) => [...atual, ideia]);

    setNovaIdeia("");
    setErro("");
  }

  function aoAlternar(id) {
    setIdeias((atual) =>
      atual.map((ideia) =>
        ideia.id === id
          ? {
              ...ideia,
              feita: !ideia.feita,
            }
          : ideia
      )
    );
  }

  function aoRemover(id) {
    setIdeias((atual) =>
      atual.filter((ideia) => ideia.id !== id)
    );
  }

  const concluidas = ideias.filter(
    (ideia) => ideia.feita
  ).length;

  const resumo = `${ideias.length} ideias no painel · ${concluidas} concluídas`;

  return (
    <main>
      <h1>Painel de Ideias</h1>

      <p className="description">
        Deixe aqui as suas ideias, elas estão guardadas.
      </p>

      <form onSubmit={aoAdicionar}>
        <input
          type="text"
          value={novaIdeia}
          onChange={(event) => {
            setNovaIdeia(event.target.value);
            setErro("");
          }}
          placeholder="Sua ideia"
        />

        <button type="submit">
          Adicionar
        </button>
      </form>

      {erro && (
        <p className="error">
          {erro}
        </p>
      )}

      <ul className="ideia-list">
        {ideias.map((ideia) => (
          <li key={ideia.id}>
            <div
              className={
                ideia.feita
                  ? "checkbox checked"
                  : "checkbox"
              }
              onClick={() => aoAlternar(ideia.id)}
            >
              {ideia.feita && "✓"}
            </div>

            <span
              className={
                ideia.feita
                  ? "idea-text completed"
                  : "idea-text"
              }
            >
              {ideia.texto}
            </span>

            <button
              type="button"
              className="remove-button"
              onClick={() => aoRemover(ideia.id)}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>

      <footer>
        {resumo}
      </footer>
    </main>
  );
}

export default App;
