import React,{useRef} from "react";
import axios from "axios";

class Event extends React.Component {
    constructor(props){
        super(props);
        this.save=this.Save.bind(this);
        this.infoData={};
        this.state={};
    }

    Save(event){
        this.infoData[event.target.name]=event.target.value;
        this.setState(this.infoData);
    }

    tes(){
        
    }

    Kirim(){
        alert(JSON.stringify(this.state));
    }

    render(){
        return (
            <React.Fragment>
                 <div className="page-wrapper">
        {/* Page Content*/}
        <div className="page-content">
        <div className="container-fluid">
            {/* Page-Title */}
            <div className="row">
            <div className="col-sm-12">
                <div className="page-title-box">
                <div className="float-right">
                    <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="javascript:void(0);">Dashboard</a></li>
                    <li className="breadcrumb-item"><a href="javascript:void(0);">User</a></li>
                    <li className="breadcrumb-item active">Profile</li>
                    </ol>{/*end breadcrumb*/}
                </div>{/*end /div*/}
                <h4 className="page-title">Edit Profile</h4>
                </div>{/*end page-title-box*/}
            </div>{/*end col*/}
            </div>{/*end row*/}
            {/* end page title end breadcrumb */}
            <div className="row">
            <div className="col-12">
                <div className="row">
                <div className="col-lg-12" style={{margin: 0, padding: '8px'}}>
                    <div className="card">
                    <div className="card-body col-lg-8 mx-auto">
                        <h3 className="mb-4" align="center">Edit Profile</h3>
                        <form method="post" className="card-box">
                        <div className="form-group row">
                            <div className="col-md-12">
                            <input type="file" name="profileFile" id="input-file-now-custom-1" className="dropify" data-default-file="../assets/images/no_picture.jpg" onChange={this.save} />
                            </div>
                        </div>
                        
                        <div className="form-group row">
                            <div className="col-md-12">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                <span className="input-group-text"><i className="far fa-user" /></span>
                                </div>
                                <input type="text" id="example-input1-group1" name="name" className="form-control" placeholder="Full Name" onChange={this.save} />
                            </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-md-12">
                            <div className="input-group">
                                <div className="input-group-prepend">
                                <span className="input-group-text"><i className="far fa-envelope" /></span>
                                </div>
                                <input type="email" id="example-input2-group2" name="email" className="form-control" placeholder="Email" onChange={this.save} />
                            </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-md-12">
                            <select className="form-control" name="Country" onChange={this.save}>
                                <option value>Country</option>
                                <option value="Indonesia">Indonesia</option>
                                <option value="Singapore">Singapore</option>
                                <option value="Malaysia">Malaysia</option>
                                <option value="Thailand">Thailand</option>
                            </select>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-md-12">
                            <button className="btn btn-primary btn-sm px-4 mt-3 float-right mb-0">Save Changes</button>
                            </div>
                        </div>
                        </form>
                <button onClick={()=>this.Kirim()}>
                tes
                </button>
                 
                    </div>                                            
                    </div>
                </div> {/*end col*/}                                          
                </div>{/*end row*/}                            
            </div>{/*end col*/}
            </div>{/*end row*/}
        </div>{/* container */}
        </div>
        {/* end page content */}
        </div>
            </React.Fragment>
        );
    }
}

export default Event;