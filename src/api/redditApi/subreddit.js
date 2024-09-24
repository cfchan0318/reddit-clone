const getSubreddits = async (mode) => {
    const res = await fetch(`https://www.reddit.com/subreddits/${mode}.json?before=null&after=null&count=1`);
    const data = await res.json();
    return data;
}

module.exports = {getSubreddits}