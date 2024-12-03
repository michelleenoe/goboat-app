export const getOnboardingStatus = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    return localStorage.getItem("onboardingCompleted") === "true";
  }
  return false;
};

export const setOnboardingStatus = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    localStorage.setItem("onboardingCompleted", "true");
  }
};

export const getLanguage = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    return localStorage.getItem("language") || "en";
  }
  return "en";
};

export const setLanguage = (lang) => {
  if (typeof window !== "undefined" && window.localStorage) {
    localStorage.setItem("language", lang);
  }
};
