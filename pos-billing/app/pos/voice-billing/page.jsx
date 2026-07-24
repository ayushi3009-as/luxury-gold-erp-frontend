"use client";

import { useEffect, useRef, useState } from "react";

export default function VoiceBillingPage() {
  const [isListening, setIsListening] =
    useState(false);

  const [transcript, setTranscript] = useState(
    ""
  );

  const [items, setItems] = useState([]);

  const recognitionRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      return;
    }

    const recognition = new SpeechRecognition();

    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-IN";

    recognition.onresult = (event) => {
      let text = "";

      for (
        let i = event.resultIndex;
        i < event.results.length;
        i++
      ) {
        text += event.results[i][0].transcript;
      }

      setTranscript(text);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current = recognition;

    return () => {
      recognition.stop();
    };
  }, []);

  function toggleListening() {
    if (!recognitionRef.current) {
      setTranscript(
        "Voice recognition is not supported in this browser."
      );

      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      setTranscript("");
      recognitionRef.current.start();
      setIsListening(true);
    }
  }

  function addItem() {
    setItems((currentItems) => [
      ...currentItems,
      {
        id: Date.now(),
        name: "22K Gold Ring",
        details: "8.50g · 12% wastage",
        price: 1250,
      },
    ]);
  }

  const total = items.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <main className="voice-page">
      <header className="page-header">
        <div>
          <p className="breadcrumb">
            POS / Sales / Voice Billing
          </p>

          <h1>Voice Billing</h1>
        </div>

        <div className="gold-rate">
          ◆ Gold 22K:
          <strong>$68.50/g</strong>
        </div>
      </header>

      <section className="voice-layout">
        <div className="voice-center">
          <div
            className={
              isListening
                ? "microphone active"
                : "microphone"
            }
          >
            <span>🎙</span>
          </div>

          <h2>
            {isListening
              ? "Listening..."
              : "Tap to Start Voice Billing"}
          </h2>

          <p>
            Say commands like:
            <br />
            <strong>
              “Add one 22 karat gold ring weighing
              8 grams”
            </strong>
          </p>

          <button
            className={
              isListening
                ? "voice-button listening"
                : "voice-button"
            }
            onClick={toggleListening}
          >
            {isListening
              ? "Stop Listening"
              : "Start Listening"}
          </button>

          <div className="waveform">
            {[...Array(25)].map((_, index) => (
              <span
                key={index}
                style={{
                  height: isListening
                    ? `${20 + ((index * 17) % 60)}px`
                    : "8px",
                }}
              />
            ))}
          </div>
        </div>

        <aside className="transcription-panel">
          <div className="panel-header">
            <div>
              <h2>Live Transcription</h2>

              <p>
                {isListening
                  ? "Listening for your command"
                  : "Waiting for voice input"}
              </p>
            </div>

            <span
              className={
                isListening
                  ? "live-indicator active"
                  : "live-indicator"
              }
            >
              ●
            </span>
          </div>

          <div className="transcript-box">
            {transcript ? (
              <p>{transcript}</p>
            ) : (
              <span>
                Your voice command will appear here...
              </span>
            )}
          </div>

          <div className="recognized-section">
            <div className="section-heading">
              <h3>Recognized Items</h3>

              <button onClick={addItem}>
                + Add Item
              </button>
            </div>

            {items.length === 0 ? (
              <div className="empty-recognized">
                No recognized items yet
              </div>
            ) : (
              items.map((item) => (
                <div
                  className="recognized-item"
                  key={item.id}
                >
                  <div className="recognized-icon">
                    ◇
                  </div>

                  <div>
                    <strong>{item.name}</strong>

                    <small>{item.details}</small>
                  </div>

                  <b>${item.price}</b>
                </div>
              ))
            )}
          </div>

          <div className="voice-total">
            <span>Current Total</span>

            <strong>${total.toFixed(2)}</strong>
          </div>

          <button
            className="continue-button"
            disabled={!items.length}
          >
            Continue to Invoice
          </button>
        </aside>
      </section>

      <style jsx>{`
        .voice-page {
          min-height: 100vh;
          padding: 26px;
          color: #f4f0e6;
          background:
            radial-gradient(
              circle at 20% 10%,
              rgba(212, 175, 55, 0.12),
              transparent 30%
            ),
            #11110f;
          font-family:
            Inter,
            ui-sans-serif,
            system-ui,
            sans-serif;
        }

        .page-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 25px;
        }

        .breadcrumb {
          margin: 0 0 8px;
          color: #89857b;
          font-size: 12px;
        }

        h1,
        h2,
        h3,
        p {
          margin-top: 0;
        }

        h1 {
          margin-bottom: 0;
          font-size: 26px;
        }

        .gold-rate {
          display: flex;
          gap: 7px;
          align-items: center;
          padding: 10px 14px;
          border: 1px solid rgba(212, 175, 55, 0.3);
          border-radius: 8px;
          color: #d9bf62;
          font-size: 12px;
        }

        .gold-rate strong {
          color: #f3eee3;
        }

        .voice-layout {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 460px;
          gap: 20px;
        }

        .voice-center,
        .transcription-panel {
          min-height: 620px;
          border: 1px solid rgba(255, 255, 255, 0.13);
          border-radius: 14px;
          background:
            linear-gradient(
              145deg,
              rgba(39, 39, 37, 0.86),
              rgba(20, 20, 20, 0.94)
            );
        }

        .voice-center {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .microphone {
          width: 150px;
          height: 150px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(212, 175, 55, 0.45);
          border-radius: 50%;
          color: #d4af37;
          background: rgba(212, 175, 55, 0.08);
          font-size: 60px;
          box-shadow: 0 0 0 20px rgba(212, 175, 55, 0.03);
        }

        .microphone.active {
          animation: pulse 1.5s infinite;
          box-shadow:
            0 0 0 20px rgba(212, 175, 55, 0.04),
            0 0 45px rgba(212, 175, 55, 0.25);
        }

        @keyframes pulse {
          50% {
            transform: scale(1.05);
          }
        }

        .voice-center h2 {
          margin: 35px 0 10px;
          font-size: 21px;
        }

        .voice-center p {
          color: #908c83;
          font-size: 13px;
          line-height: 1.7;
        }

        .voice-center strong {
          color: #d4af37;
        }

        .voice-button {
          height: 46px;
          padding: 0 25px;
          border: 0;
          border-radius: 8px;
          color: #18150c;
          background: #d4af37;
          font-weight: 700;
          cursor: pointer;
        }

        .voice-button.listening {
          color: #f0d978;
          background: rgba(212, 175, 55, 0.15);
          border: 1px solid #d4af37;
        }

        .waveform {
          height: 80px;
          display: flex;
          align-items: center;
          gap: 4px;
          margin-top: 40px;
        }

        .waveform span {
          width: 4px;
          border-radius: 5px;
          background: #d4af37;
          transition: height 0.2s ease;
        }

        .transcription-panel {
          display: flex;
          flex-direction: column;
          padding: 22px;
        }

        .panel-header {
          display: flex;
          justify-content: space-between;
          padding-bottom: 18px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .panel-header h2 {
          margin-bottom: 5px;
          font-size: 17px;
        }

        .panel-header p {
          margin: 0;
          color: #89857b;
          font-size: 11px;
        }

        .live-indicator {
          color: #6f6b62;
        }

        .live-indicator.active {
          color: #d4af37;
        }

        .transcript-box {
          min-height: 120px;
          margin: 20px 0;
          padding: 15px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          color: #e7e1d6;
          background: #1b1b19;
        }

        .transcript-box span {
          color: #77736b;
          font-size: 12px;
        }

        .transcript-box p {
          margin: 0;
          line-height: 1.6;
        }

        .section-heading {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .section-heading h3 {
          font-size: 14px;
        }

        .section-heading button {
          border: 0;
          color: #d4af37;
          background: transparent;
          cursor: pointer;
        }

        .empty-recognized {
          padding: 30px 0;
          color: #77736b;
          text-align: center;
          font-size: 12px;
        }

        .recognized-item {
          display: grid;
          grid-template-columns: 40px 1fr auto;
          align-items: center;
          gap: 10px;
          padding: 12px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .recognized-icon {
          width: 40px;
          height: 40px;
          display: grid;
          place-items: center;
          border-radius: 8px;
          color: #d4af37;
          background: rgba(212, 175, 55, 0.12);
          font-size: 22px;
        }

        .recognized-item strong,
        .recognized-item small {
          display: block;
        }

        .recognized-item strong {
          font-size: 12px;
        }

        .recognized-item small {
          margin-top: 4px;
          color: #88847b;
          font-size: 10px;
        }

        .recognized-item b {
          color: #d4af37;
          font-size: 13px;
        }

        .voice-total {
          display: flex;
          justify-content: space-between;
          margin-top: auto;
          padding: 20px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.12);
          color: #aaa69b;
        }

        .voice-total strong {
          color: #d4af37;
          font-size: 22px;
        }

        .continue-button {
          height: 45px;
          border: 0;
          border-radius: 8px;
          color: #18150c;
          background: #d4af37;
          font-weight: 700;
          cursor: pointer;
        }

        .continue-button:disabled {
          cursor: not-allowed;
          opacity: 0.4;
        }

        @media (max-width: 1000px) {
          .voice-layout {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .voice-page {
            padding: 15px;
          }

          .page-header {
            align-items: flex-start;
            flex-direction: column;
            gap: 15px;
          }

          .voice-center,
          .transcription-panel {
            min-height: 550px;
            padding: 20px;
          }
        }
      `}</style>
    </main>
  );
}