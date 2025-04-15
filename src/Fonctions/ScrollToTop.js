import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Ne remonte pas en haut si on est sur la page principale
    if (pathname !== '/') {
      window.scrollTo({
        top: 0,
        behavior: 'auto', // ou 'auto' si tu veux sans animation
      });
    }
  }, [pathname]);

  return null;
}
