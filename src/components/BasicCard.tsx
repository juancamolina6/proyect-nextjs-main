'use client';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Post} from "@app/models/Post.model";
import usePosts from "@app/Hooks/usePosts";

export default function BasicCard({ post } :{ post:Post }) {
    const { LinkToComentsPost } = usePosts();
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {post?.title}
                </Typography>
                <Typography variant="body2">
                    { post?.body }
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={()=> LinkToComentsPost(post?.id)} size="small">Ver</Button>
            </CardActions>
        </Card>
    );
}