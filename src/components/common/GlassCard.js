import React from 'react';

const GlassCard = ({ children, ...props }) => {
  return (
    <div className="glass-card" {...props}>
      {children}
    </div>
  );
};

export default GlassCard;
