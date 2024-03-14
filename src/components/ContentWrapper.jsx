import React from "react";
import Topbar from "./Topbar";
import ContentRowTop from "./ContentRowTop";
import Footer from "./Footer";
import Movies from "./Movies"

function ContentWrapper () {
    return(
     <div id="content-wrapper" className="d-flex flex-column">
        
        <div class="container-fluid">
            <Topbar />
            <ContentRowTop />
            <Movies/>
        </div>
        <Footer/>
</div>
);
}

export default ContentWrapper