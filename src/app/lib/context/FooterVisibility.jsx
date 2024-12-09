import React, { createContext, useContext, useState } from "react";

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
