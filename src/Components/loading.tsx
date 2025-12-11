const LoadingScreen: React.FC = () => (
  <div className="loading-screen" role="status" aria-live="polite">
    <div className="loading-screen__halo">
      <span className="loading-screen__core" />
    </div>
    <p className="loading-screen__message">
      Controlo de Nomeações a ser carregado, por favor aguarde.
    </p>
    <p className="loading-screen__hint">
      Estamos a preparar os dados. Isto pode demorar alguns segundos.
    </p>
  </div>
);

export default LoadingScreen;
