import React from 'react';
import CommentsList from './Comments';

const commentsData = [
    {
      name: "Prosenjit Ghosh",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Prosenjit Ghosh",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [
        {
          name: "Prosenjit Ghosh",
          text: "Lorem ipsum dolor sit amet, consectetur adip",
          replies: [],
        },
        {
          name: "Prosenjit Ghosh",
          text: "Lorem ipsum dolor sit amet, consectetur adip",
          replies: [
            {
              name: "Prosenjit Ghosh",
              text: "Lorem ipsum dolor sit amet, consectetur adip",
              replies: [
                {
                  name: "Prosenjit Ghosh",
                  text: "Lorem ipsum dolor sit amet, consectetur adip",
                  replies: [
                    {
                      name: "Prosenjit Ghosh",
                      text: "Lorem ipsum dolor sit amet, consectetur adip",
                      replies: [
                        {
                          name: "Prosenjit Ghosh",
                          text: "Lorem ipsum dolor sit amet, consectetur adip",
                          replies: [],
                        },
                      ],
                    },
                    {
                      name: "Prosenjit Ghosh",
                      text: "Lorem ipsum dolor sit amet, consectetur adip",
                      replies: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Prosenjit Ghosh",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Prosenjit Ghosh",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Prosenjit Ghosh",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Prosenjit Ghosh",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
  ];


// const commentsData = [
//         {
//           name: "Prosenjit Ghosh",
//           text: "Lorem ipsum dolor sit amet, consectetur adip",
//           replies: [],
//        }
//     ];
const CommentsContainer = () => {
    return (
        <div className="m-5 p-2">
          <h1 className="text-2xl font-bold">Comments: </h1>
          <CommentsList comments={commentsData} />
        </div>
      );
}

export default CommentsContainer;