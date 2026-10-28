"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";

// Em dev o otimizador baixa PNGs/GIFs de vários MB do GitHub a cada reload e a conexão costuma cair
// ("fetch failed"). Em dev carregamos a imagem original; em produção continua otimizada.
const isDev = process.env.NODE_ENV === "development";

/**
 * next/image para imagens externas (GitHub) com `fill`.
 * Se a imagem falhar (timeout, 403, link expirado), mostra um gradiente em vez de um ícone quebrado.
 */
export default function SafeImage(props: ImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <div aria-hidden="true" className="absolute inset-0 bg-white/[.04]" />;
  }

  return <Image {...props} unoptimized={props.unoptimized ?? isDev} onError={() => setFailed(true)} />;
}
