"use client";

import { useMemo } from "react";

export default function useGoldCalculation({
  weight = 0,
  goldRate = 0,
  purity = 22,
  makingCharges = 0,
  wastage = 0,
  gstRate = 3,
}) {
  const purityFactor = useMemo(() => {
    return Number(purity) / 24;
  }, [purity]);

  const pureGoldRate = useMemo(() => {
    return Number(goldRate) * purityFactor;
  }, [goldRate, purityFactor]);

  const goldValue = useMemo(() => {
    return Number(weight) * pureGoldRate;
  }, [weight, pureGoldRate]);

  const wastageAmount = useMemo(() => {
    return (
      (goldValue * Number(wastage)) /
      100
    );
  }, [goldValue, wastage]);

  const makingAmount = useMemo(() => {
    return Number(makingCharges);
  }, [makingCharges]);

  const taxableAmount = useMemo(() => {
    return (
      goldValue +
      wastageAmount +
      makingAmount
    );
  }, [
    goldValue,
    wastageAmount,
    makingAmount,
  ]);

  const gstAmount = useMemo(() => {
    return (
      (taxableAmount * Number(gstRate)) /
      100
    );
  }, [taxableAmount, gstRate]);

  const totalAmount = useMemo(() => {
    return taxableAmount + gstAmount;
  }, [taxableAmount, gstAmount]);

  return {
    purityFactor,
    pureGoldRate,
    goldValue,
    wastageAmount,
    makingAmount,
    taxableAmount,
    gstAmount,
    totalAmount,
  };
}