import { Component } from "react";

class Subject extends Component{
    render() {
        return (
            <header>
                <h1>{this.props.title}</h1>
                {this.props.sub}
            </header>
        );
    }
}

class TOC extends Component{
    render() {
        return (
            <nav>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                </ul>
            </nav>
        );
    }
}

class Content extends Component{
    render() {
        return (
            <article>
                <h2>{this.props.title}</h2>
                {this.props.desc}
            </article>
        );
    }
}

class App extends Component{
    render() {
        return (
            <div>
                <Subject title="WEB" sub="world wide web!"></Subject>
                <Subject title="React" sub="For UI"></Subject>
                <TOC></TOC>
                <Content title="HTML" desc="HTML is HyperText Markup Language."></Content>
            </div>
        );
    }
}

export default App;