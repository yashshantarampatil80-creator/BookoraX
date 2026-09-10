import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export default function Toast({ message }) {
  if (!message) return null;

  return (
    <div className="toast-notification">
      <CheckCircle2 size={18} className="text-gold" />
      <span>{message}</span>
    </div>
  );
}
