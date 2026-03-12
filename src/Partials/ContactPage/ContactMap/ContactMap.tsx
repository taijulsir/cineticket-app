
"use client"
function ContactMap() {
  return (
    <div className="flex-1 w-full h-full min-h-[400px] lg:min-h-[600px] relative rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-white/10 group">
      {/* Subtle overlay to blend map with dark theme, disappears on hover */}
      <div className="absolute inset-0 bg-[#0b0b0f]/20 pointer-events-none group-hover:bg-transparent transition-colors duration-500 z-10"></div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.466442071079!2d150.8220426!3d-33.980551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ece4429c6d25%3A0x1d9e010aa9d607f5!2s43%20Leppington%20House%20Dr%2C%20Denham%20Court%20NSW%202565%2C%20Australia!5e0!3m2!1sen!2sbd!4v1719212098445!5m2!1sen!2sbd"
        className="w-full h-full absolute inset-0 filter grayscale-[20%] contrast-125"
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default ContactMap;
