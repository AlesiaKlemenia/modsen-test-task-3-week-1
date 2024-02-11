// import { IBookDetailedInfo } from "../../../consts/bookInfo";

import Layout from "../../Layout";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { BookInfoWrapper, ImageWrapper, StyledBackToHomeLink, StyledNav } from "./styled";
import bookStore from "../../../stores/BookStore";
import { useEffect } from "react";
import { IBookDetailInfo } from "../../../consts/bookInfo";
import { observer } from 'mobx-react-lite';
import noCoverImage from './../../../assets/img/no-image.png';

const Home = observer((props): IBookDetailInfo => {
    // не так
    const { bookInfo } = bookStore;

    return (
        <Layout>
            <StyledNav>
                <StyledBackToHomeLink href='/'>
                    <ArrowBackIosIcon />{'Back to Home'}
                </StyledBackToHomeLink>
            </StyledNav>
            <BookInfoWrapper>
                <ImageWrapper>
                    {props?.coverUrl ? (<img src={props?.coverUrl} width="100%" height="100%" />) : <img src={noCoverImage} width="100%" height="100%" />}
                </ImageWrapper>
            </BookInfoWrapper>
        </Layout>
    )
});

export default Home;