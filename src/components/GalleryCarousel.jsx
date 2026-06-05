'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './GalleryCarousel.module.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  { src: '/gallery/HUHackstorm.jpg', alt: 'HU Hackstorm', title: 'HU Hackstorm Kickoff', desc: 'Where the journey of hackers begins.' },
  { src: '/gallery/1.jpg', alt: 'Hackstorm Launch', title: 'Hackstorm Launch', desc: 'Unleashing creative tech solutions.' },
  { src: '/gallery/HUHackstorm3.jpg', alt: 'HU Hackstorm 3', title: 'Hands-On Learning', desc: 'Building and learning together.' },
  { src: '/gallery/HUHackstorm4.jpg', alt: 'HU Hackstorm 4', title: 'Intense Coding', desc: 'Hacking the night away.' },
  { src: '/gallery/HUHackstorm5.jpg', alt: 'HU Hackstorm 5', title: 'Team Collaboration', desc: 'The energy of passionate developers.' },
  { src: '/gallery/HUHackstorm6.jpg', alt: 'HU Hackstorm 6', title: 'Problem Solving', desc: 'Tackling real-world challenges.' },
  { src: '/gallery/HUHackstorm7.jpg', alt: 'HU Hackstorm 7', title: 'Hackstorm Action', desc: 'Focus and determination.' },
  { src: '/gallery/HUHackstormw2.jpg', alt: 'HU Hackstorm w2', title: 'Winning Moments', desc: 'Celebrating success and innovation.' },
  { src: '/gallery/HuTeam.jpg', alt: 'HU Team', title: 'The Unity Team', desc: 'The people behind the magic.' },
  { src: '/gallery/HUEvents3.jpg', alt: 'HU Event 3', title: 'Community Meetup', desc: 'Bringing the tech community together.' },
  { src: '/gallery/HuEvents1.jpg', alt: 'HU Event 1', title: 'Mentorship Session', desc: 'Learning from industry experts.' },
  { src: '/gallery/HuEvents2.jpg', alt: 'HU Event 2', title: 'Tech Talk', desc: 'Insights and knowledge sharing.' },
  { src: '/gallery/HuEvents4.jpg', alt: 'HU Event 4', title: 'Networking', desc: 'Connecting with fellow developers.' },
  { src: '/gallery/HuEvents5.jpg', alt: 'HU Event 5', title: 'Interactive Workshop', desc: 'Hands-on practical experience.' },
  { src: '/gallery/HuEvents6.jpg', alt: 'HU Event 6', title: 'Panel Discussion', desc: 'Exploring the future of tech.' },
  { src: '/gallery/HuEvents7.jpg', alt: 'HU Event 7', title: 'Event Kickoff', desc: 'Start of something great.' },
  { src: '/gallery/Event_Orchestration.png', alt: 'Kestra Event Orchestration', title: 'Kestra Orchestration Challenge', desc: 'Building workflow automation at scale.' },
  { src: '/gallery/hackstorm_speaker.jpg', alt: 'Hackstorm Keynote', title: 'Inspiring Keynote', desc: 'Sharing valuable tech insights at Hackstorm.' },
  { src: '/gallery/hackstorm_booth.jpg', alt: 'Hackstorm Photobooth', title: 'Team Spirits', desc: 'Fun moments at the Hackstorm photobooth.' },
  { src: '/gallery/hackstorm_stage.jpg', alt: 'Inauguration Ceremony', title: 'Inauguration Stage', desc: 'Dignitaries and community leads at the opening ceremony.' },
  { src: '/gallery/hackstorm_inauguration.jpg', alt: 'Opening Remarks', title: 'Opening Remarks', desc: 'Welcoming hackers to Code the Storm.' },
  { src: '/gallery/stellar_bootcamp.jpg', alt: 'Stellar Bootcamp', title: 'Stellar Bootcamp', desc: 'Learning Web3 and blockchain development hands-on.' },
  { src: '/gallery/hackstorm_discussions.jpg', alt: 'Team Discussions', title: 'Team Discussions', desc: 'Mentors and participants collaborating on ideas.' },
  { src: '/gallery/hackstorm_hall.jpg', alt: 'Hackstorm Arena', title: 'Hackstorm Arena', desc: 'Hackers building solutions during the 24-hour marathon.' },
  { src: '/gallery/hackstorm_winners.jpg', alt: 'Winning Teams', title: 'Winning Teams', desc: 'Celebrating the top innovations at the closing ceremony.' },
  { src: '/gallery/hackstorm_letters.jpg', alt: 'Hackstorm Pride', title: 'Hackstorm Pride', desc: 'Code the Storm, the community way.' },
  { src: '/gallery/hive_mentors.jpg', alt: 'HIVE Mentors', title: 'HIVE Mentors', desc: 'Connecting community experts to guide the hackers.' },
  { src: '/gallery/hackstorm_developers.jpg', alt: 'Building Tomorrow', title: 'Building Tomorrow', desc: 'Focus and passion in every line of code.' },
  { src: '/gallery/hackstorm_focus.jpg', alt: 'Intense Development', title: 'Intense Development', desc: 'Hackers working together to meet the deadline.' },
  { src: '/gallery/hackstorm_mentoring.jpg', alt: 'Expert Guidance', title: 'Expert Guidance', desc: 'One-on-one mentorship during the hackathon.' }
];

export default function GalleryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Auto change every 5 seconds
    return () => clearInterval(timer);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselTrack} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((img, index) => (
          <div key={index} className={`${styles.carouselSlide} ${currentIndex === index ? styles.activeSlide : ''}`}>
            <Image 
              src={img.src} 
              alt={img.alt} 
              fill 
              style={{ objectFit: 'cover' }} 
              priority={index === 0}
            />
            {/* Glass effect caption */}
            <div className={styles.glassCaption}>
              <h4>{img.title}</h4>
              <p>{img.desc}</p>
            </div>
          </div>
        ))}
      </div>
      
      <button className={`${styles.navButton} ${styles.prevButton}`} onClick={goToPrev} aria-label="Previous image">
        <ChevronLeft size={24} />
      </button>
      <button className={`${styles.navButton} ${styles.nextButton}`} onClick={goToNext} aria-label="Next image">
        <ChevronRight size={24} />
      </button>

      <div className={styles.indicators}>
        {images.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${currentIndex === index ? styles.activeIndicator : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
