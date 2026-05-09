import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
import { FaInstagram, FaXTwitter, FaLinkedin, FaWhatsapp, FaYoutube, FaDiscord } from 'react-icons/fa6';
import styles from './Footer.module.css';

const footerLinks = {
  Platform: [
    { label: 'Hackathons', href: '/hackathons' },
    { label: 'Projects', href: '/projects' },
    { label: 'Sponsors', href: '/sponsors' },
    { label: 'Community', href: '/community' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Brand Kit', href: '/brand-kit' },
  ],
};

const socials = [
  { icon: FaInstagram, label: 'Instagram', handle: '@hackerunity', href: 'https://instagram.com/hackerunity' },
  { icon: FaXTwitter, label: 'Twitter (X)', handle: '@Hackers_Unity', href: 'https://twitter.com/Hackers_Unity' },
  { icon: FaLinkedin, label: 'LinkedIn', handle: '@hackerunity', href: 'https://linkedin.com/company/hackerunity' },
  { icon: FaYoutube, label: 'YouTube', handle: '@hackerunity', href: 'https://youtube.com/@hackerunity' },
  { icon: FaWhatsapp, label: 'WhatsApp', handle: 'Community Group', href: 'https://chat.whatsapp.com/JqVKrBiZIdND1n40ffErw3?mode=gi_t' },
  { icon: FaDiscord, label: 'Discord', handle: 'Join Server', href: 'https://discord.com/invite/xcNNqdDhce' },
];

const contacts = [
  { icon: Mail, label: 'Email', value: 'hackerunity.community@gmail.com', href: 'mailto:hackerunity.community@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91 8852924002', href: 'tel:+918852924002' },
  { icon: Phone, label: 'Phone', value: '+91 9324264950', href: 'tel:+919324264950' },
  { icon: MapPin, label: 'Address', value: 'Jaipur, Rajasthan, India', href: 'https://maps.app.goo.gl/dVgHVrKS4NkdNkJS7' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        {/* Brand Column */}
        <div className={styles.brandCol}>
          <Link href="/" className={styles.logo}>
            <img src="/logo.png" alt="Hacker's Unity Logo" className={styles.logoImage} />
            <span className={styles.logoText}>Hacker&apos;s Unity</span>
          </Link>
          <p className={styles.tagline}>Build. Connect. Innovate.</p>
          <p className={styles.description}>
            Empowering the next generation of builders through hackathons, community, and collaboration.
          </p>
          <div className={styles.socials}>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className={styles.socialLink}
                aria-label={s.label}
                title={`${s.label}: ${s.handle}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <s.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Contact Column */}
        <div className={styles.linkCol}>
          <h4 className={styles.colTitle}>Contact Us</h4>
          <ul className={styles.contactList}>
            {contacts.map((c) => (
              <li key={c.label}>
                <a href={c.href} className={styles.contactLink}>
                  <c.icon size={16} />
                  <span>{c.value}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Link Columns */}
        {Object.entries(footerLinks).map(([category, links]) => (
          <div key={category} className={styles.linkCol}>
            <h4 className={styles.colTitle}>{category}</h4>
            <ul>
              {links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={styles.footerLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className="container">
          <p>© {new Date().getFullYear()} Hacker&apos;s Unity All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
