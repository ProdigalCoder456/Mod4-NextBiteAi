import React from 'react';
import '../Recipecard.css';

const Recipecard = ({ text }) => {
  const lines = text.split('\n');

  // Extract title line starting with "**Title:"
  const titleLine = lines.find(line => line.startsWith('**Title:'));
  const title = titleLine ? titleLine.replace('**Title:', '').replace(/\*/g, '').trim() : 'Recipe';

  // Description is first non-empty line after title that isn't section header
  const titleIndex = lines.indexOf(titleLine);
  const description = lines.slice(titleIndex + 1).find(line =>
    line.trim() !== '' && !line.startsWith('**Ingredients') && !line.startsWith('**Directions')
  ) || '';

  // Section indices
  const ingredientsStart = lines.findIndex(line => line.includes('**Ingredients:**'));
  const directionsStart = lines.findIndex(line => line.includes('**Directions:**'));

  // Ingredients list (lines starting with '*')
  const ingredients = lines.slice(ingredientsStart + 1, directionsStart)
    .filter(line => line.trim().startsWith('*'))
    .map(line => line.replace(/^\*\s*/, '').trim());

  // Directions list (lines after directionsStart, ignoring empty)
  const directions = lines.slice(directionsStart + 1)
    .filter(line => line.trim() !== '')
    .map(line => line.replace(/^\d+\.\s*/, '').trim());

  return (
    <div className="recipe-card">
      <h3 className="recipe-title">{title}</h3>
      <p className="recipe-desc">{description}</p>

      <div className="recipe-section">
        <h4>🛒 Ingredients</h4>
        <ul>
          {ingredients.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="recipe-section">
        <h4>👩‍🍳 Directions</h4>
        <ol>
          {directions.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Recipecard;
