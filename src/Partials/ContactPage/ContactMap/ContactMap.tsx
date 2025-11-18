
"use client"
function ContactMap() {
    return (
        <div className="flex-1">
      <style jsx>{`
        .responsive-iframe {
          height: 334px;
          width: 100%;
        }
        @media (min-width: 1024px) {
          .responsive-iframe {
            height: 600px;
            width: 100%;
          }
        }
      `}</style>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.466442071079!2d150.8220426!3d-33.980551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ece4429c6d25%3A0x1d9e010aa9d607f5!2s43%20Leppington%20House%20Dr%2C%20Denham%20Court%20NSW%202565%2C%20Australia!5e0!3m2!1sen!2sbd!4v1719212098445!5m2!1sen!2sbd" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    
    );
  }
  
  export default ContactMap;
  