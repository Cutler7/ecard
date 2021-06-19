import React, { useState } from 'react';
import * as qr from 'qrcode';

function QrCode() {

  const [dataUrl, setDataUrl] = useState('');

    qr.toCanvas(window.location.href)
        .then((value: HTMLCanvasElement) => setDataUrl(value.toDataURL()));
    return <div><img src={dataUrl}
                     alt="qrcode"/></div>;
}

export default QrCode;
