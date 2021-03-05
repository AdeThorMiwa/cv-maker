import './style.css';

const TemplateBanner = () => {
    return (
        <div id="template-list-banner">
            <div className="container flex-item flex-item-center" id="contain-up-down">
                <div>
                    <h2 id="banner-text" >Select a template</h2>
                    <center>
                        <button id="select-btn">Select</button>
                    </center>
                </div>
            </div>
        </div>
    )
};

export default TemplateBanner;