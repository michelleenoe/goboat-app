"use client";
export default function ResetOnboardingButton() {
  const handleResetOnboarding = () => {
    localStorage.removeItem("onboardingCompleted");
    localStorage.removeItem("language");
    alert("Onboarding is reset!");
    window.location.href = "/onboarding";
  };
  return (
    <button
      onClick={handleResetOnboarding}
      className="px-4 py-2"
    >
      Reset Onboarding
    </button>
  );
}
