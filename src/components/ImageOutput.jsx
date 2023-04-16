export const ImageOutput = ({imageURL = ""}) => {
    return (
        <>
            {imageURL && <img src={imageURL} alt=""/>}
        </>
    );
}