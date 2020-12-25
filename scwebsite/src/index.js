import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './main.css';
import './bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class Baseh extends React.Component {
    render() {
      return (
        <head>
            <title>Sanskrit Club | IITR</title>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="keywords" content="sanskrit club IIT Roorkee iitr subhashitam samskritam shaastra setu"/>
            <meta name="description" content="Home page of Sanskrit Club - IITR"/>
        </head>
      );
    }
  }

class Navbar extends React.Component{
    render(){
        return(
                <section id="two" class="wrapper style3">
                    <div class="inner">
                        <div id="flexgrid">
                            <div>
                                <header>
                                    <h3><a href="events.html">Home<br/>
                                            गृहं
                                    </a></h3>
                                </header>
                            </div>
                            <div>
                                <header>
                                    <h3><a href="events.html">Events<br/>
                                                कार्यक्रमाः
                                            </a></h3>
                                </header>
                            </div>
                            <div>
                                <header>
                                    <h3><a href="learn.html">Learning Sanskrit<br/>
                                            संस्कृताभ्यासः</a></h3>
                                </header>
                            </div>
                        </div>

                        <div id="flexgrid">
                            <div>
                                <header>
                                    <h3><a href="subhashitam.html">Subhashitam Samskritam<br/>
                                            सुभाषितं-संस्कृतं</a></h3>
                                </header>
                            </div>
                            <div>
                                <header>
                                    <h3><a href="shaastra.html">Shaastra Setu<br/>
                                                शास्त्र-सेतुः
                                        </a></h3>
                                </header>
                            </div>
                            <div>
                                <header>
                                    <h3><a href="research.html">Resources<br/>
                                        साधनसम्पत्तयः</a></h3>
                                </header>
                            </div>
                        </div>
                    </div>
                </section>
        )
    }
}

class Basef extends React.Component{
    render(){
        return(
                <footer id="footer" class="wrapper">
                    <div class="contact-section">
                        <div style={{textAlign: 'center', margin: '1vw 0 1vw 0'}}>
                            <a href="https://info.flagcounter.com/1Gq2"><img src="https://s05.flagcounter.com/count2/1Gq2/bg_FFFFFF/txt_000000/border_CCCCCC/columns_4/maxflags_20/viewers_Visitors+since+21Dec2020/labels_0/pageviews_1/flags_0/percent_0/" alt="Free counters!" border="0"/></a>
                        </div>

                        <div class="inner-width">
                            <h1>Get in touch with us</h1>
                            <p><img class='email2' src="https://dl.dropbox.com/s/hg8v0xsxmud2rde/email.png?dl=0" alt="#"/> sanskritclub@iitr.ac.in</p>
                            <table style={{borderSpacing: '0'}}>
                                <tr>
                                    <td>
                                        <a href='https://www.facebook.com/sanskritiitr/' target="_blank"><img class='email' src="https://dl.dropbox.com/s/4379g2tpwft2hwh/fblogo.png?dl=0" alt="#"/></a>
                                    </td>
                                    <td>
                                        <a href="https://twitter.com/Sanskrit_Club?s=08" target="_blank"><img class='email' src="https://dl.dropbox.com/s/exflxj0ha5xusfw/twitter.png?dl=0" alt="#"/></a>
                                    </td>
                                    <td>
                                        <a href="https://www.instagram.com/iit.roorkee/" target="_blank"><img class='email' src="https://dl.dropbox.com/s/cf54qq1hxbf00fv/insta.png?dl=0" alt="#"/></a>
                                    </td>
                                    <td>
                                        <a href="https://www.youtube.com/user/sanskritiitr" target="_blank"><img class='email' src="https://dl.dropbox.com/s/0b6m69mq7rqnn1m/youtube.png?dl=0" alt="#"/></a>
                                    </td>
                                </tr>
                            </table>
                        </div><br/>
                        
                        <p>
                            <a href="./AboutUs.html#comments" target="_blank">Contact Us</a> |
                            <a href="./AboutUs.html#faq" target="_blank"> About Us</a>
                        </p>
                    </div>


                    <div class="copyright">&copy; DESIGN: Sanskrit Club.</div>
                </footer>
        )
    }
}

ReactDOM.render(<Navbar />, document.getElementById('navbar'));
ReactDOM.render(<Basef />, document.getElementById('basef'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
