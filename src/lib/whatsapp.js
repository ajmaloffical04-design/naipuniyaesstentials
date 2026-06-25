const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919074342300";

export function openWhatsAppOrder({ productName, price, size = "" }) {
  const message = `Hello Naipunya,

I want to order:

Product: ${productName}${size ? `\nSize: ${size}` : ""}
Price: ${price}

Please confirm availability and delivery details.

Thank you!`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  window.open(whatsappUrl, "_blank");
}

export function openWhatsAppGeneral(message) {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  window.open(whatsappUrl, "_blank");
}
