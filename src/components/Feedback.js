import React, { useState } from 'react';
import './Feedback.css';

function Feedback() {
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // retroalimentación backend 
    console.log('Retroalimentación enviada:', feedback);
    setSubmitted(true);
  };

  return (
    <div className="feedback-container">
      <h1>Dejanos tu Retroalimentación</h1>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="Escribe aquí tus comentarios..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
          <button type="submit">Enviar</button>
        </form>
      ) : (
        <p>¡Gracias por tu retroalimentación!</p>
      )}
    </div>
  );
}

export default Feedback;
