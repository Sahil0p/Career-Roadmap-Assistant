import axios from "axios";

const TOP_STORIES_URL = "https://hacker-news.firebaseio.com/v0/topstories.json";
const ITEM_URL = (id) => `https://hacker-news.firebaseio.com/v0/item/${id}.json`;

export const getTopTechNews = async () => {
  try {
    const { data: ids } = await axios.get(TOP_STORIES_URL);
    const topFive = ids.slice(0, 5);

    const storyPromises = topFive.map(async (id) => {
      const { data } = await axios.get(ITEM_URL(id));
      return {
        title: data.title,
        url: data.url,
        score: data.score,
        time: data.time,
        by: data.by,
        type: data.type
      };
    });

    return Promise.all(storyPromises);
  } catch (error) {
    console.error("Error fetching HackerNews:", error);
    throw new Error("Failed to fetch HackerNews");
  }
};
