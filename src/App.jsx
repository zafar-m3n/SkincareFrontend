import { useEffect } from "react";
import AppRouter from "@/routes/AppRouter";
import token from "@/lib/utilities";

function App() {
  useEffect(() => {
    token.initAuthSession(() => {
      window.location.href = "/login";
    });

    return () => {
      token.destroyAuthSession();
    };
  }, []);

  return <AppRouter />;
}

export default App;
