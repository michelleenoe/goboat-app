export default function TechSupportSolutions({ selectedError, language }) {
  const renderTechSupportSolution = () => {
    if (!selectedError.tech_support) return null;

    // Find den løsning baseret på sproget
    const solutionKey = `solution1_${language === "da" ? "da" : "eng"}`;

    return selectedError[solutionKey] ? (
      <li>{selectedError[solutionKey]}</li>
    ) : null;
  };

  return (
    <div>
      <h3 className="text-lg font-semibold">Tech Support Løsning:</h3>
      <ul className="list-none pl-5">{renderTechSupportSolution()}</ul>
    </div>
  );
}
