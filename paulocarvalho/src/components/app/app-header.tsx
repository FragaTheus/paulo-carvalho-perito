import AppCta from "../app-cta";
import AppLogo from "./app-logo";

export default function AppHeader() {
  return (
    <header className="w-full h-18 bg-background fixed z-1000">
      <div className="w-full h-full max-w-7xl m-auto px-4 flex items-center justify-between">
        <AppLogo />
        <AppCta />
      </div>
    </header>
  );
}
