

const Photo = ({photo}) => {


    const {id, title, url} = photo;

    console.log(photo);
    return (
        <div>
        <img src={url} alt="" />
        <p>Id: {id}</p>
        <p>Title: {title}</p>
            
        </div>
    );
};

export default Photo;