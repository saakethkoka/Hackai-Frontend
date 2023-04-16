export const ImageOutput = ({ imageURL = "" }) => {
    return (
        <div style={{ textAlign: "center" }}>
            {imageURL && <img src={imageURL} alt="" style={{ display: "inline-block" }} />}
        </div>
    );
}