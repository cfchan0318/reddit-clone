export const getPostList = async(subbreddit, mode) => {
    const res = await fetch(`https://www.reddit.com/r/${subbreddit}/${mode}.json`);
    const data = await res.json();
    return data.data;
}