'use client';
import BasicCard from "@app/components/BasicCard";
import usePosts from "@app/Hooks/usePosts";
import {Grid} from "@mui/material";
import {Container} from "@mui/system";
import Typography from "@mui/material/Typography";

export default function Home() {

    const {posts} = usePosts()

    if (!posts) return <div>No hay Post...</div>

    return (
        <Container id={"main"} style={{height: '100vh', padding: '1.25rem'}} maxWidth="lg">
            <Typography variant="h4" component="h2">
                Applicación de Posts
            </Typography>;
            <Grid container style={{width: '100%',}}  rowSpacing={{xs: 1, sm: 2, md: 3}} columnSpacing={{xs: 1, sm: 2, md: 3}}>
                {
                    posts && posts.map((post) => (
                        <Grid item key={post?.id}  style={{ padding: '1.25rem'}} xs={12} sm={6} md={4}>
                            <BasicCard key={post.id} post={post}/>
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    )
}
