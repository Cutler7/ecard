const fromBinary = (encoded: string): string => {
  const binary = window.atob(encoded)
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < bytes.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return String.fromCharCode(...new Uint16Array(bytes.buffer) as any);
}

export default fromBinary;
