import React from "react";

import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminHeader from '../AdminPanel/header';
import '../admin.css'; 

class UpdateCompany extends React.Component {

    constructor(props) {
        super(props);  
        this.onChangeID = this.onChangeID.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeWebsite = this.onChangeWebsite.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangecontact_no = this.onChangecontact_no.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeProvince = this.onChangeProvince.bind(this);
        this.onChangePostal = this.onChangePostal.bind(this);
        
     this.state = {
            company_name: " ",
            company_email: " ",
            website: " ",
            contact_no: " ",
            address:" ",
            province: " ",
            postal: " "
        }
        

    this.onSubmit = this.onSubmit.bind(this);    
}

onChangeID(e) {
    this.setState({
        id: e.target.id
    })
}

onChangeName(e) {
    this.setState({
        company_name: e.target.value
    })
}

onChangeWebsite(e) {
    this.setState({
        website: e.target.value
    })
}

onChangeEmail(e) {
    this.setState({
        company_email: e.target.value
    })
}

onChangecontact_no(e) {
    this.setState({
        contact_no: e.target.value
    })
}

onChangeProvince(e) {
    this.setState({
        province: e.target.value
    })
}

onChangePostal(e) {
    this.setState({
        postal: e.target.value
    })
}

onChangeAddress(e) {
    this.setState({
        address: e.target.value
    })
}


onSubmit(e) {
    e.preventDefault();
 //   console.log("hello minal" + e.value);
    const companyList = {

            company_name: this.state.company_name,
            company_email: this.state.company_email,
            website: this.state.website,
            contact_no: this.state.contact_no,
            province: this.state.province,
            postal: this.state.postal,
            address: this.state.address           

        }
        console.log(companyList);
        axios.put('http://localhost:5000/api/company/'+ this.props.match.params.id, companyList)
            .then(res => console.log(res.data));
    alert('Record UPDATED');
    window.location = "/admin/company";
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/company/' + this.props.match.params.id).then(response => {
            this.setState({
                company_name: response.data.company_name,
                company_email: response.data.company_email,
                website: response.data.website,
                contact_no: response.data.contact_no,
                province: response.data.province,
                postal: response.data.postal,
                address: response.data.address });
            console.log(response);
        });
    }

    render() {
      
        return (
            <div className="ucompany "> 
                <AdminHeader />
                <h3>COMPANY DATA</h3><br/>
                <form method="post" className="utable" >
                
                    <table >
                    <thead text-align="center">                       
                        
                        <tr>                            
                            <th>COMPANY NAME</th>
                            <th><input type="text" className="form-control" value={this.state.company_name} onChange={this.onChangeName}/>   <br /> </th>  
                                              </tr>
                        <tr>
                            <th>COMPANY EMAIL</th>
                            <th><input type="text" className="form-control" value={this.state.company_email} onChange={this.onChangeEmail}/>    <br /> </th>
                        </tr>
                        <tr>
                            <th>WEBSITE</th>
                            <th><input type="text" className="form-control" value={this.state.website} onChange={this.onChangeWebsite}/>    <br /> </th>
                        </tr>
                        <tr>
                            <th>CONTACT NUMBER</th>
                            <th><input type="text" className="form-control" value={this.state.contact_no} onChange={this.onChangecontact_no}/>    <br /> </th>
                        </tr>
                        <tr>
                            <th>ADDRESS</th> 
                            <th><input type="text" className="form-control" value={this.state.address} onChange={this.onChangeAddress}/>   <br /> </th>
                       </tr>
                        <tr>
                            <th>PROVINCE</th>   
                            <th><input type="text" className="form-control" value={this.state.province} onChange={this.onChangeProvince}/>    <br /> </th>
                        </tr>
                        <tr> 
                            <th>POSTAL</th> 
                            <th><input type="text" className="form-control" value={this.state.postal} onChange={this.onChangePostal}/>    <br /> </th>
                        </tr>
                        <tr >
                            <th className="utd">
                                <input type="submit"  value="UPDATE" onClick={this.onSubmit}/>
                                <a href={"/admin/company/"} >CANCEL</a>
                            </th>   
                            {/* {items}                   */}
                        </tr>
                    </thead>
                    
                    </table>
                    {/* {items} */}
                </form>                      
               
            </div>
        );
    } 
}


export default UpdateCompany;