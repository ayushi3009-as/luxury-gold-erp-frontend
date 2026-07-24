"use client";

import { useCallback, useRef, useState } from "react";

export default function useVoiceAssistant() {
  const [isListening, setIsListening] =
    useState(false);

  const [transcript, setTranscript] =
    useState("");

  const [error, setError] = useState("");

  const recognitionRef = useRef(null);

  const isSupported =
    typeof window !== "undefined" &&
    (
      "SpeechRecognition" in window ||
      "webkitSpeechRecognition" in window
    );

  const startListening = useCallback(() => {
    if (!isSupported) {
      setError(
        "Voice recognition is not supported in this browser."
      );

      return;
    }

    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    const recognition =
      new SpeechRecognition();

    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = "en-IN";

    recognition.onstart = () => {
      setIsListening(true);
      setError("");
    };

    recognition.onresult = (event) => {
      let finalText = "";

      for (
        let i = event.resultIndex;
        i < event.results.length;
        i++
      ) {
        finalText +=
          event.results[i][0].transcript;
      }

      setTranscript(finalText);
    };

    recognition.onerror = (event) => {
      setError(
        event.error ||
          "Voice recognition failed."
      );

      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current = recognition;

    recognition.start();
  }, [isSupported]);

  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }

    setIsListening(false);
  }, []);

  const clearTranscript = useCallback(() => {
    setTranscript("");
    setError("");
  }, []);

  return {
    isListening,
    transcript,
    error,
    isSupported,
    startListening,
    stopListening,
    clearTranscript,
  };
}