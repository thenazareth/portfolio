import './Contact.css';
import {baixarPDF} from '../scripts/download.js';

export default function Contact() {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
  return (
    <section className="contact" id="contato">
      <div className="contact-card">
        {/* Glows */}
        <div className="contact-glow contact-glow--right" />
        <div className="contact-glow contact-glow--left" />

        <div className="contact-grid">
          {/* Lado esquerdo */}
          <div className="contact-info">
            <div className="contact-badge">
              <span className="contact-badge-dot" />
              Available for new opportunities
            </div>

            <h2 className="contact-title">Let's work together!</h2>

            <p className="contact-description">
              Feel free to send me a message, connect through professional networks, 
              or check out my complete resume in PDF format.
            </p>

            <div className="contact-details">
              <span className="contact-detail">
                <span className="material-symbols-outlined contact-detail-icon">
                  mail
                </span>
                vitorianazarethilha@gmail.com
              </span>
              <span className="contact-detail">
                <span className="material-symbols-outlined contact-detail-icon">
                  location_on
                </span>
                Rio de Janeiro, BR
              </span>
            </div>
          </div>

          {/* Lado direito*/}
          <div className="contact-channels">
            <div className="contact-channels-header">
              <h3 className="contact-channels-title">Contact Channels</h3>
              <p className="contact-channels-subtitle">
                Choose a channel to contact me or access my
                resume.
              </p>
            </div>

            <div className="contact-channels-list">
              <a
                className="contact-channel-btn contact-channel-btn--primary"
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noreferrer">
                <span className="material-symbols-outlined contact-channel-icon">
                  chat
                </span>
                Contact now
              </a>

              <a
                className="contact-channel-btn contact-channel-btn--secondary"
                href="mailto:vitorianazareth@gmail.com">
                <span className="material-symbols-outlined contact-channel-icon contact-channel-icon--indigo">
                  mail
                </span>
                Send an Email
              </a>

              <a
                className="contact-channel-btn contact-channel-btn--tertiary"
                href="#"
                onClick={baixarPDF}
                target="_blank"
                rel="noreferrer">
                <span className="material-symbols-outlined contact-channel-icon contact-channel-icon--slate">
                  download
                </span>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}