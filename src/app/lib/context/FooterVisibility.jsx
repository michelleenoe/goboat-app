// CHAT GPT PROMPT "Jeg arbejder i React, hvor jeg ønsker at kunne styre synligheden af en footer. Footeren skal som standard være synlig, men jeg vil kunne skjule eller vise den dynamisk fra forskellige komponenter i appen."

// CHAT GPT LØSNING
import { createContext, useContext, useState } from "react";

const FooterVisibilityContext = createContext();

export const FooterVisibilityProvider = ({ children }) => {
  const [isFooterVisible, setIsFooterVisible] = useState(true);

  return (
    <FooterVisibilityContext.Provider
      value={{ isFooterVisible, setIsFooterVisible }}
    >
      {children}
    </FooterVisibilityContext.Provider>
  );
};

export const useFooterVisibility = () => useContext(FooterVisibilityContext);
