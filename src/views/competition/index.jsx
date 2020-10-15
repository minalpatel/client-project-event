import React, {Component} from 'react';
import Header from '../../components/header';
import {Card, Select, Input, Button, Icon, Table, Modal, Divider, message} from 'antd';
import {DeleteOutlined, EditOutlined} from '@ant-design/icons';
import LinkButton from '../../components/link-button';
import {reqGetAllCompetitions, reqAddCompetition, reqUpdateCompetition, reqDeleteCompetition} from "../../api";
import { reqSearchbydate, reqSearchbyLocation, reqSearchbyTitle } from '../../api';
import AddUpdateForm from "./addUpdateForm";

const { Meta } = Card
const Option = Select.Option;

class Competition extends Component {
  state = {
    loading: false,
    competitions: [],
    eventid:'',
    addUpdateModalShow: 0, //0:hide; 1:Add, 2:Update
    isUploadFileModalShow: false,
    searchType: '',
    searchName: '',
    searchPlaceholder:'Search'
  };

  //initialize table columns
  initColumns = () => {
    this.columns = [
      {
        title: 'Title', 
        dataIndex: 'event_title', // table column name
        key: 'event_title',
      },
      {
        title: 'logo link',
        dataIndex: 'event_logo', // table column name
        key: 'event_logo',
      },
      {
        title: 'desciption',
        dataIndex: 'event_desc', // table column name
        key: 'event_desc',
      },
      {
        title: 'comapany name',
        dataIndex: 'company_name', // table column name
        key: 'company_name',
      },
      {
        title: 'time',
        dataIndex: 'event_time', // table column name
        key: 'event_time',
      },
      {
        title: 'loccation',
        dataIndex: 'event_location', // table column name
        key: 'event_location',
      },
      {
        title: 'Location',
        dataIndex: 'Location', // table column name
        key: 'Location',
      },
      {
        title: 'date',
        dataIndex: 'event_date', // table column name
        key: 'event_date',
      },
      {
        title: 'Action',
        key: 'action',
        width: 400,
        render: (competition) =>
          <span>
            <LinkButton onClick={() => {
              this.competition = competition; //store competition in this, when we update we can get it
              console.log(competition);
              this.setState({addUpdateModalShow: 2});
            }}>Update</LinkButton>
            <Divider type="vertical"/>
            <LinkButton onClick={() => {
              this.competition = competition;
              this.setState({isUploadFileModalShow: true})
            }}>Upload</LinkButton>
          </span>
      },
    ];
  };

  //search btn click
  onClickSearchCompetition = async () => {
    const {searchName, searchType} = this.state;
    console.log(searchName);
    console.log(searchType);
    let result = [];
    if(searchType === 'Event_title'){
       result = await reqSearchbyTitle({searchName});
    }
    if(searchType === 'Event_Date'){
      console.log('event_date pushed');
       result = await reqSearchbydate({searchName});
    }
    if(searchType === 'Event_location'){
       result = await reqSearchbyLocation({searchName});
    }
   // const result = await reqSearchCompetition({searchName, searchType});
    this.setState({competitions: result})
  };

  //cancel for add and update Modal btn click
  onCancelUpdateModal = () => {
    //this.form.resetFields(); // Reset the specified fields' value(to initialValue) and status.
    this.setState({addUpdateModalShow: 0})
  };

  //ok for add and update Modal btn click
  onCreateUpdateModal = () => {
    this.form.validateFields(async (err, values) => {
        if (!err) {
          
          const _id = this.eventid;
          let {event_title, event_logo, event_desc, company_name, event_time, event_location, total_seat, event_date} = values;
          const competition = {event_title, event_logo, event_desc, company_name, event_time, event_location, event_date, total_seat };
          const updatecompetition = {_id, event_title, event_logo, event_desc, company_name, event_time, event_location, event_date, total_seat };
                    
          if (this.state.addUpdateModalShow === 1) {//add
            console.log('inside:' +competition);
            //send ajax
            await reqAddCompetition(competition);
            console.log(competition);
          } 
          else if (this.state.addUpdateModalShow === 2) {//update
            console.log('update in progress');
            console.log(updatecompetition);
            await reqUpdateCompetition(updatecompetition);
            this.competition = {};
          }

          this.setState({addUpdateModalShow: 0});
          //await this.getCompetitions();
          const action = this.state.addUpdateModalShow === 1 ? 'Add' : 'Update'
          message.success(action + 'successful')

        }
      }
    )

  };

  //cancel for upload file Modal btn click
  onCancelUploadFileModal = () => {
    this.setState({isUploadFileModalShow: false})
  };

  //ok for upload file Modal btn click
  onCreateUploadFileModal = () => {

  };

  //send ajax to get all competitions
  getCompetitions = async () => {
    //display loading
    this.setState({loading: true});
    //send ajax
    const result = await reqGetAllCompetitions();
    console.log(result);
    // hide loading
    this.setState({loading: false});
    this.setState({competitions: result})
  };

  componentWillMount() {
    this.initColumns();
  }

  componentDidMount() {
    this.getCompetitions();
    console.log(reqGetAllCompetitions);
  }

  render() {
    const {competitions, loading, addUpdateModalShow, isUploadFileModalShow, searchType, searchName,searchPlaceholder} = this.state;

    const title = (
      <span>
        <Select
          style={{width: 200}}
          value={searchType}
          onChange={(value) => {
            if (value === 'meettype') {
              this.setState({searchPlaceholder:'Enter p / n / i'});
            }
            this.setState({searchType: value});
          }}
        >
          <Option value="Event_title">Search by Title</Option>
          <Option value="Event_Date">Search by Date</Option>
          <Option value="Event_location">Search by Location</Option>
        </Select>
        <Input
          placeholder={searchPlaceholder}
          style={{width: 200, margin: '0 10px'}}
          value={searchName}
          onChange={event => {
            this.setState({searchName: event.target.value});
          }}
        />
        <Button type="primary" onClick={this.onClickSearchCompetition}>SEARCH</Button>
      </span>
    );


    const extra = (
      <Button type="default" onClick={() => {
        this.competition = {}; //store competition in this, when we update we can get it
        console.log(this);
        this.setState({addUpdateModalShow: 1})
      }}>
        <Icon type="plus"/>
        Add Event
      </Button>
    );

    const card = [];

    for (let i = 0; i < competitions.length; i++) {
      card.push(
      <Card 
            hoverable
            style={{ width: 240, margin:20 }}
            cover={<img style={{height:200}} alt={competitions[i].event_title} src={competitions[i].event_logo} />}
            actions={[
              <LinkButton onClick={() => {
                this.eventid = competitions[i]._id;
                console.log(this.eventid);
                this.competition = competitions[i]; //store competition in this, when we update we can get it
                this.setState({addUpdateModalShow: 2});
                console.log('updated hit');
              }}><EditOutlined />
              </LinkButton>,

              <LinkButton onClick={ async () => {
                this.eventid = competitions[i]._id;
                console.log(this.eventid);
                this.competition = competitions[i]; //store competition in this, when we update we can get it
                console.log(this.competition);
                await reqDeleteCompetition(this.competition);
                console.log('delete hit');
                message.success( 'Deleted successful')
                this.competition = {};
              }}><DeleteOutlined />
              </LinkButton>
            ]}
          >
            <Meta title = {competitions[i].event_title} description={competitions[i].event_date
               + ', ' + competitions[i].event_location }  />
  
      </Card>);
      console.log('hi');
    }

    return (

      <div className="competition">
        <Header/>
        <Card title={title} extra={extra}>

        <div style={{width: 1000}}>
          <div style={{width: 250}}>
            {card}
          </div>
        </div>
         
          <Modal
            visible={addUpdateModalShow !== 0}
            title={addUpdateModalShow === 1 ? 'Add Event' : 'Update Event'}
            okText="Create"
            onOk={this.onCreateUpdateModal}
            onCancel={this.onCancelUpdateModal}
          >
            <AddUpdateForm competition={this.competition} setForm={form => this.form = form}/>
          </Modal>
          <Modal
            visible={isUploadFileModalShow}
            title="Upload Competition MDB file"
            okText="Create"
            onOk={this.onCreateUploadFileModal}
            onCancel={this.onCancelUploadFileModal}
          >
          </Modal>
        </Card>
      </div>
    );
  }
}

export default Competition;

