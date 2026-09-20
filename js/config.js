/**
 * Computer Garage - Site Configuration
 * 
 * Update these values to customize contact numbers, address, and prefilled messages.
 * No code changes needed elsewhere on the site.
 */

export const SITE_CONFIG = {
  // Business details
  businessName: "Computer Garage",
  businessType: "Computer & Laptop Repair Shop",
  tagline: "Professional Laptop & Computer Repair in Vikramgad",

  // Contact Details
  // IMPORTANT: For WhatsApp, use international format without '+' or spaces (e.g., '919876543210' for India)
  whatsappNumber: "919960036865", 
  
  // Phone number for tel: links
  phoneNumberTel: "+917620095346",
  
  // Phone number displayed to visitors
  phoneNumberDisplay: "+91 76200 95346",

  // Location & Working Hours
  city: "Vikramgad",
  district: "Palghar",
  state: "Maharashtra",
  pincode: "401605",
  country: "India",
  addressFull: "Main Market Road, Vikramgad, Dist. Palghar, Maharashtra 401605",
  mapDirectionsUrl: "https://maps.google.com/?q=Vikramgad+Palghar+Maharashtra",
  workingHours: "Sunday – Friday: 9:00 AM – 6:30 PM | Saturday: 9:00 AM – 5:00 PM",
  schedule: {
    weekdays: "Sunday – Friday: 9:00 AM – 6:30 PM",
    saturday: "Saturday: 9:00 AM – 5:00 PM"
  },

  // Pre-filled WhatsApp messages for specific user actions (English & Marathi)
  messages: {
    general: "Hello Computer Garage, I need laptop/computer repair service in Vikramgad. Please let me know your availability.",
    hero: "Hello Computer Garage, I need laptop/computer repair service in Vikramgad.",
    screen: "Hello Computer Garage, I need Laptop Screen Replacement service. Please share pricing and time details.",
    battery: "Hello Computer Garage, my laptop battery needs replacement / has charging issues. Please share details.",
    ssd: "Hello Computer Garage, I want to upgrade my laptop/PC with high-speed SSD and RAM. Please share cost and options.",
    windows: "Hello Computer Garage, I need Windows / OS installation and software setup in Vikramgad.",
    overheating: "Hello Computer Garage, my laptop is overheating and shutting down. I need thermal service & fan cleaning.",
    dead: "Hello Computer Garage, my laptop is not turning on / completely dead. Need diagnostic and motherboard check in Vikramgad.",
    desktop: "Hello Computer Garage, I need desktop PC troubleshooting or custom assembling service in Vikramgad.",
    urgent: "Hello Computer Garage, I have an urgent laptop repair requirement in Vikramgad. Are you available right now?",
    customForm: (name, device, issue) => 
      `Hello Computer Garage,%0A%0AMy Name: ${name}%0ADevice: ${device}%0AIssue: ${issue}%0ALocation: Vikramgad / nearby%0APlease let me know how soon this can be inspected.`
  },

  messagesMr: {
    general: "नमस्कार कॉम्प्युटर गॅरेज, मला विक्रमगडमध्ये लॅपटॉप/कॉम्प्युटर रिपेअर सेवेबद्दल माहिती हवी आहे. कृपया वेळ सांगावी.",
    hero: "नमस्कार कॉम्प्युटर गॅरेज, मला विक्रमगडमध्ये लॅपटॉप/कॉम्प्युटर दुरुस्ती करायची आहे.",
    screen: "नमस्कार कॉम्प्युटर गॅरेज, मला लॅपटॉप स्क्रीन बदलून हवी आहे. कृपया अंदाजे खर्च व वेळ सांगावी.",
    battery: "नमस्कार कॉम्प्युटर गॅरेज, माझ्या लॅपटॉपची बॅटरी खराब झाली आहे / चार्जिंग होत नाही. कृपया माहिती द्यावी.",
    ssd: "नमस्कार कॉम्प्युटर गॅरेज, मला लॅपटॉपमध्ये SSD व RAM अपग्रेड करायची आहे. कृपया पर्याय व खर्च सांगावा.",
    windows: "नमस्कार कॉम्प्युटर गॅरेज, मला नवीन Windows OS इन्स्टॉलेशन आणि सॉफ्टवेअर सेटअप करून हवे आहे.",
    overheating: "नमस्कार कॉम्प्युटर गॅरेज, माझा लॅपटॉप खूप गरम होतो आणि आवाज करतो. कुलिंग फॅन सर्व्हिसिंग हवी आहे.",
    dead: "नमस्कार कॉम्प्युटर गॅरेज, माझा लॅपटॉप अजिबात चालू होत नाही (Dead). मदरबोर्ड तपासणी हवी आहे.",
    desktop: "नमस्कार कॉम्प्युटर गॅरेज, मला डेस्कटॉप कॉम्प्युटर दुरुस्ती / नवीन पीसी असेंबलिंगबद्दल माहिती हवी आहे.",
    urgent: "नमस्कार कॉम्प्युटर गॅरेज, मला तातडीने लॅपटॉप दुरुस्तीची आवश्यकता आहे. आज दुकान चालू आहे का?",
    customForm: (name, device, issue) => 
      `नमस्कार कॉम्प्युटर गॅरेज,%0A%0A*नाव:* ${name}%0A*डिव्हाइस:* ${device}%0A*समस्या:* ${issue}%0A*पत्ता:* विक्रमगड / परिसर%0Aकृपया अंदाजे खर्च व वेळ सांगावी.`
  }
};
