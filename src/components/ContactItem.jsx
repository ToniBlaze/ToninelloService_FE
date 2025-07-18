

export const ContactItem = ({ Icon, iconProps = {}, children }) => (
  <div className="d-flex align-items-center mb-3">
    <Icon {...iconProps} />
    <span className="ms-2">{children}</span>
  </div>
);
