import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import BlogDetailsHero from './BlogDetailsHero';
import ContactForm from './ContactForm';

const BlogDetailsStyles = styled.div`
  .blog__box {
    max-width: 75.1rem;
    margin: 0 auto;
    margin-bottom: 10rem;
  }

  .blog__text {
    font-size: var(--normal-font-size);
    line-height: 2.8rem;
    margin-bottom: 9rem;
  }

  .blog__tag {
    font-size: var(--normal-font-size);
    font-family: 'Poppins BoldItalic', sans-serif;
  }

  .blog__comment {
    max-width: 75.1rem;
    margin: 0 auto;
  }

  .blog__comment-top {
    margin-bottom: 5rem;
  }

  .blog__comment-title {
    font-size: var(--big-font-size);
    font-family: 'Poppins Bold', sans-serif;
    margin-bottom: 2rem;
  }

  .blog__comment-subtitle {
    font-size: var(--normal-font-size);
  }
`;

function BlogDetails({ blogData }) {
  const { title } = useParams();

  return (
    <BlogDetailsStyles>
      {blogData
        .filter((list) => list.title === title)
        .map((list) => (
          <div className="full-card" key={list.id}>
            <BlogDetailsHero
              img={list.img}
              title={list.title}
              date={list.date}
              tag={list.tag}
            />
            <div className="container">
              <div className="blog__box">
                <p className="blog__text">{list.text}</p>
                <p className="blog__tag">Tags: {list.tag}</p>
              </div>
            </div>
          </div>
        ))}

      <div className="container">
        <div className="blog__comment">
          <div className="blog__comment-top">
            <p className="blog__comment-title">Leave A Comment</p>
            <p className="blog__comment-subtitle">
              Your email address will not be published. Required fields are
              marked *
            </p>
          </div>
          <ContactForm subheading={false} />
        </div>
      </div>
    </BlogDetailsStyles>
  );
}

export default BlogDetails;
