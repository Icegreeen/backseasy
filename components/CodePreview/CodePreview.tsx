'use client';

import { useState, useMemo } from 'react';
import { FiCopy, FiCheck } from 'react-icons/fi';
import { cn } from '@/lib/utils';

interface CodePreviewProps {
  initialCode?: string;
  className?: string;
  defaultHeight?: string;
}

//<CodePreview initialCode="<div>Seu HTML aqui</div>" />

const getHtmlContent = (codeInput: string): string => {
  if (!codeInput.trim()) {
    return '<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #DEDEDE; font-family: Outfit;"></div>';
  }

  if (codeInput.toLowerCase().includes('<!doctype') || codeInput.toLowerCase().includes('<html')) {
    return codeInput;
  }
  
  return `<!DOCTYPE html>
    <html lang="pt-BR">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Preview</title>
        <style>
            body { margin: 0; padding: 0; }
        </style>
        </head>
        <body>
        ${codeInput}
        </body>
    </html>`;
};

export default function CodePreview({
  initialCode = '',
  className,
  defaultHeight = '600px',
}: CodePreviewProps) {
  const [code, setCode] = useState(initialCode);
  const [copied, setCopied] = useState(false);

  const iframeContent = useMemo(() => getHtmlContent(code), [code]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Erro ao copiar:', err);
    }
  };

  return (
    <div className={cn('w-full flex flex-col gap-16', className)}>
      <div className="flex items-center justify-between">
        <h3 className="text-3 text-text-1 font-medium">Test your background code</h3>
        <button
          onClick={handleCopy}
          className="flex items-center gap-8 px-16 py-8 border border-stroke-1 bg-bg-1 text-text-1 rounded-in hover:bg-fg-1 transition-colors duration-150 hover-active-effect"
          title="Copiar código"
        >
          {copied ? (
            <>
              <FiCheck className="text-green" size={16} />
              <span className="text-sub">Copied!</span>
            </>
          ) : (
            <>
              <FiCopy size={16} />
              <span className="text-sub">Copy</span>
            </>
          )}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="flex flex-col gap-8">
          <label className="text-sub text-text-1 font-medium">Code HTML</label>
          <div className="relative flex-1 min-h-[400px]">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Cole ou digite seu código HTML aqui..."
              className="w-full h-full min-h-[400px] p-16 border border-stroke-1 bg-transparent text-text-1 rounded-out resize-none focus:outline-none focus:border-selected focus:ring-2 focus:ring-selected/20 transition-all duration-150 placeholder:text-text-1-disabled"
              style={{
                fontFamily: 'monospace',
                fontSize: '13px',
              }}
            />
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <label className="text-sub text-text-1 font-medium">Preview</label>
          <div className="relative flex-1 min-h-[400px] border border-stroke-1 rounded-out overflow-hidden bg-black">
            <iframe
              className="w-full h-full border-0"
              title="Preview do background"
              sandbox="allow-scripts allow-same-origin"
              style={{ minHeight: defaultHeight }}
              srcDoc={iframeContent}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

