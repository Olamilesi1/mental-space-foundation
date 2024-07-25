function Choose({src, text, alt, className}) {

    const style = {
        width: "50%",
        margin: "5rem 0 2rem 0",
    }

    return (
        <div style={style}>
        <img src={src} alt={alt} className={className}/>
        <h2>{text}</h2>
      </div>
    )
}

export default Choose
