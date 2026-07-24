"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

const POSContext = createContext(null);

export function POSProvider({ children }) {
  const [customer, setCustomer] = useState(null);

  const [items, setItems] = useState([]);

  const [invoiceNumber, setInvoiceNumber] = useState(
    "INV-2026-00124"
  );

  const [invoiceStatus, setInvoiceStatus] =
    useState("Draft");

  const [paymentMethod, setPaymentMethod] =
    useState(null);

  const [heldBills, setHeldBills] = useState([]);

  const [discount, setDiscount] = useState(0);

  const [taxRate, setTaxRate] = useState(3);

  const addItem = (item) => {
    setItems((previousItems) => {
      const existingItem = previousItems.find(
        (existing) => existing.id === item.id
      );

      if (existingItem) {
        return previousItems.map((existing) =>
          existing.id === item.id
            ? {
                ...existing,
                qty:
                  (existing.qty || 1) +
                  (item.qty || 1),
              }
            : existing
        );
      }

      return [
        ...previousItems,
        {
          ...item,
          qty: item.qty || 1,
        },
      ];
    });
  };

  const updateItem = (id, field, value) => {
    setItems((previousItems) =>
      previousItems.map((item) =>
        item.id === id
          ? {
              ...item,
              [field]: value,
            }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setItems((previousItems) =>
      previousItems.filter(
        (item) => item.id !== id
      )
    );
  };

  const clearItems = () => {
    setItems([]);
  };

  const clearInvoice = () => {
    setCustomer(null);
    setItems([]);
    setPaymentMethod(null);
    setDiscount(0);
    setInvoiceStatus("Draft");
  };

  const subtotal = useMemo(() => {
    return items.reduce((total, item) => {
      const itemPrice =
        Number(item.price || 0) *
        Number(item.qty || 1);

      return total + itemPrice;
    }, 0);
  }, [items]);

  const discountAmount = useMemo(() => {
    return Number(discount || 0);
  }, [discount]);

  const taxableAmount =
    subtotal - discountAmount;

  const taxAmount = useMemo(() => {
    return (
      (taxableAmount * Number(taxRate || 0)) /
      100
    );
  }, [taxableAmount, taxRate]);

  const grandTotal =
    taxableAmount + taxAmount;

  const holdBill = () => {
    const bill = {
      id: Date.now(),
      invoiceNumber,
      customer,
      items,
      subtotal,
      discount: discountAmount,
      tax: taxAmount,
      total: grandTotal,
      createdAt: new Date().toISOString(),
    };

    setHeldBills((previousBills) => [
      ...previousBills,
      bill,
    ]);

    setInvoiceStatus("On Hold");
  };

  const restoreHeldBill = (bill) => {
    setInvoiceNumber(bill.invoiceNumber);
    setCustomer(bill.customer);
    setItems(bill.items);
    setDiscount(bill.discount || 0);
    setInvoiceStatus("Draft");

    setHeldBills((previousBills) =>
      previousBills.filter(
        (item) => item.id !== bill.id
      )
    );
  };

  const discardHeldBill = (billId) => {
    setHeldBills((previousBills) =>
      previousBills.filter((bill) => bill.id !== billId)
    );
  };

  const completeInvoice = () => {
    setInvoiceStatus("Completed");
  };

  const value = {
    customer,
    setCustomer,

    items,
    setItems,
    addItem,
    updateItem,
    removeItem,
    clearItems,

    invoiceNumber,
    setInvoiceNumber,

    invoiceStatus,
    setInvoiceStatus,

    paymentMethod,
    setPaymentMethod,

    discount,
    setDiscount,

    taxRate,
    setTaxRate,

    subtotal,
    discountAmount,
    taxableAmount,
    taxAmount,
    grandTotal,

    heldBills,
    holdBill,
    restoreHeldBill,
    discardHeldBill,

    clearInvoice,
    completeInvoice,
  };

  return (
    <POSContext.Provider value={value}>
      {children}
    </POSContext.Provider>
  );
}

export function usePOS() {
  const context = useContext(POSContext);

  if (!context) {
    throw new Error(
      "usePOS must be used inside POSProvider"
    );
  }

  return context;
}
