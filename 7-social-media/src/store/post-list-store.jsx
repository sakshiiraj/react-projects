import { createContext, useReducer } from 'react';

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === 'DELETE_ITEM') {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === 'ADD_POST') {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    console.log(`${userId} ${postTitle} ${postBody} ${reactions} ${tags}`);

    dispatchPostList({
      type: 'ADD_POST',
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: 'DELETE_ITEM',
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: '1',
    title: 'Going to Mumbai',
    body: 'Hi friends, I am going to mumbai for my vactaion. hope to enjoy a lot.Peace out',
    reactions: 2,
    userId: 'user-9',
    tags: ['#vacation', '#Mumbai', '#Enjoying'],
  },
  {
    id: '2',
    title: 'Pass ho bhai',
    body: '4 saal k emasti k baad bhi ho gye hain pass. Hard to believe.',
    reactions: 15,
    userId: 'user-12',
    tags: ['#Graduating', '#Unbelievable'],
  },
];

export default PostListProvider;
