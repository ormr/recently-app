import React, { FC, ReactElement, useEffect } from 'react';
import { Container, Box, Grid } from '@mui/material';
import { useAppDispatch, useAppSelector } from '@src/store/hooks';
import { Post } from '@src/components/Post';
import { decrease, increase } from '@src/features/count/countSlice';
import { getPosts } from '@src/features/posts/postSlice';

const MainPage: FC = (): ReactElement => {
  const { posts } = useAppSelector((state) => state.post);
  const { value: countValue } = useAppSelector((state) => state.count);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [])  

  return (
    <Container>
      <Box>
        <Box>Count: {countValue}</Box>
        <Box>
          <button onClick={() => dispatch(increase())}>+</button>
          <button onClick={() => dispatch(decrease())}>-</button>
        </Box>
      </Box>
      <Grid
        container
        mt={7}
        direction="column"
        alignItems="center"
      >
        {posts.map((item) => (
          <Grid item xs={12} mb={3}>
            <Post {...item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default MainPage;