'use client';

import { useEffect } from 'react';
import { useUIStore } from '@/stores/ui';

export default function MatrixCursor() {
  const isActive = useUIStore((s) => s.modal === 'matrix');
  useEffect(() => {
    if (!isActive) {
      document.body.style.cursor = '';
      return;
    }

    const createTerminalCursor = () => {
      const cursor = document.createElement('div');
      cursor.innerHTML = '█';
      cursor.style.cssText = `
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        color: #0F4;
        font-family: 'Courier New', monospace;
        font-size: 16px;
        animation: blink 1s infinite;
      `;

      const style = document.createElement('style');
      style.textContent = `
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `;
      document.head.appendChild(style);
      document.body.appendChild(cursor);

      const updateCursor = (e: MouseEvent) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
      };

      document.addEventListener('mousemove', updateCursor);

      return () => {
        document.removeEventListener('mousemove', updateCursor);
        document.body.removeChild(cursor);
        document.head.removeChild(style);
      };
    };

    const cleanup = createTerminalCursor();
    document.body.style.cursor = 'none';

    return cleanup;
  }, [isActive]);

  return null;
}
