import React, { useEffect } from 'react';
import qs from 'qs';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CommentList from '../../components/comments/CommentList';
import { listComments } from '../../modules/comments';

const CommentListContainer = ({ location, match }) => {
  const dispatch = useDispatch();
  const { comments, error, loading, user } = useSelector(
    ({ comments, loading, user }) => ({
      comments: comments.comments,
      error: comments.error,
      loading: loading['comments/LIST_COMMNTS'],
      user: user.user,
    }),
  );
  useEffect(() => {
    const { tag, page, body, username } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    dispatch(listComments({ body, username }));
  }, [dispatch ]);

  return (
    <CommentList
      loading={loading}
      error={error}
      comments={comments}
      showWriteButton={user}
    />
  );
};

export default withRouter(CommentListContainer);