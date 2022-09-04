class MyHeader extends HTMLElement {
    connectedCalllback(){
        this.innerHTML = `
        <div class="header">
            <h1>Isra's page</h1>
            <p>A static web site to know more</p> 
        </div> 

        <div class="navbar">
            <a href="#">Power BI</a>
            <a href="#">Link</a>
            <a href="#">Link</a>
            <a href class="right">Link</a>
        </div>
        `
    }
}

class MyFooter extends HTMLElement {
    connectedCalllback(){
        this.innerHTML = `
        <div class="footer">
            <h2>Footer</h2>
        </div>
        `
    }
}

customElements.define('my-header', MyHeader)
customElements.define('my-footer', MyFooter)