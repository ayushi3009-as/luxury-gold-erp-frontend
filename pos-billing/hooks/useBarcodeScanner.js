"use client";

import { useCallback, useEffect, useRef } from "react";

export default function useBarcodeScanner({
  onScan,
  enabled = true,
  scanTimeout = 100,
}) {
  const barcodeBuffer = useRef("");
  const lastKeyTime = useRef(0);
  const timeoutRef = useRef(null);

  const clearBuffer = useCallback(() => {
    barcodeBuffer.current = "";
  }, []);

  const handleKeyDown = useCallback(
    (event) => {
      if (!enabled) return;

      const currentTime = Date.now();

      if (
        currentTime - lastKeyTime.current >
        scanTimeout
      ) {
        barcodeBuffer.current = "";
      }

      lastKeyTime.current = currentTime;

      if (
        event.key === "Enter" &&
        barcodeBuffer.current.length > 0
      ) {
        const barcode = barcodeBuffer.current;

        onScan?.(barcode);

        clearBuffer();

        return;
      }

      if (event.key.length === 1) {
        barcodeBuffer.current += event.key;
      }

      clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        clearBuffer();
      }, 500);
    },
    [enabled, onScan, scanTimeout, clearBuffer]
  );

  useEffect(() => {
    if (!enabled) return;

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

      clearTimeout(timeoutRef.current);
    };
  }, [enabled, handleKeyDown]);

  return {
    clearBuffer,
  };
}