import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="text-center max-w-md">
        <h1 className="mb-4 text-5xl font-bold text-primary">404</h1>
        <p className="mb-4 text-xl text-foreground">Sayfa bulunamadı</p>
        <p className="mb-8 text-muted-foreground">
          Aradığınız sayfa taşınmış olabilir ya da adres yanlış girilmiş olabilir.
        </p>
        <Link to="/" className="text-primary underline hover:text-primary-dark">
          Ana sayfaya dön
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
