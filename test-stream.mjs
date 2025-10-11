const response = await fetch("http://localhost:3002/api/chat", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    messages: [{ role: "user", content: "Rispondi solo: Test OK" }]
  })
});

console.log("Status:", response.status);
console.log("Headers:", response.headers.get("content-type"));

const reader = response.body.getReader();
const decoder = new TextDecoder();
let count = 0;

console.log("\n=== STREAMING CHUNKS ===");
while (true) {
  const { done, value } = await reader.read();
  if (done) break;
  
  const chunk = decoder.decode(value);
  count++;
  console.log(`Chunk ${count} (${chunk.length} chars):`, JSON.stringify(chunk.substring(0, 100)));
  
  if (count >= 5) {
    console.log("... (stopping after 5 chunks for brevity)");
    break;
  }
}
