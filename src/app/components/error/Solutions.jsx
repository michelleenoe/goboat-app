export default function Solutions({ selectedError, language }) {
  const renderSolutions = () => {
    return Array.from({ length: 5 }, (_, i) => {
      const solutionKey = `solution${i + 1}_${
        language === "da" ? "da" : "eng"
      }`;
      return (
        selectedError?.[solutionKey] && (
          <li key={i}>{selectedError[solutionKey]}</li>
        )
      );
    }).filter(Boolean);
  };

  return (
    <div>
      <h3 className="text-lg font-semibold">Løsninger:</h3>
      <ul className="list-none pl-5">{renderSolutions()}</ul>
    </div>
  );
}
