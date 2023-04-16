export const ImageOutput = ({ imageURL = "" }) => {
    return (
        <div style={{ textAlign: "center", marginTop: "40px", marginBottom: "40px" }}>
            {imageURL && <img src={imageURL} alt="" style={{ display: "inline-block" }} />}
        </div>
    );
}