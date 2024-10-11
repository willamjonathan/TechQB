type IComment = {
    commentId: number;
    commentContent: string;
    replies?: IComment[];
}
const comments: IComment[] = [
    {
        commentId: 1,
        commentContent: 'Hai',
        replies: [
            {
                commentId: 11,
                commentContent: 'Hai juga',
                replies: [
                    {
                        commentId: 111,
                        commentContent: 'Haai juga hai jugaa'
                    },
                    {
                        commentId: 112,
                        commentContent: 'Haai juga hai jugaa'
                    }
                ]
            },
            {
                commentId: 12,
                commentContent: 'Hai juga',
                replies: [
                    {
                        commentId: 121,
                        commentContent: 'Haai juga hai jugaa'
                    }
                ]
            }
        ]
    },
    {
        commentId: 2,
        commentContent: 'Halooo'
    }
]

// Number 5


// Recursive function to count comment IDs
function countCommentIds(comments: IComment[]): number {
    let count = 0;

    for (const i of comments){
        count ++;
    if (i.replies){
        count += countCommentIds(i.replies);
    }
    }
  
    return count;
  }
  
  const totalCommentIds = countCommentIds(comments);
  console.log(`Total number of comment IDs: ${totalCommentIds}`);
