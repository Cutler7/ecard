import React, { useState, useCallback, useEffect } from 'react';
import * as qr from 'qrcode';
import cn from "classnames";

function QrCode() {
  const [dataUrl, setDataUrl] = useState('');
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = useCallback(() => {
    setExpanded(!expanded);
  }, [expanded, setExpanded]);

  useEffect(() => {
    qr.toCanvas(window.location.href)
      .then((value: HTMLCanvasElement) => setDataUrl(value.toDataURL()));
  }, [setDataUrl])

  const CTAMessage = expanded ? "Tap to unzoom" : "Tap to zoom";

  return (
    <div className={cn("qrcode", {"expanded": expanded})} onClick={toggleExpand}>
      <img src={dataUrl} alt="qrcode"/>
      <div>{CTAMessage}</div>
    </div>
  );
}

export default QrCode;
