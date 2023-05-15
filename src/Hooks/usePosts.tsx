import {useEffect, useState} from "react";
import {Post} from "@app/models/Post.model";
import {HttpClient} from "@app/utils/httpClient";

import { useRouter } from 'next/navigation';


export default function usePosts() {
    const router = useRouter();
    const [posts, setPost] = useState<Post[]>([]);

    const getPosts = async () => {
        try {
            const posts = await HttpClient.get('users/1092/posts');
            setPost(posts);
        } catch (error) {
            console.error(error);
        }
    }

    const LinkToComentsPost = (id: number) => {
        router.push(  `/posts/${id}`)
    }

    useEffect(() => {
        getPosts()
    }, [])

    return {
        posts,
        LinkToComentsPost
    };
}