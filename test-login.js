fetch("http://localhost:3004/API/auth/login", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email: "sales@gold-erp.com", password: "password123" })
})
.then(async res => {
  console.log("Status:", res.status);
  const text = await res.text();
  console.log("Body:", text);
})
.catch(console.error);
