import React from 'react'
import  Styles from "../assets/stylesheets/MainPost.module.css";

const MainPost = () => {
    return (
        <a target={"_blank"} href={"https://www.themoviedb.org/movie/398978-the-irishman"}>
            <div className={Styles.banner}>
            </div>
        </a>
    )
}

export default MainPost
