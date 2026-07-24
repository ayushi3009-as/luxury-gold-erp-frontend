const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "/api";

async function request(
  endpoint,
  options = {}
) {
  const response = await fetch(
    `${API_BASE_URL}${endpoint}`,
    {
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
      ...options,
    }
  );

  if (!response.ok) {
    const errorData =
      await response.json().catch(() => null);

    throw new Error(
      errorData?.message ||
        "Something went wrong with the API request."
    );
  }

  return response.json();
}

/* =========================
   PRODUCTS
========================= */

export async function getProducts(
  search = ""
) {
  const query = search
    ? `?search=${encodeURIComponent(search)}`
    : "";

  return request(`/products${query}`);
}

export async function getProductByBarcode(
  barcode
) {
  return request(
    `/products/barcode/${encodeURIComponent(
      barcode
    )}`
  );
}

/* =========================
   CUSTOMERS
========================= */

export async function getCustomers(
  search = ""
) {
  const query = search
    ? `?search=${encodeURIComponent(search)}`
    : "";

  return request(`/customers${query}`);
}

export async function getCustomerById(
  customerId
) {
  return request(
    `/customers/${customerId}`
  );
}

export async function createCustomer(
  customerData
) {
  return request("/customers", {
    method: "POST",
    body: JSON.stringify(customerData),
  });
}

/* =========================
   INVOICES
========================= */

export async function createInvoice(
  invoiceData
) {
  return request("/invoices", {
    method: "POST",
    body: JSON.stringify(invoiceData),
  });
}

export async function getInvoiceById(
  invoiceId
) {
  return request(
    `/invoices/${invoiceId}`
  );
}

export async function updateInvoice(
  invoiceId,
  invoiceData
) {
  return request(
    `/invoices/${invoiceId}`,
    {
      method: "PUT",
      body: JSON.stringify(invoiceData),
    }
  );
}

/* =========================
   HOLD BILLS
========================= */

export async function getHeldBills() {
  return request("/invoices/held");
}

export async function holdInvoice(
  invoiceData
) {
  return request("/invoices/hold", {
    method: "POST",
    body: JSON.stringify(invoiceData),
  });
}

export async function restoreHeldInvoice(
  invoiceId
) {
  return request(
    `/invoices/held/${invoiceId}/restore`,
    {
      method: "POST",
    }
  );
}

/* =========================
   PAYMENTS
========================= */

export async function processPayment(
  paymentData
) {
  return request("/payments", {
    method: "POST",
    body: JSON.stringify(paymentData),
  });
}

/* =========================
   SALES RETURNS
========================= */

export async function createSalesReturn(
  returnData
) {
  return request("/sales-returns", {
    method: "POST",
    body: JSON.stringify(returnData),
  });
}

/* =========================
   EXCHANGE
========================= */

export async function createExchange(
  exchangeData
) {
  return request("/exchanges", {
    method: "POST",
    body: JSON.stringify(exchangeData),
  });
}

/* =========================
   E-INVOICE
========================= */

export async function generateEInvoice(
  invoiceData
) {
  return request("/e-invoices", {
    method: "POST",
    body: JSON.stringify(invoiceData),
  });
}

export async function getEInvoice(
  invoiceId
) {
  return request(
    `/e-invoices/${invoiceId}`
  );
}

/* =========================
   INVOICE HISTORY
========================= */

export async function getInvoiceHistory(
  filters = {}
) {
  const query = new URLSearchParams(
    filters
  ).toString();

  return request(
    `/invoices/history${
      query ? `?${query}` : ""
    }`
  );
}

/* =========================
   GOLD RATES
========================= */

export async function getGoldRates() {
  return request("/gold-rates");
}