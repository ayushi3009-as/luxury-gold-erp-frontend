"use client";

import { useEffect, useState } from "react";

import {
  RefreshCw,
  CheckCircle2,
  Clock,
  Settings2,
  Pause,
  Play,
  Zap,
} from "lucide-react";

import GoldRateSidebar from "../GoldRateSidebar";

type MetalRate = {
  name: string;
  rate: number;
  change: number;
};

export default function AutoUpdatePage() {
  const [isAutoUpdate, setIsAutoUpdate] = useState(true);

  const [intervalMinutes, setIntervalMinutes] = useState(1);

  const [countdown, setCountdown] = useState(
    intervalMinutes * 60
  );

  const [lastUpdated, setLastUpdated] = useState(
    new Date()
  );

  const [isSyncing, setIsSyncing] = useState(false);

  const [rates, setRates] = useState<MetalRate[]>([
    {
      name: "Gold Rate",
      rate: 9850,
      change: 2.4,
    },
    {
      name: "Silver Rate",
      rate: 92.5,
      change: 1.8,
    },
    {
      name: "Platinum Rate",
      rate: 3250,
      change: 1.2,
    },
  ]);

  // Automatic Countdown
  useEffect(() => {
    if (!isAutoUpdate) return;

    const timer = setInterval(() => {
      setCountdown((previous) => {
        if (previous <= 1) {
          updateRates();

          return intervalMinutes * 60;
        }

        return previous - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isAutoUpdate, intervalMinutes]);

  // Automatic Rate Update
  const updateRates = () => {
    setIsSyncing(true);

    setTimeout(() => {
      setRates((previousRates) =>
        previousRates.map((metal) => {
          const randomChange =
            (Math.random() - 0.5) * 20;

          return {
            ...metal,
            rate: Math.round(
              (metal.rate + randomChange) * 100
            ) / 100,
          };
        })
      );

      setLastUpdated(new Date());

      setIsSyncing(false);
    }, 1000);
  };

  // Manual Sync
  const handleSyncNow = () => {
    setCountdown(intervalMinutes * 60);
    updateRates();
  };

  // Change Interval
  const handleIntervalChange = (
    value: number
  ) => {
    setIntervalMinutes(value);
    setCountdown(value * 60);
  };

  // Format Countdown
  const formatCountdown = () => {
    const minutes = Math.floor(
      countdown / 60
    );

    const seconds = countdown % 60;

    return `${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;
  };

  return (
    <div className="min-h-screen bg-[#090a09] text-white">

      <GoldRateSidebar />

      <main className="ml-64 p-8">

        {/* HEADER */}
        <div className="mb-8 flex items-center justify-between">

          <div>
            <p className="text-sm text-gray-500">
              Gold Rate / Auto Update
            </p>

            <h1 className="mt-2 text-3xl font-bold">
              Auto Update
            </h1>

            <p className="mt-2 text-gray-400">
              Automatically update precious metal rates.
            </p>
          </div>

          <div
            className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm ${
              isAutoUpdate
                ? "border-green-900 bg-green-950 text-green-400"
                : "border-red-900 bg-red-950 text-red-400"
            }`}
          >
            <span
              className={`h-2 w-2 rounded-full ${
                isAutoUpdate
                  ? "bg-green-400"
                  : "bg-red-400"
              }`}
            />

            {isAutoUpdate
              ? "Auto Update Active"
              : "Auto Update Paused"}
          </div>

        </div>

        {/* AUTO UPDATE CONTROL */}
        <div className="rounded-xl border border-[#3d3218] bg-[#101210] p-6">

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-4">

              <div className="rounded-lg bg-[#211c0d] p-3">
                <Zap
                  size={25}
                  className="text-[#e4b52d]"
                />
              </div>

              <div>
                <h2 className="text-lg font-semibold">
                  Automatic Rate Synchronization
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Rates will automatically update at the selected interval.
                </p>
              </div>

            </div>

            {/* TOGGLE */}
            <button
              onClick={() => {
                setIsAutoUpdate(!isAutoUpdate);

                if (!isAutoUpdate) {
                  setCountdown(
                    intervalMinutes * 60
                  );
                }
              }}
              className={`relative h-7 w-14 rounded-full transition ${
                isAutoUpdate
                  ? "bg-[#b98c20]"
                  : "bg-gray-700"
              }`}
            >
              <span
                className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
                  isAutoUpdate
                    ? "left-8"
                    : "left-1"
                }`}
              />
            </button>

          </div>

        </div>

        {/* STATUS CARDS */}
        <div className="mt-6 grid gap-5 md:grid-cols-3">

          <div className="rounded-xl border border-[#3d3218] bg-[#101210] p-5">

            <RefreshCw
              size={26}
              className={`text-[#e4b52d] ${
                isSyncing
                  ? "animate-spin"
                  : ""
              }`}
            />

            <p className="mt-5 text-sm text-gray-400">
              UPDATE STATUS
            </p>

            <h2 className="mt-2 text-2xl font-bold text-green-400">
              {isSyncing
                ? "Updating..."
                : "Synced"}
            </h2>

          </div>

          <div className="rounded-xl border border-[#3d3218] bg-[#101210] p-5">

            <Clock
              size={26}
              className="text-[#e4b52d]"
            />

            <p className="mt-5 text-sm text-gray-400">
              NEXT UPDATE IN
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              {isAutoUpdate
                ? formatCountdown()
                : "--:--"}
            </h2>

          </div>

          <div className="rounded-xl border border-[#3d3218] bg-[#101210] p-5">

            <CheckCircle2
              size={26}
              className="text-green-400"
            />

            <p className="mt-5 text-sm text-gray-400">
              LAST UPDATED
            </p>

            <h2 className="mt-2 text-xl font-bold">
              {lastUpdated.toLocaleTimeString()}
            </h2>

          </div>

        </div>

        {/* SETTINGS */}
        <div className="mt-6 rounded-xl border border-[#3d3218] bg-[#101210] p-6">

          <div className="flex items-center gap-3">

            <Settings2
              size={22}
              className="text-[#e4b52d]"
            />

            <h2 className="text-lg font-semibold text-[#e4b52d]">
              UPDATE SETTINGS
            </h2>

          </div>

          <div className="mt-6 grid gap-5 md:grid-cols-2">

            <div>

              <label className="text-sm text-gray-400">
                UPDATE INTERVAL
              </label>

              <select
                value={intervalMinutes}
                onChange={(event) =>
                  handleIntervalChange(
                    Number(event.target.value)
                  )
                }
                className="mt-3 w-full rounded-lg border border-[#4a3a18] bg-[#101210] px-4 py-3 text-sm text-white outline-none"
              >
                <option value={1}>
                  Every 1 Minute
                </option>

                <option value={5}>
                  Every 5 Minutes
                </option>

                <option value={15}>
                  Every 15 Minutes
                </option>

                <option value={30}>
                  Every 30 Minutes
                </option>

                <option value={60}>
                  Every 1 Hour
                </option>

              </select>

            </div>

            <div>

              <label className="text-sm text-gray-400">
                RATE DATA SOURCE
              </label>

              <select className="mt-3 w-full rounded-lg border border-[#4a3a18] bg-[#101210] px-4 py-3 text-sm text-white outline-none">

                <option>
                  Live Market API
                </option>

                <option>
                  Bank Rate Feed
                </option>

                <option>
                  Manual Rate
                </option>

              </select>

            </div>

          </div>

        </div>

        {/* METAL RATES */}
        <div className="mt-6 rounded-xl border border-[#3d3218] bg-[#101210] p-6">

          <div className="flex items-center justify-between">

            <h2 className="text-lg font-semibold text-[#e4b52d]">
              LIVE METAL RATES
            </h2>

            <button
              onClick={handleSyncNow}
              disabled={isSyncing}
              className="flex items-center gap-2 rounded-lg border border-[#6d5318] bg-[#17150d] px-4 py-2 text-sm text-[#e4b52d]"
            >

              <RefreshCw
                size={16}
                className={
                  isSyncing
                    ? "animate-spin"
                    : ""
                }
              />

              Sync Now

            </button>

          </div>

          <div className="mt-5 space-y-3">

            {rates.map((metal) => (

              <div
                key={metal.name}
                className="flex items-center justify-between rounded-lg border border-[#302a1b] bg-[#151611] p-4"
              >

                <div>

                  <p className="font-medium">
                    {metal.name}
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Live synchronized rate
                  </p>

                </div>

                <div className="text-right">

                  <p className="text-lg font-semibold">
                    ₹ {metal.rate.toLocaleString("en-IN")}
                  </p>

                  <p className="text-xs text-green-400">
                    +{metal.change}%
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

        {/* CONTROL */}
        <div className="mt-6 flex items-center justify-between rounded-xl border border-[#3d3218] bg-[#101210] p-5">

          <div>

            <p className="font-semibold">
              {isAutoUpdate
                ? "Automatic Updates Running"
                : "Automatic Updates Paused"}
            </p>

            <p className="mt-1 text-sm text-gray-500">
              {isAutoUpdate
                ? "The system will automatically synchronize rates."
                : "Enable automatic updates to resume synchronization."}
            </p>

          </div>

          <button
            onClick={() =>
              setIsAutoUpdate(!isAutoUpdate)
            }
            className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm ${
              isAutoUpdate
                ? "border border-red-900 bg-red-950 text-red-400"
                : "border border-green-900 bg-green-950 text-green-400"
            }`}
          >

            {isAutoUpdate ? (
              <>
                <Pause size={16} />
                Pause Updates
              </>
            ) : (
              <>
                <Play size={16} />
                Resume Updates
              </>
            )}

          </button>

        </div>

      </main>

    </div>
  );
}