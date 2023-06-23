
const User = (props) => {
    const { name, email, username, id } = props.info;
    console.log(props);
    return (
      <div className="tc bg-light-green br3 pa3 ma2 dib bw2 grow shadow5">
        <img src={`https://robohash.org/${id}?size=150x150`}/>
        <h2>Name: {name}</h2>
        <h4>Email: {email}</h4>
        <h5>Username: {username}</h5>
      </div>
    );    
}

export default User;