import React, {Component} from 'react';
import {Card, Input, Button,  Rate} from 'antd';
import {reqGetAllReview, reqAddReview} from "../../api";
import TextArea from 'antd/lib/input/TextArea';
import Header from '../../components/header';
const description = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
const { Meta } = Card

class Competition extends Component {
  state = {
    // value = 3,
    loading: false,
    competitions: [],
    searchType: 3,
    Name: '',
    descp:''
  };

  handleChange = (searchType) => {
    this.setState({ searchType });
  };

  //send ajax to get all competitions
  getCompetitions = async () => {
    //display loading
    this.setState({loading: true});
    //send ajax
    const result = await reqGetAllReview();
    console.log(result);
    // hide loading
    this.setState({loading: false});
    this.setState({competitions: result})
  };

  componentWillMount() {
    // this.initColumns();
  }

  componentDidMount() {
    this.getCompetitions();
    console.log(reqGetAllReview);
  }

  render() {
    const {competitions, loading,searchType, Name, descp, addUpdateModalShow, isUploadFileModalShow,searchPlaceholder} = this.state;

    const card = [];

    for (let i = 0; i < competitions.length; i++) {
      card.push(
      <Card 
            hoverable
            style={{ width: 1000, margin:20, marginLeft:100 }}
          >
            <Rate disabled defaultValue={competitions[i].star} />
            <Meta 
            title = {competitions[i].name} 
            description={competitions[i].description}  />
  
      </Card>);
      console.log('hi');
    }

    return (

      <div className="review">
          <Header/>
        <Card>
        <h2 
        style={{margin: 30, marginLeft:100, width:1000,  backgroundColor:'#564555', color:'white', padding:20}}
        >Reviews</h2>
        <div style={{width: 1000}}>
          <div style={{width: 250}}>

            {card}
          </div>
        </div>
         
        <Card
        style={{ width: 1000, margin:20, marginLeft:100, marginTop: 100, backgroundColor:'#CEBFCC' }}
        >
            <h3>Add Review</h3>
            <span>
                <Rate tooltips={description} onChange={this.handleChange} name="star" value={searchType} />
                {searchType ? <span className="ant-rate-text">{description[searchType - 1]}</span> : ''}
            </span>
            <Input 
                type="text" 
                placeholder="John Smith" 
                name="name" 
                value={this.state.Name} 
                onChange={event => {
                    this.setState({Name: event.target.value});
                }}
            />
            <TextArea 
            style={{marginTop:10}}
                placeholder="Enter your text here..." 
                name="desc" value={this.state.descp} 
                onChange={event => {
                    this.setState({descp: event.target.value});
                }}
            />
            <Button 
                style ={{ marginTop: 20}}
                type="primary" 
                onClick={async () => {
                this.competition = {"star": searchType, "name": this.state.Name, "description": this.state.descp}; //store competition in this, when we update we can get it
                console.log(this.competition);
                await reqAddReview(this.competition);
                }}
            >
            submit
            </Button>
        </Card>
        </Card>
      </div>
    );
  }
}

export default Competition;
