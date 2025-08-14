import '../RecipeCard.css';

const RecipeCard = ({ recipeText }) => {

  // splitting recipe text into lines

  const lines = recipeText.split('\n').filter(line => line.trim());
  
  // trimming the line 

  const renderLine = (line, index) => {
    const trimmedLine = line.trim();
    
    if (!trimmedLine) return null;
    
    // rendering recipe title 
    if (index === 0) {
      return <h3 key={index} className="recipe-title">{trimmedLine}</h3>;
    }
    
    // rendering section headers

    if (trimmedLine.endsWith(':') || 
        trimmedLine.toLowerCase().includes('ingredients') ||
        trimmedLine.toLowerCase().includes('instructions') ||
        trimmedLine.toLowerCase().includes('directions')) {
      return <h4 key={index} className="section-header">{trimmedLine.replace(':', '')}</h4>;
    }
    
    // rendering regular content 
    return <p key={index} className="recipe-content">{trimmedLine}</p>;
  };

   // rendering the recipe card 
  return (
    <div className="recipe-card">
      {lines.map((line, index) => renderLine(line, index))}
    </div>
  );
};

export default RecipeCard;