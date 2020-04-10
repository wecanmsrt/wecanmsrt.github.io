import React from "react";
import styled from 'styled-components'

const Container = styled.div`
width: $container-width;
margin: 0 auto;

@media screen and (max-width: $transition-width-large) {
  width: 80%;
}

@media screen and (max-width: $transition-width-mobile) {
  width: 90%;
}
`

const Title = styled.h1`
font-family: 'Roboto', sans-serif;
font-weight: 800;
font-size: 2.5rem;
letter-spacing: 0.5px;
`

const StyledHeader = styled.header`
display: flex;
flex-direction: column;
padding: 0;
width: 100%;

@media screen and (max-width: $transition-width-mobile) {
  display: flex;
  justify-content: space-between;
}

.header-highlight {
  display: flex;
  height: 35px;

  div {
    display: inline-block;
  }

  .blue-highlight {
    background-color: $dark-blue;
    width: $margin-width;
  }

  .orange-highlight {
    background-color: $ochre-yellow;
    width: 100% - $margin-width;
  }
}

.header-logo-nav {
  @media screen and (max-width: $transition-width-mobile) {
    display: flex;
  }

  .header-logo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1.5rem 0;

    @media screen and (max-width: $transition-width-mobile) {
      flex-wrap: wrap;
      margin: 1rem 0 0 0.5rem;
      justify-content: center;
      text-align: center;
    }

    h1 {
      color: $dark-blue;
      margin: 1rem 0;
      font-size: 2.5rem;
      font-family: 'San Francisco Bold';
      letter-spacing: 5.5px;

      @media screen and (max-width: $transition-width-largest) {
        font-size: 1.9rem;
      }

      @media screen and (max-width: $transition-width-large) {
        font-size: 1.3rem;
        letter-spacing: 2.5px;
      }

      @media screen and (max-width: $transition-width-mobile) {
        font-size: 1rem;
        margin: 0 0.5rem;
      }

      @media screen and (max-width: $transition-width-mobile-small) {
        font-size: 0.6rem;
      }
    }

    img {
      margin: 1rem 0;
      width: 100px;

      @media screen and (max-width: $transition-width-largest) {
        width: 80px;
      }

      @media screen and (max-width: $transition-width-large) {
        width: 60px;
      }

      @media screen and (max-width: $transition-width-mobile) {
        width: 40px;
        margin: 0.5rem;
      }

      @media screen and (max-width: $transition-width-mobile-small) {
        margin: 0.2rem;
      }
    }

    h2 {
      font-weight: normal;
      margin: 1rem 0;
      font-family: 'San Francisco Medium';
      letter-spacing: 3.8px;
      font-size: 1.5rem;

      @media screen and (max-width: $transition-width-largest) {
        font-size: 1.1rem;
      }

      @media screen and (max-width: $transition-width-large) {
        font-size: 0.9rem;
        letter-spacing: 2px;
      }

      @media screen and (max-width: $transition-width-mobile) {
        font-size: 0.7rem;
        margin: 0;
      }

      @media screen and (max-width: $transition-width-mobile-small) {
        font-size: 0.5rem;
        margin: 0;
      }
    }
  }

  .nav-links {
    width: 100%;
    height: 4rem;
    margin-top: 1rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    @media screen and (max-width: $transition-width-mobile) {
      padding: 0em;
      margin: 1rem 1rem 0 0;
    }

    a {
      &:hover,
      &:focus,
      &:active {
        color: $ochre-yellow;
      }
    }

    .dropdown {
      width: 100%;
      border-top: 1px solid black;
      border-bottom: 1px solid black;

      @media screen and (max-width: $transition-width-mobile) {
        border: none;
        z-index: 5;

        .menu-btn:checked ~ .menu {
          visibility: visible;
          opacity: 1;
        }
      }

      .hamburger {
        display: none;

        @media screen and (max-width: $transition-width-mobile) {
          display: flex;
          align-items: flex-end;
        }
      }

      .menu-btn {
        display: none;
      }

      .menu-btn:checked ~ .menu-icon {
        .navicon-mid {
          background: transparent;
        }

        .navicon-bottom {
          transform: translateY(-9px) rotate(-45deg);
        }

        .navicon-top {
          transform: translateY(9px) rotate(45deg);
        }
      }

      .menu-icon {
        cursor: pointer;
        flex-direction: column;
        padding: 0;

        .navicon-top,
        .navicon-mid,
        .navicon-bottom {
          background: black;
          height: 3px;
          width: 40px;
          display: block;
          margin: 3px 0;
          transition: all .2s ease-out;
        }

        .navicon-mid {
          transition: background .2s ease-out;
        }
      }

      .menu {
        width: 80%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;

        @media screen and (max-width: $transition-width-mobile) {
          line-height: 1.5em;
          width: 100%;
          background: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          visibility: hidden;
          opacity: 0;
          padding: 0;
          margin-top: 0.5em;
          border: 0.5px solid grey;
          transition: visibility 0.25s, opacity 0.25s ease-in;
        }

        a.nav-item {
          font-family: 'Roboto', sans-serif;
          font-weight: 400;
          text-align: center;
          text-decoration: none;
          padding: 1em 0.5em;
          font-size: 1.3rem;

          @media screen and (max-width: $transition-width-largest) {
            font-size: 1rem;
          }

          @media screen and (max-width: $transition-width-large) {
            font-size: 0.75rem;
          }

          @media screen and (max-width: $transition-width-mobile) {
            font-size: 1rem;
            padding: 0.5em 0;
            width: 100%;
          }
        }
      }
    }
  }
}
`

const AboutHome = styled.div`
width: 100% - $margin-width;

@media screen and (max-width: $transition-width-mobile) {
  width: 100%;
}

h1 {
  line-height: 3.5rem;
  margin-top: $card-margin;

  @media screen and (max-width: $transition-width-mobile) {
    font-size: 2rem;
    line-height: 2.2rem;
    margin-top: $card-margin-mobile;
  }
}


p {
  line-height: unset;
  font-size: 1.5rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  margin: 0;

  @media screen and (max-width: $transition-width-mobile) {
    font-size: 1.5rem;
    line-height: 2rem;
    margin-bottom: 1rem;
  }
}
`

const Cards = styled.div`
display: flex;
flex-wrap: wrap;
flex-shrink: 0;
justify-content: space-between;
margin: -($card-margin / 2);

@media screen and (max-width: $transition-width-large) {
  justify-content: flex-start;
}

@media screen and (max-width: $transition-width-mobile) {
  margin: -($card-margin-mobile / 2);
}

.card-col {
  flex: 1 1 0px;
  min-width: 300px;
  margin: $card-margin/2;

  @media screen and (max-width: $transition-width-large) {
    margin-top: 0;
    margin-bottom: 0;
  }

  @media screen and (max-width: $transition-width-mobile) {
    margin-left: $card-margin-mobile/2;
    margin-right: $card-margin-mobile/2;
  }

  @media screen and (max-width: $transition-width-mobile-small) {
    min-width: 250px;
  }

  .card {
    height: 250px;
    margin: $card-margin 0;
    background: $dark-blue;

    @media screen and (max-width: $transition-width-mobile) {
      margin: $card-margin-mobile 0;
    }

    @media screen and (max-width: $transition-width-large) {
      &:last-child {
        margin-bottom: 0;
      }
    }

    a {
      display: flex;
      color: white;
      align-items: center;
      justify-content: center;
      height: 100%;

      .card-icon {
        max-width: 40%;
        margin: 1rem 0 1rem 0rem;

        @media screen and (max-width: $transition-width-large) {
          max-width: 30%;
        }
      }

      .card-info {
        width: 50%;
        margin: 1rem 2rem 1rem 0;

        h3 {
          font-family: 'Roboto', sans-serif;
          font-weight: 800;
          font-size: 1.5rem;
          margin: 0 0 1rem;
        }

        p {
          font-size: 1.2rem;
          font-family: 'Roboto', sans-serif;
          font-weight: 300;
          margin: 0;
        }
      }
    }
  }
}
`

const SubTitle = styled.h2`
margin-top: 0;
font-family: 'Roboto', sans-serif;
font-weight: 500;
font-size: 2.5rem;
`

const HomePosts = styled.div`
background: $dark-blue;
margin: 4rem 0 0;

.home-posts-content {
  margin: 0 auto;
  padding: 4rem 0;
  width: $container-width;

  h2 a {
    color: white;

    &:hover,
    &:focus,
    &:active {
      color: $ochre-yellow;
    }
  }

  .post-previews {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    @media screen and (max-width: $transition-width-mobile) {
      flex-direction: column;
      align-items: center;
    }

    .post-preview {
      max-width: 30%;

      @media screen and (max-width: $transition-width-mobile) {
        max-width: 100%;
        margin-top: 3rem;
        display: flex;
        align-items: center;

        &:first-child {
          margin-top: 0;
        }
      }

      img {
        display: block;
        margin: 0 auto;
        height: 200px;

        @media screen and (max-width: $transition-width-large) {
          height: 150px;
        }
      }

      h3,
      p {
        color: white;
        font-size: 1.2rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 300;
        margin-bottom: 0.8rem;
      }

      p {
        margin: 0;
        font-size: 1rem;
      }
    }
  }

  .read-more {
    display: flex;
    justify-content: flex-end;

    @media screen and (max-width: $transition-width-mobile) {
      justify-content: center;
    }

    a {
      color: white;
      font-size: 1.2rem;
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
      display: inline-block;
      margin-top: 3rem;
      padding: 1rem;
      border: 1px solid white;

      &:hover,
      &:focus,
      &:active {
        color: $ochre-yellow;
      }
    }
  }
}
`

const SignUp = styled.div`
margin: 0 auto;
padding: 5rem 0;
width: $sign-up-width;
text-align: center;

@media screen and (max-width: $transition-width-mobile) {
  width: $sign-up-width-mobile;
}

h2 {
  color: $dark-blue;
  margin: 0;
}

p,
input[type=submit] {
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
}

p {
  margin-bottom: 2.5rem;
  color: black;
}

input[type=submit] {
  position: relative;
  top: -4px;
  color: #fff;
  background: $dark-blue;
  border-radius: 3px;
  padding: 12px 20px;

  @media screen and (max-width: $transition-width-mobile) {
    margin-top: 1rem;
  }
}

input[type=submit]:hover {
  background: $light-blue;
  color: black;
}

input[type=text] {
  padding: 5px 10px;
  width: 60%;
  margin-right: 12px;
  font-size: 1.5rem;

  @media screen and (max-width: $transition-width-mobile) {
    width: 90%;
  }
}
`

const Footer = styled.footer`
background: $light-grey;
padding: 2rem 0 6rem;

@media screen and (max-width: $transition-width-mobile) {
  padding: 2rem 0 4rem;
}

.footer-content {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  letter-spacing: 1px;

  @media screen and (max-width: $transition-width-mobile) {
    flex-direction: column;
    align-items: center;
  }

  .footer-left {
    width: 30%;

    img {
      max-width: 400px;

      @media screen and (max-width: $transition-width-large) {
        max-width: 250px;
      }
    }

    .footer-tag {
      margin: 0 4rem;
    }

    @media screen and (max-width: $transition-width-mobile) {
      display: none;
    }
  }

  .footer-links {
    width: 40%;
    display: flex;
    justify-content: space-evenly;

    @media screen and (max-width: $transition-width-mobile) {
      width: 100%;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }

    p {
      margin: 2rem 1rem;

      a {
        &:hover,
        &:focus,
        &:active {
          color: $dark-blue;
        }
      }

      &:last-child {
        margin: 0 1rem;
      }
    }
  }

  .footer-social-media {
    width: 30%;
    display: flex;
    justify-content: flex-end;

    @media screen and (max-width: $transition-width-mobile) {
      width: 100%;
      justify-content: center;
      align-items: center;
      margin-top: 1rem;
    }

    a {
      display: block;
      width: 30px;
      height: 30px;
      margin: 2rem 2rem 0 1rem;

      .social-media-icon {
        width: 30px;
        height: 30px;
      }
    }
  }
}
`

const Post = styled.div`
h2, p {
  font-size: 1.5rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  letter-spacing: 0.5px;

  @media screen and (max-width: $transition-width-mobile) {
    font-size: 1rem;
    line-height: 1.5rem;
  }
}

p {
  text-indent: 2em;
}

h2 {
  font-weight: 800;
  font-size: 2rem;
}

img {
  display: block;
  margin: 3rem auto;
  max-width: 30%;

  @media screen and (max-width: $transition-width-mobile) {
    margin: 0 auto;
    max-width: 60%;
  }
}

.post-tag {
  margin: 2rem;
  font-style: italic;

  &:before {
    content: "- "
  }
}
`

export default function Header() {
  return (
    <StyledHeader>
      <div className="header-highlight">
        <div className="blue-highlight"></div>
        <div className="orange-highlight"></div>
      </div>

      <div className="header-logo-nav">
        <div className="container">
          <a href="/">
            <div className="header-logo">
              <h1>BC COVID-19 MSRT</h1>
              <img src="/assets/images/elbows.png"></img>
              <h2>Medical Student Response Team</h2>
            </div>
          </a>
        </div>

        <div className="nav-links">
          <div className="dropdown">
            <input className="hamburger menu-btn" type="checkbox" id="menu-btn"/>
            <label className="hamburger menu-icon" htmlFor="menu-btn">
              <span className="navicon-top"></span>
              <span className="navicon-mid"></span>
              <span className="navicon-bottom"></span>
            </label>

            <div className="menu">
              <a className="nav-item highlight-link" href="/">HOME</a>
              <a className="nav-item highlight-link" href="/updates">NEWS & UPDATES</a>
              <a className="nav-item highlight-link" href="/projects">PROJECTS</a>
              <a className="nav-item highlight-link" href="/physicians">FOR PHYSICIANS</a>
              <a className="nav-item highlight-link" href="/volunteer">FOR MED STUDENTS</a>
              <a className="nav-item highlight-link" href="/everyone">FOR EVERYONE</a>
              <a className="nav-item highlight-link" href="/about">ABOUT</a>
              <a className="nav-item highlight-link" href="/contact">CONTACT US</a>
            </div>
          </div>
        </div>
      </div>
    </StyledHeader>
  )
}
