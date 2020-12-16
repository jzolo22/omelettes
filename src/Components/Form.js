import React from 'react'

class Form extends React.Component {

    state = {
        title: "",
        href: "",
        ingredients: "",
        thumbnail: ""
    }

    typing = (e) => {
        this.setState({[e.target.name]: e.target.value })
    }


    submitHandler = (e) => {
        e.preventDefault()
        this.props.newOmelette(this.state)
        this.setState({
            title: "",
            href: "",
            ingredients: "",
            thumbnail: ""
        })
    }

    localSearchHandler = (e) => {
        this.props.handleSearch(e.target.value)
    }

    render () {
        return (
            <>
            <form onSubmit={this.submitHandler}>
                <label>Add An Omelette</label><br></br>
                <input type="text" name="title" placeholder="title" value={this.state.title} onChange={this.typing} />
                <input type="text" name="href" placeholder="href" value={this.state.href} onChange={this.typing} />
                <input type="text" name="ingredients" placeholder="ingredients" value={this.state.ingredients} onChange={this.typing} />
                <input type="text" name="thumbnail" placeholder="thumbnail" value={this.state.thumbnail} onChange={this.typing} />
                <button>submit</button>
            </form>
            <form>
                <input type="text" value={this.props.value} placeholder="search" onChange={this.localSearchHandler}/>
            </form>
            </>
        )
    }
    
}

export default Form