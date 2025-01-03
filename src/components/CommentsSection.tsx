import { useState } from 'react';
import { CircleUserRound } from 'lucide-react';

const CommentsSection = () => {
  // Initialize dummy comments with names
  const [comments, setComments] = useState<{ name: string; text: string }[]>([
    { name: 'Ali', text: 'Very Informative' },
    { name: 'Steve', text: 'Interesting topic' },
    { name: 'Joseph', text: 'I really enjoyed reading' },
  ]);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, { name: 'You', text: newComment.trim() }]);
      setNewComment('');
    }
  };

  return (
    <div className='flex items-center justify-center h-screen bg-green-50'>
      <div className='flex flex-col gap-6 w-full max-w-lg p-6 bg-white rounded shadow-lg'>
        <h2 className='text-green-600 text-2xl font-semibold text-center'>Comments</h2>
        <div className='flex gap-2'>
          <input
            className='py-2 px-4 flex-grow text-[16px] outline-none border border-green-600 rounded focus:ring-2 focus:ring-green-500'
            type='text'
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder='Write a comment'
            aria-label='Write a comment'
          />
          <button
            className='bg-green-600 text-white text-[16px] py-2 px-4 rounded hover:bg-green-700 transition'
            onClick={handleAddComment}
            aria-label='Add Comment'
          >
            Add Comment
          </button>
        </div>
        <ul className='flex flex-col gap-4 bg-green-100 p-4 rounded'>
          {comments.map((comment, index) => (
            <li
              className='flex items-center gap-3 bg-white px-4 py-2 rounded shadow-sm'
              key={index}
            >
              <div className='bg-green-600 rounded-full text-white p-2'>
                <CircleUserRound className='w-10 h-10' />
              </div>
              <div className='leading-5'>
                <p className='font-semibold'>{comment.name}</p>
                <p className='text-[16px] text-gray-600'>{comment.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CommentsSection;