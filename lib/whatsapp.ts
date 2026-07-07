const WHATSAPP_NUMBER = "918544924982";

function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function getOrderWhatsAppUrl(
  itemName: string,
  price: number,
  customerName: string,
  phone: string,
  address: string,
) {
  const message = `Hello BrownCrust Cafe,\n\nI would like to order.\n\nCustomer Name: ${customerName}\nPhone: ${phone}\nDelivery Address: ${address}\n\nFood Item: ${itemName}\nPrice: $${price.toFixed(2)}\n\nPlease confirm my order.`;
  return buildWhatsAppUrl(message);
}

export function getBookingWhatsAppUrl(
  name: string,
  phone: string,
  date: string,
  time: string,
  guests: string,
) {
  const message = `Hello BrownCrust Cafe,\n\nI would like to reserve a table.\n\nName: ${name}\nPhone: ${phone}\nDate: ${date}\nTime: ${time}\nGuests: ${guests}\n\nPlease confirm my reservation.`;
  return buildWhatsAppUrl(message);
}

export function getEnquiryWhatsAppUrl(
  name: string,
  phone: string,
  email: string,
  message: string,
) {
  const text = `Hello BrownCrust Cafe,\n\nI have an enquiry.\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nMessage: ${message}`;
  return buildWhatsAppUrl(text);
}
