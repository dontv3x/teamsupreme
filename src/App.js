import React, { useState, useEffect } from 'react';
import logo from './profile.png';
import sef from './sef.png';
import './App.css';
import Game from './Game';

const HealthAwareness = () => {
  const [selectedChallenge, setSelectedChallenge] = useState(null);

  useEffect(() => {
    document.title = "Healthy You, Healthy World!"; // Set the tab title
    const link = document.querySelector("link[rel~='icon']");
    if (link) {
      link.href = sef; // Set favicon
    } else {
      const newLink = document.createElement("link");
      newLink.rel = "icon";
      newLink.href = sef;
      document.head.appendChild(newLink);
    }
  }, []);

  const contributions = [
    {
      title: "Healthy Eating",
      description: "Choose whole foods, fruits, and vegetables. Limit processed foods and sugary drinks.",
      tips: ["Eat 5 servings of fruits/vegetables daily", "Choose whole grains", "Stay hydrated"],
      video: "https://www.youtube.com/watch?v=XMcab1MFaLc"
    },
    {
      title: "Regular Check-ups",
      description: "Regular medical check-ups help prevent health issues before they become serious.",
      tips: ["Annual physical examination", "Dental check-ups every 6 months", "Keep vaccinations up to date"],
      video: "https://www.youtube.com/watch?v=bBNsbvUiL0A"
    },
    {
      title: "Quality Sleep",
      description: "Good sleep is crucial for physical and mental well-being.",
      tips: ["Aim for 7-9 hours nightly", "Maintain consistent sleep schedule", "Create a relaxing bedtime routine"],
      video: "https://www.youtube.com/watch?v=oPryNy0bUDU"
    },
    {
      title: "Physical Activity",
      description: "Regular exercise improves health and reduces risk of diseases.",
      tips: ["30 minutes daily exercise", "Take walking breaks", "Find activities you enjoy"],
      video: "https://www.youtube.com/watch?v=IT94xC35u6k&t=170s"
    }
  ];

  const challenges = [
    {
      id: 1,
      title: "30-Day Water Challenge",
      description: "Drink 8 glasses of water daily for 30 days",
      difficulty: "Easy",
      impact: "Improved hydration, skin health, and energy levels"
    },
    {
      id: 2,
      title: "Sleep Schedule Reset",
      description: "Maintain consistent sleep/wake times for 21 days",
      difficulty: "Medium",
      impact: "Better sleep quality, improved mental clarity"
    },
    {
      id: 3,
      title: "Daily Movement",
      description: "30 minutes of physical activity every day for 30 days",
      difficulty: "Medium",
      impact: "Increased fitness, better mood, improved health"
    },
    {
      id: 4,
      title: "Mindfulness Meditation Challenge",
      description: "Practice mindfulness meditation for 10 minutes daily for 30 days",
      difficulty: "Medium",
      impact: "Reduced stress, improved mental clarity, emotional resilience"
    }
  ];

  return (
    <div className="health-container">
      <div className="hero">
        <div>
          <img src={logo} alt="Logo" />
          <div>
            <h1>Healthy You, Healthy World</h1>
            <p>Taking care of your health is taking care of our world</p>
          </div>
          <img src={sef} alt="Health Awareness" />
        </div>
      </div>

      <div className="sdg-goal">
        <h2>SDG Goal 3: Good Health and Well-being</h2>
        <p>
          Sustainable Development Goal 3 aims to ensure healthy lives and promote well-being for all at all ages. This includes reducing maternal mortality, ending preventable deaths of newborns and children, fighting communicable diseases, and ensuring universal access to healthcare services.
        </p>
        <div className="goal-grid">
          <div className="target">
            <h3>Key Targets</h3>
            <ul>
              <li>Reduce maternal mortality</li>
              <li>End preventable child deaths</li>
              <li>Combat infectious diseases</li>
              <li>Promote mental health</li>
              <li>Improve road safety</li>
              <li>Strengthen health systems</li>
              <li>Improve Telemedicine</li>
            </ul>
          </div>
          <div className="goal">
            <h3>2030 Goals</h3>
            <ul>
              <li>Universal health coverage</li>
              <li>Access to quality healthcare</li>
              <li>Affordable essential medicines</li>
              <li>Better health infrastructure</li>
              <li>Increase vaccination rates</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="contribute-section">
        <h2>Ways to Contribute</h2>
        <div className="contribute-grid">
          {contributions.map((item, index) => (
            <div key={index} className="contribution">
              <h3>{item.title}</h3>
              <p>{item.description}</p> 
              <a href={item.video} target="_blank">Watch video</a>
              <ul>
                {item.tips.map((tip, i) => (
                  <li key={i}>{tip}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="challenge-section">
        <h2>Join a Health Challenge</h2>
        <div className="challenge-grid">
          {challenges.map((challenge) => (
            <div
              key={challenge.id}
              className={`challenge ${selectedChallenge === challenge.id ? 'selected' : ''}`}
            >
              <h3>{challenge.title}</h3>
              <p>{challenge.description}</p>
              <div className="info">
                <p>
                  <span>Difficulty:</span> <span className="difficulty">{challenge.difficulty}</span>
                </p>
                <p>
                  <span>Impact:</span> <span className="impact">{challenge.impact}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="Proposal-section">
        <h2>What we are to present</h2>
        <p>Quickdiagnose  is your personal health assistant, designed to help you understand your symptoms and make informed decisions about your well-being. Simply enter your symptoms, and our AI-powered system will analyze them to provide possible causes, risk levels, and recommended next steps.

With an intuitive interface and medically-backed data, SymptomCheck+ helps users:
✅ Identify potential conditions based on symptoms
✅ Receive personalized health insights
✅ Get recommendations for when to seek medical care
✅ Track symptoms over time for better health management
✅ Access reliable health resources and self-care tips

🔹 Disclaimer:Quickdiagnose is not a substitute for professional medical advice. Always consult a doctor for serious concerns.

Download now and take contr SymptomCheckol of your health! 💙🩺</p>
          <Game />
      </div>

      <footer className="footer">
        <p>&copy; 2025 Health Awareness Initiative. All rights reserved.</p>
        <p>Follow us on <a href="#">Social Media</a> for updates!</p>
      </footer>
    </div>
  );
};

export default HealthAwareness;
