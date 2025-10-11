const response = await fetch("http://localhost:3002/api/chat", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    messages: [{ role: "user", content: "Ciao, dimmi solo 'Test OK'" }]
  })
});

const reader = response.body.getReader();
const decoder = new TextDecoder();
let fullText = "";

while (true) {
  const { done, value } = await reader.read();
  if (done) break;
  const chunk = decoder.decode(value);
  fullText += chunk;
  console.log("CHUNK:", JSON.stringify(chunk));
}

console.log("\n=== FULL RESPONSE ===");
console.log(fullText.substring(0, 500));
