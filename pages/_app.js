import '../styles/globals.css';
import Layout from '../components/Layout';

/**
 * Personnalisation du composant App dans Next.js.
 * Ce composant enveloppe toutes les pages avec le layout commun.
 * Il importe également les styles globaux.
 *
 * @param {Object} props Les propriétés de l’application
 * @param {React.ComponentType} props.Component Composant de la page
 * @param {Object} props.pageProps Propriétés passées à la page
 */
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
