import React from 'react'; // 导入 React 库
import {
  Typography,
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container
} from '@mui/material'; // 导入 Material-UI 的各种组件
import { PhotoCamera } from '@mui/icons-material'; // 导入 Material-UI 的图标
import useStyles from './styles'; // 导入自定义样式

// 卡片的标识符数组
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const App = () => {
  // 获取自定义样式的钩子
  const classes = useStyles();

  return (
    <>
      {/* 规范化浏览器间的 CSS */}
      <CssBaseline />
      {/* 页面顶部的应用栏 */}
      <AppBar position='relative'>
        <Toolbar>
          {/* 应用栏中的相机图标 */}
          <PhotoCamera className={classes.icon} />
          {/* 应用栏中的应用标题 */}
          <Typography variant='h6'>
            Album
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* 内容的主容器 */}
        <div className={classes.container}>
          <Container maxWidth="sm">
            {/* 页面的主标题 */}
            <Typography variant='h2' align="center" color="textPrimary" gutterBottom>
              Album
            </Typography>
            {/* 页面的副标题/描述 */}
            <Typography variant='h5' align="center" color="textSecondary" paragraph>
            Hello,everyone,this is a Photo Album.Here i want to make sure i can done this project as soon as possible
            </Typography>
            {/* 操作按钮的容器 */}
            <div className={classes.button}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  {/* 查看照片的按钮 */}
                  <Button variant="contained" color="primary">
                  See my photos
                  </Button>
                </Grid>
                <Grid item>
                  {/* 次要操作的按钮 */}
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        {/* 卡片网格的容器 */}
        <Container className={classes.cardGrid} maxWidth='md'>
          <Grid container spacing={4}>
            {/* 遍历卡片数组以生成卡片组件 */}
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  {/* 卡片的媒体部分 */}
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="图片标题"
                  />
                  {/* 卡片的内容部分 */}
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5">
                      Heading
                    </Typography>
                    <Typography>
                    his is a media card.you can use section to describe the content 
                    </Typography>
                  </CardContent>
                  {/* 卡片的操作按钮 */}
                  <CardActions>
                    <Button size="small" color="primary">View</Button>
                    <Button size="small" color="primary">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
};

export default App; // 导出 App 组件作为默认导出
