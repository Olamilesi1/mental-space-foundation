

function Choose({src, text, alt, className, classNameText}) {

    const style = {
        width: "100%",
        margin: "5rem 0 2rem 0",
    }

    return (
        <div style={style}>
        <img src={src} alt={alt}/>
        <h2 className={classNameText}>{text} </h2>
      </div>
    )
}

export default Choose
