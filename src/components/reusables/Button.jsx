import { useNavigate } from "react-router-dom";

function Button({ bgColor, textColor, type = "button", className, url, text }) {
  const style = {
    backgroundColor: bgColor,
    color: textColor,
    borderRadius: "2rem",
    cursor: "pointer",
  };

  const navigation = useNavigate();

  const handleNavigate = () => {

  if (url.startsWith('#')) {
    // Scroll to the section with the ID 
    document.getElementById(url.substring(1))?.scrollIntoView({ behavior: 'smooth' });  
  } else {
    navigation(url);
  }
}

  return (
    <div>
      <button onClick={handleNavigate} style={style} className={className}>
        {text}
      </button>
    </div>
  );
}

export default Button;
