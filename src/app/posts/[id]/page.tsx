'use client';
import UseComments from "@app/Hooks/useComments";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {Grid} from "@mui/material";
import {useRouter} from "next/navigation";
import Button from "@mui/material/Button";
import ModalCreateComments from "@app/components/modal.create.comments";

export default function page({params}: { params: { id: string } }) {
    const router = useRouter();
    const {comments, createComments} = UseComments(params.id);
    return (
        <div>
            <Button variant={"ghost"} onClick={() => router.back()}> Atras </Button>
            <h1>Comentarios del Post: {params.id}</h1>
            <ModalCreateComments createComments={createComments} />

            <Grid  container style={{width: '100%',}}  rowSpacing={{xs: 1, sm: 2, md: 3}}
                  columnSpacing={{xs: 1, sm: 2, md: 3}}>
                {
                    comments && comments?.map((comment) => (
                        <Grid item key={comment?.id} style={{padding: '1.25rem'}} xs={12} sm={6} md={4}>
                            <Card   sx={{minWidth: 275}}>
                                <CardContent>
                                    <Typography sx={{fontSize: 14}} color="text.secondary" gutterBottom>
                                        {comment?.name} - {comment?.email}
                                    </Typography>
                                    <Typography variant="body2">
                                        {comment?.body}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}