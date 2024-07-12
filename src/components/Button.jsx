import { Link } from "react-router-dom"
function Button({background, text, url}) {
    return (
        <div>
              <button style={background}><Link to={url}>{text}</Link></button> 
        </div>
    )
}

export default Button
