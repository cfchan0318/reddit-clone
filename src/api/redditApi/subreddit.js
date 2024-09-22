const getSubreddits = async () => {
    const res = await fetch(`https://www.reddit.com/subreddits/popular.json?before=null&after=null&count=1`);
    const data = await res.json();
    return data;
}

module.exports = {getSubreddits}