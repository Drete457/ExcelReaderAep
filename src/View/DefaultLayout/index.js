const DefaultLayout = ({ children }) => {
  return (
    <div className="c-app c-default-layout">
      <div className="c-wrapper">
        <div className="c-body">{children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
