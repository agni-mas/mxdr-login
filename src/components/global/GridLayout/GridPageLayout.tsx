import React, { FC } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TopGridBox from './TopGridBox';
import Box from '@mui/material/Box';

interface GridBoxInfo {
  num: number
  type: string
  isSelected: boolean
}

interface GridPageLayoutProps extends Array<GridBoxInfo> { }

const Item = styled(Paper)(({ theme }) => ({
  borderRadius: 0,
  textAlign: 'left',
  border: '1px solid grey',
  backgroundColor: 'black',
}));

const GridPageLayout: FC<GridPageLayoutProps> = (info) => {
  const newInfoArray = Object.values(info)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        {newInfoArray.map((i, index) => (
          <Grid item xs key={index}>
            <Item>
              <TopGridBox num={i.num} type={i.type} isSelected={i.isSelected} />
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
};

export default GridPageLayout;