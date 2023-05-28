async function getRandom() {
    try {
        const starFetch = await fetch("https://www.swapi.tech/api/people");
    } catch {
        console.log('something wrong');
    }
     
}