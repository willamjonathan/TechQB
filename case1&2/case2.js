var comments = [
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
];
// Number 5
// Recursive function to count comment IDs
function countCommentIds(comments) {
    var count = 0;
    for (var _i = 0, comments_1 = comments; _i < comments_1.length; _i++) {
        var i = comments_1[_i];
        count++;
        if (i.replies) {
            count += countCommentIds(i.replies);
        }
    }
    return count;
}
var totalCommentIds = countCommentIds(comments);
console.log("Total number of comment IDs: ".concat(totalCommentIds));
