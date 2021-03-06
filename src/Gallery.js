import React, {Component} from 'react';

class Gallery extends Component {
    render() {
        return (
            <div>
                {
                    this.props.items.map((item, index) => {
                        let {title, imageLinks, infoLink} = item.volumeInfo;
                        return (
                            <div key={index} className="book-img">
                                <img
                                    src={imageLinks !== undefined ? imageLinks.thumbnail : ''}
                                    alt="book image"
                                    className="book-img"
                                />
                                <div className="book-test">
                                    Title Is: {title}
                                </div>
                            </div>
                        )
                    })
                }</div>

        )
    }
}

export default Gallery;
