export const STORY_BOOK_BASE_URL = 'http://localhost:9009';
export const getStoryBookComponentUrl = (storyId, theme) => `${STORY_BOOK_BASE_URL}/iframe.html?id=${storyId}&theme=${theme}`;
