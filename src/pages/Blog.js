import React, { useState } from 'react';
import styled from 'styled-components';
import ReactPaginate from 'react-paginate';
import heroBlogImg from '../assets/images/hero-blog.svg';
import Card from '../components/Card';
import HeroSection from '../components/HeroSection';
import blogData from '../assets/data/blog';
// import Pagination from '../components/Pagination';

const BlogStyles = styled.div`
  .blog__content {
    padding: 2rem 0 10rem;
  }

  .paginationBtns {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  .paginationBtns a,
  /* .paginationLink, */ 
  .prevBtn,
  .nextBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
    border: 1px solid #e0e0e0;
    box-sizing: border-box;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background: var(--btn-gradient);
      color: var(--white);
      border: none;
    }
  }

  .paginationBtns a {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
  }

  .prevBtn a,
  .nextBtn a {
    width: 10rem;
    height: 6rem;
    border-radius: 100px;
  }

  .paginationActive a {
    background: var(--btn-gradient);
    color: var(--white);
    border: none;
    border-radius: 50%;
  }
`;

export default function Blog() {
  const [blogs, setBlogs] = useState(blogData.slice(0, 10));
  const [pageNumer, setPageNumer] = useState(0);

  const blogsPerPage = 3;
  const pagesVisited = pageNumer * blogsPerPage;

  const displayBlogs = blogs
    .slice(pagesVisited, pagesVisited + blogsPerPage)
    .map((blog) => (
      <Card
        id={blog.id}
        tag={blog.tag}
        date={blog.date}
        img={blog.img}
        title={blog.title}
        text={blog.text}
      />
    ));

  const pageCount = Math.ceil(blogs.length / blogsPerPage);

  const changePage = ({ selected }) => {
    setPageNumer(selected);
  };

  return (
    <BlogStyles>
      <HeroSection
        heroImg={heroBlogImg}
        heroTitle="Stay updated,
        Never miss a post."
        heroText="Get to know the latest stuff about our services
        via our blog post."
      />
      <div className="blog__content">
        {displayBlogs}
        <div className="container">
          <ReactPaginate
            pageCount={pageCount}
            previousLabel="Prev"
            nextLabel="Next"
            onPageChange={changePage}
            containerClassName="paginationBtns"
            previousLinkClassName="prevBtn paginationLink"
            nextLinkClassName="nextBtn paginationLink"
            disabledClassName="paginationDisabled paginationLink"
            activeClassName="paginationActive"
          />
        </div>
        {/* <Pagination /> */}
      </div>
    </BlogStyles>
  );
}
