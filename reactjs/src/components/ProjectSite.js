import React from 'react'

class ProjectSite extends React.Component {

    state = {
        project_site_id: this.props.data.project_site_id || null,
        address: this.props.data.address || null,
        city: this.props.data.city || null,
        state_id: this.props.data.state_id || null,
        zipcode: this.props.data.zipcode || null,
        access_code: this.props.data.access_code || null,
        map_link: this.props.data.map_link || null,
    }

    handleChange = (e) => {
        this.setState(
            {
                [e.target.name]: e.target.name
            }
        );
    }

    handleSubmit = () => {
        console.log("state: ", this.state);
    }

    render() { 

        return (
            <main>
                <section className="add-new">
                    <h6>{this.props.title}: {this.state.project_site_id === null ? "Add New" : "Update Record"}</h6>
                    <ul>
                        <li>
                            <p className="heading">Address: </p>
                        </li>
                        <li>
                            <input type="text" name="address" value={this.state.address === null ? this.state.value : this.state.address} onChange={this.handleChange} />
                        </li> 
                    </ul>
                    <ul>
                        <li>
                            <p className="heading">City: </p>
                        </li>
                        <li>
                            <input type="text" name="city" value={this.state.city === null ? this.state.value : this.state.city} onChange={this.handleChange} />
                        </li> 
                    </ul>
                    <ul>
                        <li>
                            <p className="heading">State: </p>
                        </li>
                        <li>
                            <select name="state_id" value={this.state.state_id === null ? this.state.value : this.state.state_id} onChange={this.handleChange} >
                                { 
                                    this.state.state_id === null ? <option defaultValue value="0">select a state</option> : null
                                }
                                {
                                    this.props.states.map(state =>
                                        <option value={state.state_id} key={state.state_id}>{state.abbreviation} ({state.name})</option>
                                    )
                                }
                            </select>
                        </li> 
                    </ul>
                    <ul>
                        <li>
                            <p className="heading">Zipcode: </p>
                        </li>
                        <li>
                            <input type="text" name="zipcode" value={this.state.zipcode === null ? this.state.value : this.state.zipcode} onChange={this.handleChange} />
                        </li> 
                    </ul>
                    <ul>
                        <li>
                            <p className="heading">Access Code: </p>
                        </li>
                        <li>
                            <input type="text" name="access_code" className="small" value={this.state.access_code === null ? this.state.value : this.state.access_code} onChange={this.handleChange} />
                        </li> 
                    </ul>
                    <ul>
                        <li>
                            <p className="heading">Map Link: </p>
                        </li>
                        <li>
                            <textarea name="map_link" rows="5" className="textarea-s" placeholder="tip: copy and paste from google maps" value={this.state.map_link === null ? this.state.value : this.state.map_link} onChange={this.handleChange} />
                        </li> 
                    </ul>
                    <ul>
                        <li>
                            <input type="button" className="buttons" value="Cancel" />
                        </li>
                        <li className="button-end">
                        <input type="submit" className="buttons" value={this.state.project_site_id === null ? "Add" : "Update"} onClick={this.handleSubmit} />
                        </li>
                    </ul>
                </section>
            </main>
        );
    }
}

export default ProjectSite