export default function Artists({artist}){
    const artistStyle = {
        backgroundColor:'gray',
        color:'black',
        borderRadius:'10px',
        padding:'20px',
        margin:'20px'
    }
    return (
        <div style={artistStyle}>
            <h4>Artist name: {artist.name}</h4>
            <p>Song: {artist.song}</p>
        </div>
    )
}