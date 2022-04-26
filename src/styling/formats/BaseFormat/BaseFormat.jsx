const BaseFormat = ({ adminPanelContent, displayContent }) => {
  return (
    <div className="baseFormat">
      <div className="baseFormat__adminPanel">{adminPanelContent}</div>
      <div className="baseFormat__display">{displayContent}</div>
    </div>
  );
};

export default BaseFormat;
