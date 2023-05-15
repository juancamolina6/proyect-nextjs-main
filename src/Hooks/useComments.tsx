import {useEffect, useState} from "react";
import {HttpClient} from "@app/utils/httpClient";
import {Comment} from "@app/models/Comment.model";

export default function useComments(id: string) {

    const [comments, setComments] = useState<Comment[]>([]);

    const getComments = async () => {
        const comments = await HttpClient.get(`posts/${id}/comments`);
        setComments(comments);
    }


    const createComments = async (comment: { name:string, email:string,  body: string}) => {
        await HttpClient.post(`posts/${id}/comments`, comment);
        getComments()
    }

    useEffect(() => {
        getComments()
    }, [])


    return {
        comments,
        createComments
    }
}