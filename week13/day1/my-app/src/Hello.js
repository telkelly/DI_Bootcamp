import '../src/Main.css'

const users = [
  {
    name: "Mary",
    email: "mary@gmail.com",
  },
  {
    name: "Kelly",
    email: "kelly@gmail.com",
  },
  {
    name: "Mark",
    email: "mark@gmail.com",
  }
];

const Hello = () => {
    const styling = { backgroundColor: 'red', fontSize: '16px', color: 'purple' };
    const html_users =
        users.map(i => {
            return (
                <>
                    <h2>{i.name}</h2>
                    <p className="text-email">{i.email}</p>
                </>
            );
        });
    return (
        <div>
            <h1 style={styling}>Hello, users:
                {html_users}
            </h1>
        </div>
    )
}

export default Hello