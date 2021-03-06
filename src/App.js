import { Routes, Route } from "react-router-dom";
import { AuthProvider, RequireAuth } from "./context/auth-context";
import Login from "./routes/Login";
import Layout from "./components/Layout";
import Home from "./routes/Home";
import RegisterRoute from "./routes/RegisterRoute";
import Perfil from "./routes/Perfil";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<RegisterRoute />} />
            <Route
              path="/home"
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route
              path="/perfil"
              element={
                <RequireAuth>
                  <Perfil />
                </RequireAuth>
              }
            />
            <Route
              path="/perfil/:userId"
              element={
                <RequireAuth>
                  <Perfil />
                </RequireAuth>
              }
            />
          </Route>
        </Routes>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
