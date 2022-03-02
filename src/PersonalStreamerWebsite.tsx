import React from 'react';
import { Outlet, Link } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';
import NavBar from './components/navbar/NavBar';
import './psw.css';

function PersonalStreamerWebsite() {
  return (
    <div className="psw-root-container">
      <NavBar />
      <div className="psw-page-container">
        {/* <Outlet /> */}
        {/*<div>in development...</div>
        <div>you don't need to maintain a blog for a side hobby...</div>
        <div>for this website just have it link to other websites, such as socials for the bubblemask streamer or donation</div>
        <div>for donation, maybe you can try experimenting with it though... how do transactions work through card?</div>
        <div>a personal website would replace linktree entirely lmao</div>
        <div>it's not here?</div>
        <Link to="/">home</Link>
        <b>instead of using css for the website, try using scss or tailwind</b>
        <div>start with scss first ig?</div>
        <div>ok, time to actually do homework now</div>
        <div>after finishing the body of the website, try implementing some animations</div>
        <div>have home direct to the welcome screen, about direct to the lore, and contacts direct to the socials</div>
        <div>the website should be one page for now... until you decide to add a shop page</div>
        <div>maybe, think about starting an nft colleciton with art generation</div>
        <div><b>take a look at vaxxedogos from joma, which separates out pages with a nice pattern</b></div>*/}
        <h1 className="psw-h1">hi! 👋 i'm bubblemask, <br /> a streamer who chats about daily life on <a className="teal-to-purple-gradient-text" href="https://reality.app/profile/919f0793?adj_t=8ogcewh_z9yhix5">reality.app</a>
        </h1>
        <div className="psw-comment">
          🗓 Schedule: 7:30 pm - 8:00 pm PST<br />
          ⏳ Age: 20 googolplex <br />
          📏 Height: 5’ 9” <br />
          🐺 Species: Werewolf <br />
          ⚪️ Fan Emoji: 😶‍🌫️ <br />
        </div>
        <br />
        <SocialIcon url="https://twitter.com/bublmask" />
      </div>
      {/*<div className="psw-page-container">
        <div>is there something here?</div>
      </div>*/}
    </div>
  );
}

export default PersonalStreamerWebsite;

/*
Perhaps time flies like an arrow and fruit flies like a banana, but did you know that I was named after everything named before me and that this sentence is false?
*/
