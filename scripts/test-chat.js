const presenceId = process.argv[2];
const message = process.argv.slice(3).join(" ") || "What should Gebo build next?";

if (!presenceId) {
  console.error("Usage: node scripts/test-chat.js <presenceId> [message]");
  process.exit(1);
}

fetch("http://localhost:3000/api/chat", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ presenceId, message })
})
  .then((res) => res.json())
  .then((data) => console.log(JSON.stringify(data, null, 2)))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
