function Choose({src, text, alt}) {

    const style = {
        width: "50%",
        marginBottom: "2rem",
    }

    return (
        <div style={style}>
        <img src={src} alt={alt} />
        <h2>{text}</h2>
      </div>
    )
}

export default Choose
